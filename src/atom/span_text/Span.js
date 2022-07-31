import React from 'react';
import Styled from 'styled-components';

export const _LiIcon = Styled.span`
    margin-right: 15px;
`;
export default function Span({iconElement, name}) {
  
    return <_LiIcon>{iconElement || name}</_LiIcon>
  
}