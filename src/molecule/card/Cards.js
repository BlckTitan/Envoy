import React from 'react'
//import './scss/card.scss';
import styled from 'styled-components';
//#0251E1
//#4ECDC4
//#1B2F5D
const CardContainer = styled.div`
  background-color: ${(props)=>props.cardColor};
  width: 28rem;
  height: 13rem;
  padding: 1.5rem;
  border-radius: 0.75rem;
`;
const Wrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 0.375rem;
`;
const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 2rem;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.875rem;
`;
const TextContent = styled.span`
  color: rgb(229 231 235);
  margin: 0 0.125rem;
  font-weight: 600;
`;
const TextPeriod = styled(TextContent)`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
const TextTitle = styled(TextContent)`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;
const TextPrice = styled(TextContent)`
  color: #fff;
  font-size: 2.25rem;
  line-height: 2.5rem;
`;
export default function Cards({price, title, period, type, icon:Ico, color}) {
  if(type === 'earnings'){type = "#0251E1"}
  if(type === 'transactions'){type = "#1B2F5D"}
  if(type === 'drivers'){type = "#4ECDC4"}
  return(
    <CardContainer cardColor={color}>
      <Wrapper>
        <Icon>
          <Ico fontSize="large"/>
        </Icon>
      </Wrapper>
      <Text>
        <TextTitle>{title}</TextTitle>
        <TextPrice>{price}</TextPrice>
        {(period === '') ? null : <TextPeriod>{period}</TextPeriod>}
      </Text>
    </CardContainer>
  );
}
//{icon} icon: <LocalAtmIcon/>**array
//{icon: LocalAtmIcon}