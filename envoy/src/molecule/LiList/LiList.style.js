import Styled from 'styled-components';

export const _ListItems = Styled.li`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    padding: 0 40px;
    text-align: left;
    border-left: 3px solid #fff;
    &.active{
        color: #0251E1;
    }
    &:hover{
        border-left: 3px solid #0251E1;
        color: #0251E1;
    }
`;