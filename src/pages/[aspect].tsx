import React from 'react';
import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { readFileSync, existsSync, readdirSync } from 'fs';
import { join, parse } from 'path';
import { ParsedUrlQuery } from 'querystring';
import { safeLoad } from 'js-yaml';

export interface Props {
  yamlData?: any;
}

export interface Params extends ParsedUrlQuery {
  aspect: string;
}

const AspectPage: NextPage<Props> = ({ yamlData }) => (
  <main>
    <p>{JSON.stringify(yamlData)}</p>
  </main>
);

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const yamlDirectory = join(process.cwd(), 'yaml');
  const filenames = readdirSync(yamlDirectory);
  const paths = filenames.map((filename) => ({
    params: { aspect: parse(filename).name },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const result = { props: { yamlData: {} } };
  const yamlFilePath = join(
    process.cwd(),
    'yaml',
    `${params?.aspect ?? ''}.yaml`
  );
  if (!existsSync(yamlFilePath)) {
    return result;
  }
  const text = readFileSync(yamlFilePath, 'utf8');
  result.props.yamlData = safeLoad(text) || {};
  return result;
};

export default AspectPage;
