import Styled from "styled-components";
import Input from "../../atom/input/Input";
//sidebar navigation styling
export const Logo = Styled.div`
display: flex;
justify-content: center;
width: 300px;
height: 60px;
    & img{
        object-fit: cover;
    }
`;
export const Sidebar = Styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    width: 400px;
    height: 100%;
    color: #49597D;
    font-size: 20px;
    font-weight: 400;
    padding: 20px 0;
`;
export const Nav = Styled.nav`
   width: 300px;
   margin-top: 200px;
`;

export const Profile = Styled.div`
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
export const  ProfileInfo = Styled.div`
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
export const Main = Styled.div`
    position: relative;
    left: 400px;
    width: calc(100% - 400px);
    height: 100vh;
`; 
export const Header = Styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #49597D;
`;
export const SearchForm = Styled.form`
    width: 500px;
    display: flex;
    align-items: center;
`;
export const SearchInput = Styled(Input)`
    width: 450px;
    height: 40px;
    border-radius: 5px;
    margin-right: 5px;
    padding: 1.5rem 1.2rem;
    border-bottom: 0;
`;
export const Notification = Styled.div`
    display: flex;
    align-items: center;
`;
export const HeaderProfile = Styled.div`
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