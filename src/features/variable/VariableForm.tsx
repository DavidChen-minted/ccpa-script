import React, { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { css } from '@emotion/core';
import rem from 'utils/style/rem';
import variableAdapter from './variableEntity';
import { selectVariable } from './selector';
import { updateVariableValue } from './variableSlice';
import VariableInput from './VariableInput';

const variableFormStyles = css`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: repeat(3, auto);
  height: ${rem(100)};
  max-width: 60%;
  overflow: hidden;
  overflow-x: auto;
`;

const { selectAll: selectVariableArray } = variableAdapter.getSelectors(
  selectVariable
);

const VariableForm: FC = () => {
  const variableArray = useSelector(selectVariableArray);
  const dispatch = useDispatch();
  const handleChange = useCallback(
    ({ id, value }: { id: string; value: string }) => {
      dispatch(updateVariableValue({ id, value }));
    },
    [dispatch, updateVariableValue]
  );
  return (
    <div css={variableFormStyles}>
      {variableArray.map(({ id, value, description }) => (
        <VariableInput
          id={id}
          key={id}
          value={value}
          description={description}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

export default VariableForm;
