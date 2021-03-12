import { createGlobalStyle } from "styled-components";

export const HeaderStyles = createGlobalStyle`
    .header {
        background-image:url('/images/lights.jpg');
        background-size:cover;
        background-position:center center;
        background-repeat:no-repeat;
        .headerBackgroundColor {
            background-color:rgba(0,0,0,0.2);
            min-height:40vh;
            .headerNav {
                display:flex;
                align-items:center;
                justify-content:space-between;
                .puntClubLogo {
                    display:flex;
                    align-items:center;
                    h1 {
                        font-family:"Montserrat-Black";
                        color:white;
                        margin:0;
                    }
                    img {
                        margin-right:-18px;
                    }
                }
                .loginContainer {
                    display:flex;
                    align-items:center;
                    justify-content:flex-end;
                    .loginLink {
                        font-family:"Montserrat-Light";
                        color:white;
                        font-size:12px;
                        text-decoration:none;
                        margin-right:30px;
                        &:hover {
                            text-decoration:underline;
                        }
                    }
                }
            }
        }
        .linkBox {
            height:100px;
            display:flex;
            align-items:center;
            flex-direction:column;
            justify-content:space-around;
            padding:10px 0;
            position:relative;
            .navIcon {
                color:white;
                height:40px;
            }
            h2 {
                color:white;
                font-family:"Montserrat-ExtraBold";
                font-size:16px;
                margin:0;
            }
            .navHover {
                position:absolute;
                bottom:0px;
                width:100%;
                height: 50px;
            }
        }
    }
`;
