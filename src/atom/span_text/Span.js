import React from 'react';
import Styled from 'styled-components';

export const LiIcon = Styled.span`
    margin-right: 15px;
`;
export default function Span({iconElement, name}) {
  
    return <LiIcon>{iconElement || name}</LiIcon>
  
}