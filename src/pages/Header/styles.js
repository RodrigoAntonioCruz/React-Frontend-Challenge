import styled from 'styled-components';
import * as colors from '../../assets/colors'
import headerImgLeft from '../../assets/header_img_left.svg';
import headerImgRight from '../../assets/header_img_right.svg';

export const Container = styled.div`

  @media screen and (min-width: 1001px) {
    &:before {
      content: "";
      position: absolute;
      top: 190px;
      left: 0px;
      width: 280px;
      height: 253px;
      background-image: url(${headerImgLeft});
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 260px;
      z-index: 1;
    }
    &:after {
      content: "";
      position: absolute;
      top: 190px;
      right: 0px;
      width: 280px;
      height: 253px;
      background-image: url(${headerImgRight});
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 260px;
      z-index: 1;
    }
  }

  @media screen and (min-width: 1300px) and (max-width: 1530px) {
    &:before {
      content: "";
      position: absolute;
      top: 120px;
      left: 0px;
      width: 420px;
      height: 353px;
      background-image: url(${headerImgLeft});
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 330px;
      z-index: 1;
    }
    &:after {
      content: "";
      position: absolute;
      top: 120px;
      right: 0px;
      width: 420px;
      height: 353px;
      background-image: url(${headerImgRight});
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 380px;
      z-index: 1;
    }
  }

  @media screen and (min-width: 1531px) and (max-width:2560px){
    &:before {
      content: "";
      position: absolute;
      top: 120px;
      left: 50px;
      width: 480px;
      height: 353px;
      background-image: url(${headerImgLeft});
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 430px;
      z-index: 1;
    }
    &:after {
      content: "";
      position: absolute;
      top: 120px;
      right: 50px;
      width: 480px;
      height: 353px;
      background-image: url(${headerImgRight});
      background-repeat: no-repeat;
      background-position: center bottom;
      background-size: 430px;
      z-index: 1;
    }
  }
`;

export const HeaderContainer = styled.div`
  color: white;
  height: 350px;
  background-color: ${colors.darkBlue};
  line-height: 1.5;
  font-weight: 300;
  overflow: hidden !important;
`;

export const Content = styled.div`
  height: 100%;
  flex: 1 !important;
  display: flex;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column;
  padding: 0 !important;
`;

export const TitleHeader = styled.div`
  margin-top:20px;
  letter-spacing: 1.5px;
  line-height: 1.1;
  font-size: 15px;
  color: ${colors.gray};
  font-weight: 500;
`;

export const DescriptionHeader = styled.div`
  max-width: 750px;

  > p {
      font-size: 23px;
      margin: 15px 0 30px;
      font-weight: bold;
      text-align: center;

    @media only screen and (max-width: 625px){
      font-size: 23px;
      width: 12em; 
      word-wrap: break-word;
      margin: 15px 0 20px;
    }


    @media only screen and (min-width: 625px) {
      font-size: 26px;
      width: 23em; 
      word-wrap: break-word;
    }

    @media only screen and (min-width: 1630px) {
      font-size: 27px;
      width: 23em; 
      word-wrap: break-word;
    }

    @media only screen and (min-width: 1580px) {
      font-size: 28px;
      width: 23em; 
      word-wrap: break-word;
    }
  }
`;

export const DescriptionContent = styled.div`
  max-width: 490px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const DescriptionView = styled.div`
    text-align: center;

    > svg {
      position: relative;
      top: 3px;
    }

    > span {
      font-size: 14px;
      padding-left: 3px;
      padding-right: 10px;
      color: ${colors.gray};
    }
  }
`;

export const BoxContainer = styled.div`
  height: 70px;
  width: 100%;
  overflow: hidden;
  bottom: 6px;
  position: relative;
  z-index: 0;

  svg > path {
    fill: ${colors.darkBlue};
  }

  button{
    background-color:transparent;
    border:none;
    position: absolute;
    top: -5px;
    left: 50%;
    width: 50px;
    margin-left: -25px;
    cursor: pointer;

    img {
      width: 100%;
      height: auto;

      :hover {
        transform: scale(1.05);
      }
    }
  }

    @media only screen and (min-width: 340px) {

      button{
        top: -6.5px;
      }
      
    }

    @media only screen and (min-width: 700px) {
      button{
        top: -6px;
      }

    }

    @media only screen and (min-width: 800px) {
      button{
        margin-top: 0.1vh;
      }
      

    }

    @media only screen and (min-width: 900px) {
      button{
        margin-top: 1vh;
      }
      height: 85px;
    }

    @media only screen and (min-width: 997px) {
      button{
        margin-top: 1vh;
      }
      height: 55px;
    }

    @media only screen and (min-width: 1220px) {
      button{
        margin-top: 2vh;
      }
     height: 60px;
    }

    @media only screen and (min-width: 1450px) {
      button{
        margin-top: 2.5vh;
      }
     height: 68px;
    }

    @media only screen and (min-width: 1700px) {
      button{
        margin-top: 3vh;
      }
     height: 70px;
  
    }

    @media only screen and (min-width: 1900px) {
      button{
        margin-top: 3.5vh;
      }

     height: 68px;
    
    }

    @media only screen and (min-width: 2250px) {
      button{
        margin-top: 4vh;
      }
      height: 70px;
  
    }

    @media only screen and (min-width: 2294px) {
      button{
        margin-top: 4.5vh;
      }
      
      height: 78px;
    }


`

