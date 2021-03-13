import { createGlobalStyle } from 'styled-components'

export const BetSlipStyles = createGlobalStyle`
    .betSlipContainer {
        display:flex;
        align-items:flex-end;
        justify-content:space-around;
        h3 {
            color:white;
            font-family:"Montserrat-Black";
            font-size:14px;
        }
        p {
            color:#CCC;
            font-size:12px;
            font-family:"Montserrat-Light";
        }
    }
`
