import Styled from 'styled-components';

export const _Container = Styled.div`
    width: 100%;
    padding: 20px;
`;
export const _UserTitle = Styled.div`
    width: 100%;
    text-align: left;
    & h1{
        color: #1B2F5D;
        font-size: 30px;
        font-weight: 700;
    }
`;
export const _Transaction = Styled.div`
    background-color: #fff;
    width: 100%;
    margin-top: 10px;
    padding: 20px 40px;
    border-radius: 10px;
    border: 2px solid #e5e5e5;
`;
export const _ContainerDivers = Styled.div`
    display: flex;
    margin-top: 40px;
`;
export const _Drivers = Styled.div`
    background-color: #fff;
    width: 70%;
    padding: 20px 40px;
    border-radius: 10px;
    border: 2px solid #e5e5e5;
`;
export const _Report = Styled.div`
    width: 30%;
    margin-left: 20px;
    & div{
        background-color: #fff;
    }
`;
export const _ReportEarnings = Styled.div`
    padding: 20px;
    border: 2px solid #e5e5e5;
    border-radius: 15px;
    margin-bottom: 20px;
`;