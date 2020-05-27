import React, { FC } from 'react';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import sectionTitleStyles from 'styles/sectionTitleStyles';
import BreakLine from 'styles/BreakLine';
import { useSelector } from 'react-redux';
import stepAdapter from 'features/step/stepEntity';
import {
  selectCheckScriptStep,
  selectCurrentStepId,
} from 'features/step/selector';
import ContentTableItem from './ContentTableItem';

const contentTableStyles = css`
  max-width: ${rem(400)};
  width: 30%;
  border-right: ${rem(1)} solid black;
  margin-right: ${rem(10)};
`;

const contentTableWindowStyles = css`
  margin: ${rem(10)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const { selectAll: selectCheckScriptStepArray } = stepAdapter.getSelectors(
  selectCheckScriptStep
);

const ContentTable: FC = () => {
  const stepArray = useSelector(selectCheckScriptStepArray);
  const currentStepId = useSelector(selectCurrentStepId);
  return (
    <div css={contentTableStyles}>
      <h3 css={sectionTitleStyles}>content table</h3>
      <BreakLine />
      <div css={contentTableWindowStyles}>
        {stepArray.map(({ id, visible, order }) => {
          return (
            <ContentTableItem
              key={`${id}-${visible}`}
              id={id}
              visible={visible}
              order={order}
              selected={id === currentStepId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContentTable;
