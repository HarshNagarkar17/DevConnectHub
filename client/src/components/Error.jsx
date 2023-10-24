import React from 'react';
import { StyledError } from "./styledError"

export const Error = ({ error }) => {
  return (
    <div>
      <StyledError>{error}</StyledError>
    </div>
  );
};