import Styled from "styled-components";
import Input from "../../atom/input/Input";
//sidebar navigation styling
export const _Logo = Styled.div`
display: flex;
justify-content: center;
width: 300px;
height: 60px;
    & img{
        object-fit: cover;
    }
`;
export const _Sidebar = Styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    width: 300px;
    height: 100%;
    color: #49597D;
    font-size: 20px;
    font-weight: 400;
    padding: 20px 0;
`;
export const _Nav = Styled.nav`
   width: 300px;
   margin-top: 200px;
`;

export const _Profile = Styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 0;
    margin-bottom: 100px;
    padding: 0 40px;
    & div{
        margin-right: 15px;
        & img{
            width: 60px;
            height: 60px;
            object-fit: cover;
            border-radius: 10px;
        }
    }
`;
export const  _ProfileInfo = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    & button{
        color: #0251E1;
        font-size: 16px;
        & span{
            margin-left: 10px;
        }
    }
`;
//top navigation styling
export const _Main = Styled.div`
    position: relative;
    left: 300px;
    width: calc(100% - 300px);
    height: 100vh;
`; 
export const _Header = Styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #49597D;
`;
export const _SearchForm = Styled.form`
    width: 500px;
    display: flex;
    align-items: center;
`;
export const _SearchInput = Styled(Input)`
    width: 350px;
    height: 40px;
    border-radius: 5px;
    margin-right: 5px;
    padding: 5px 10px;
`;
export const _Notification = Styled.div`
    display: flex;
    align-items: center;
`;
export const _HeaderProfile = Styled.div`
   display: flex;
   align-items: center;
   & img{
       width: 50px;
       height: 50px;
       border-radius: 50%;
       object-fit: cover;
       margin-right: 10px;
       border: 0.2px solid gray;
   }
   & div{
       font-size: 13px;
       font-weight: 600;
   }
`;