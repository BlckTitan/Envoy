import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import Styled from 'styled-components';
//scss
import './scss/barchart.scss';
  
export const _ReportEarningsTitle = Styled.div`
    width: 100%;
    padding-left: 20px;
    margin-bottom: 10px;
    & h1{
        font-size: 20px;
        font-weight: 500;
        color: #1B2F5D;
    }
`;
  
export default function Barchart({data, title, keyData}) {
  return (
            <>
                <_ReportEarningsTitle>
                    <h1>{title}</h1>
                </_ReportEarningsTitle>
                <BarChart
                    width={330}
                    height={250}
                    data={data}
                    margin={{
                        top: 25,
                        left: 0,
                        bottom: 5
                    }}
                    >
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={keyData} fill="#0251E1"/>
                </BarChart>
            </>
  )
}
