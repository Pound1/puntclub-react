import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /*---Button Style---*/
    .buttonContainer {
        box-shadow:0 0 15px 0px rgba(45, 130, 193, 0.50);
        transform: skew(-10deg);
        padding:2px 25px;
        background: rgb(53,81,164);
        background: -moz-linear-gradient(90deg, rgba(53,81,164,1) 0%, rgba(49,205,176,1) 100%);
        background: -webkit-linear-gradient(90deg, rgba(53,81,164,1) 0%, rgba(49,205,176,1) 100%);
        background: linear-gradient(90deg, rgba(53,81,164,1) 0%, rgba(49,205,176,1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#3551a4",endColorstr="#31cdb0",GradientType=1);
        transition:0.4s ease all;
        cursor:pointer;
        &:hover {
            box-shadow:0 0 15px 7px rgba(45, 130, 193, 0.60);
        }
        .buttonText {
            transform: skew(10deg);
            font-size:12px;
            color:white;
            text-decoration:none;
            font-family:"Montserrat-Light";
            padding:3px 0;
        }
    }
`;
