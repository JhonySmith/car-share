import { createGlobalStyle } from 'styled-components';

import FuturaDemiCWoff from './fonts/FUTURADEMIC.woff';
import FuturaDemiCWoff2 from './fonts/FUTURADEMIC.woff2';
import FuturaBookCWoff from './fonts/FUTURABOOKC.woff';
import FuturaBookCWoff2 from './fonts/FUTURABOOKC.woff2';

export default createGlobalStyle`
    body {
        margin: 0;
        
    }

    @font-face {
        font-family: 'FuturaDemiC';
        src: local('FuturaDemiC'), local('FuturaDemiC'),
        url(${FuturaDemiCWoff}) format('woff2'),
        url(${FuturaDemiCWoff2}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'FuturaBookC';
        src: local('FuturaBookC'), local('FuturaBookC'),
        url(${FuturaBookCWoff}) format('woff2'),
        url(${FuturaBookCWoff2}) format('woff');
        font-weight: 600;
        font-style: normal;
    }
`;
