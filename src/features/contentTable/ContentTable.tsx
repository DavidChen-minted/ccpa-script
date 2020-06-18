import React, { FC, useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import sectionTitleStyles, {
  hoverRightStyles,
  hoverLeftStyles,
} from 'styles/sectionTitleStyles';
import BreakLine from 'styles/BreakLine';
import stepAdapter from 'features/step/stepEntity';
import {
  selectCheckScriptStep,
  selectCurrentStepId,
} from 'features/step/selector';
import useScreenHeight from 'utils/customHook/useScreenHeight';
import { changeCurrentStepId } from 'features/step/stepSlice';
import ContentTableItem from './ContentTableItem';

const expandedContentTableStyles = css`
  max-width: ${rem(400)};
  width: 25%;
  border-right: ${rem(1)} solid black;
  margin-right: ${rem(10)};
`;

const unexpandedContentTableStyles = css`
  border-right: ${rem(1)} solid black;
  margin-right: ${rem(10)};
`;

const contentTableWindowStyles = ({ height = 0, bottom = 20 }) => css`
  margin: ${rem(10)};
  margin-bottom: ${rem(bottom)};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  overflow: hidden;
  overflow-y: auto;
  max-height: calc(${rem(height)} - ${rem(bottom)});
`;

const { selectAll: selectCheckScriptStepArray } = stepAdapter.getSelectors(
  selectCheckScriptStep
);

const ContentTable: FC = () => {
  const [expanded, setExpanded] = useState(true);

  const stepArray = useSelector(selectCheckScriptStepArray);
  const currentStepId = useSelector(selectCurrentStepId);

  const { height, measureRef } = useScreenHeight();

  const dispatch = useDispatch();
  const handleContentTableItemClick = useCallback(
    (id: string) => {
      dispatch(changeCurrentStepId(id));
    },
    [dispatch, changeCurrentStepId]
  );
  return expanded ? (
    <div css={expandedContentTableStyles}>
      <div>
        <button
          type="button"
          css={[sectionTitleStyles(expanded), hoverLeftStyles]}
          onClick={() => {
            setExpanded(false);
          }}
        >
          {`Steps \u25C0`}
        </button>
      </div>
      <BreakLine />
      <div css={contentTableWindowStyles({ height })} ref={measureRef}>
        {stepArray.map(({ id, visible, order }) => {
          return (
            <ContentTableItem
              key={`${id}-${visible}`}
              id={id}
              visible={visible}
              order={order}
              selected={id === currentStepId}
              onClick={handleContentTableItemClick}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <div css={unexpandedContentTableStyles}>
      <button
        type="button"
        css={[sectionTitleStyles(expanded), hoverRightStyles]}
        onClick={() => {
          setExpanded(true);
        }}
      >
        {`\u25B6`}
      </button>
    </div>
  );
};

export default ContentTable;
