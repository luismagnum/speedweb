import styled from 'styled-components';

export const Container = styled.div`
   width:100%;
   height:70px;
   background-color:#23394d;

`;
export const Wraper = styled.div`
    width:100%;
    max-width:1300px;
    heigth:100%;
    display:flex;
    flex-wrap: wrap;
    justify-content:space-between;
    margin:auto;

`;

export const LogoContainer = styled.div`
   margin-left :0.5rem;
   margin-rigth: 0.5rem;
   margin-top:8px;
   display: flex;
   align-items: center;
   font-size: 1.9rem;
   font-bold;
   font-family: Poppins;
   color: #00c6c5;


   p{
      &:nth-child(2){
         margin-left: 1rem;
         font-family:"Poppins";
         font-size: 1.2rem;
         font-weight: 500;
         color: #00c6c5;
      }
   }
   svg{
      fill: #00c6c5;
      margin-rigth: 0.5rem;
   }
`;
export const Menu = styled.ul`
   heigth:100%;
   display:flex;
   justify-content:space-between;
   list-style:none;

   @media screen and (max-width: 960px){
      background-color:#23394d;
      position: absolute;
      top: 70px;
      left: ${({ open }) => (open ? "0" : "-100%")}; //Import
      width: 100%;
      height: 90vh;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      transition: 0.5s all ease;
   }
`;

export const MenuItem = styled.li`
   heigth:100%;

   @media screen and (max-width: 960px) {
      width: 100%;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
`;

export const MenuItemLink = styled.a`
   display:flex;
   justify-content:center;
   align-items:center;
   margin-top: 20px;
   heigth:100%;
   padding:0.5rem 2.5rem;
   color:#00c6c5;
   font-family:san-serif;
   font-size:1rem;
   font-weigth:300;
   cursor:pointer;
   transition:0.5s all ease;

   &:hover{
      color:#fff;
      background-color:#e0792a;
      transition:0.5 all ease;

      div {
         svg {
           fill: #23394d;
         }
       }
   }

   div{
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        display: none;
        fill: #e0792a;
        margin-right: 0.5rem;
      }
   }

   @media screen and (max-width: 960px){
      width: 100%;

      div {
         width: 30%;
         justify-content: left;

         svg {
           display: flex;
         }
       }
   }

   @media screen and (max-width: 880px) {
      div {
        width: 40%;
        justify-content: left;
        svg {
          display: flex;
        }
      }
    }
    @media screen and (max-width: 500px) {
      div {
        width: 60%;
        justify-content: left;
        svg {
          display: flex;
        }
      }
    }
    @media screen and (max-width: 260px) {
      div {
        width: 100%;
        justify-content: left;
        svg {
          display: flex;
        }
      }
    }

`;

export const MobileIcon = styled.div`
   display: none;

   @media screen and (max-width: 960px){
      display: flex;
      align-items: center;
      cursor: pointer;

      svg{
         fill: #e07924;
         margin-rigth: 0.5rem; 
      }
   }
`;