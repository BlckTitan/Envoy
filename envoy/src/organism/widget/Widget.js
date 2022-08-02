import React, { useState } from 'react';
import styled from 'styled-components';
//scss
//import './scss/widget.scss';
//molecules
import Cards from '../../molecule/card/Cards';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import PaidIcon from '@mui/icons-material/Paid';

const WidgetCard = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
`;
const Card = styled.div`
  margin: 2rem 0;
`;

export default function Widget() {
  const [card_element, set_card_element] = useState([
    {title: 'Earnings', type: 'earnings', icon: LocalAtmIcon, price: '0.00', period: 'for a month', color: '#0251E1'},
    {title: 'Transactions', type: 'transactions', icon: PaidIcon, price: '0.00', period: '', color: '#1B2F5D'},
    {title: 'Drivers', type: 'drivers', icon: DeliveryDiningIcon, price: '0.00', period: '', color: '#4ECDC4'},
  ]);
  return (
    <WidgetCard>
      {card_element.map((element)=>(
        <Card>
          <Cards 
            title={element.title}
            type={element.type}
            price={element.price}
            period={element.period}
            icon={element.icon}
            color={element.color}
          />
        </Card> 
        ))}     
    </WidgetCard>
  );
};
