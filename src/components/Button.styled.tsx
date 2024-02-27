import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

type StyledBtnPropsType ={
    color?: string,
    fontSize?: string,
}


export const StyledBtn = styled.button<StyledBtnPropsType>`
    border: none;
    background-color: ${props=>props.color || "#fb3f78"};
    padding: 10px 20px;
    border-radius: 5px;
    color: snow;
    font-size: ${props=>props.fontSize};
    font-weight: bold;

    &:hover {
        background-color: blueviolet;
    }

    &:last-child { 
        background-color: aquamarine;
    }`

export const SuperBtn = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #f3f336;
    color: #342d2d;

    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
   
    }
`