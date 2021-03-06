import React from 'react';
import styled from 'styled-components';
import { shade } from 'polished';
import { styled as MaterialStyled, Button } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import * as colors from '../../../assets/colors';

export const Container = styled.div`
  width: 265px;
  display: flex;
  flex-direction: column;
  margin-bottom:-5px;

  &:before {
    content: '';
    height: 10px;
    width: 100%;
    background-color: ${props => (props.highlighted ? `${colors.orange}` : 'transparent')};
    display: block;
    top: -10px;
    position: relative;
    border-radius: 4px 4px 0px 0px;
    align-self: center;
  }

  &:after {
    content: '';
    height: 5px;
    width: 100%;
    background-color: ${props => (props.highlighted ? `${colors.orange}` : 'transparent')};
    display: block;
    top: 0px;
    position: relative;
    border-radius: 0px 0px 5px 5px;
    align-self: center;
  }
`;

export const ImgCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top:25px;
`;


export const CardHeader = styled.div`
  display: flex;
  justify-content: center;
  padding: 34px 26px 0px;
  flex-direction: column;

  p {
    color: ${colors.darkBlue};
    font-size: 26px;
    font-weight: 700;
    line-height: 26px;
    text-align: center;
    margin-top: -20px;
    margin-bottom: 27px
  }
`;

export const SeparatorLine = styled.div`
  background-color: ${colors.lightWhite};
  height: 1px;
  width: 100%;
`;

export const CardPrices = styled.div`
  padding: 30px 15px 35px;

  a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const PriceContainer = styled.div`
  color: ${colors.lightBlack};
  font-size: 13px;
  font-weight: 700;
  line-height: 19px;
  text-align: center;

  span {
    font-weight: 400;
    text-decoration: line-through
  }

  p{
    text-align: center;
    font: normal normal normal 13px/19px Montserrat;
    letter-spacing: 0px;
    color: #333333;
  }
`;

export const PriceByMonthContainer = styled.div`
  color: ${colors.darkBlue};
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  margin-top:5px;

  span {
    font-weight: 700;
    font-size: 35px
  }
`;

export const ButtonContainer = MaterialStyled((
  { isSelected, ...rest }) => <Button {...rest} />)({
  backgroundColor: props => (props.isSelected ? `${colors.orange}` : `${colors.lightBlue} !important`),
  borderRadius: '26px',
  color: colors.white,
  fontSize: '18px',
  fontWeight: 700,
  height: '44px',
  lineHeight: '27px',
  marginBottom: '32px',
  marginTop: '25px',
  marginLeft:'2px',
  width: '229px',
  textTransform: 'capitalize',


  '&.MuiButton-root:hover': {
    backgroundColor: `${colors.orange}`,
    opacity: '0.8 !important',
    color: `${shade(0.05, '#f4ede8')} !important`
  }
});

export const TextYearFree = styled.div`
  align-items: center;
  color: ${colors.lightBlack};
  display: flex;
  font-size: 14px;
  font-weight: 700;
  justify-content: center;
  line-height: 20px;
  margin-bottom: 12px;
  text-align: center;
  margin-left:24px;
`;

export const IconInfoContainer = MaterialStyled(({ ...rest }) => <InfoIcon {...rest} />)({
  fill: `${colors.darkBlue} !important`,
  maxHeight: '17px',
  maxWidth: '17px'
});

export const DiscountContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  span + span {
    align-items: center;
    background-color: ${colors.blueMarinho};
    border-radius: 224px;
    color: ${colors.white};
    display: flex;
    font-family: 'Montserrat', 'Helvetica', 'Arial', sans-serif;
    font-size: 14px;
    font-weight: 700;
    height: 23px;
    justify-content: center;
    line-height: 14px;
    margin-left: 8px;
    width: 80px;
  }
`;

export const DiscountText = styled.span`
  align-items: center;
  color: ${colors.darkBlue};
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  flex: none;
`;

export const CardInfo = styled.div`
  padding: 24px 15px 30px;
  margin-left: 12px;
  & p:nth-child(1),
  & p:nth-child(3) {
    & span {
      border-bottom: 1px dashed ${colors.lightBlue};
      padding-bottom: 5px;
    }
  }
`;

export const PlanText = styled.p`
  color: ${colors.lightBlack};
  font-size: 15px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
  margin: 0px;
`;
