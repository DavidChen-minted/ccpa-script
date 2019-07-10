import React from 'react';
import { NextPage } from 'next';
import Loading from '../src/components/Loading';
import ManifestHead from '../src/components/Head/ManifestHead';
import Link from '../src/components/Link';

const Page: NextPage = () => (
  <main>
    <ManifestHead
      title="Nextjs Typescript Eslint"
      themeColor="red"
      hrefPage="/"
      hrefManifest="/static/manifest/manifest.json"
    />
    <span>This is index</span>
    <Loading />
    <Link href="/about" prefetch={false}>
      <a>about</a>
    </Link>
  </main>
);

export default Page;
