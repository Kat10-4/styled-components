import styled, {css} from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType ={
    color?: string,
    fontSize?: string,
    btnType?:"primary" | "outlined",
    active?:boolean
}


export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
        //background-color: ${props => props.color || "#fb3f78"};
    padding: 10px 20px;
    border-radius: 5px;
    //color: snow;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;

    

    //&:last-child {
    //    background-color: aquamarine;
    //}

    ${props => props.btnType === "primary" && css<StyledBtnPropsType>`
        background-color: ${props => props.color || "#fb3f78"};
        color: snow;

        &:hover {
            background-color: blueviolet;
        }`}
    

    ${props => props.btnType==="outlined" && css<StyledBtnPropsType>`
        border: 2px solid ${props => props.color || "#fb3f78"};
        color: ${props => props.color || "#fb3f78"};
        background-color: transparent ;`}
    
    &:hover{
        border-color: blueviolet;
        color: blueviolet;
        background-color: transparent;
    }

    ${props => props.active && css<StyledBtnPropsType>`
        box-shadow: 5px 5px 5px 5px #261b1b;
    `}
    
    
`



export const SuperBtn = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #f3f336;
    color: #342d2d;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
   
    }
`