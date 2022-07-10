import {DefaultTheme} from "styled-components";

const commonStyle = {
    white: '#f0f0f0',

    defaultFontSize: '14px',
    titleFontSize: '30px',
    subTitleFontSize: '18px',

    modalTitleFontSize: '18px',

    containerWidth: '1000px',

    button: {
        mini: '20px',
        normal: '30px',
    }
};

export const lightTheme: DefaultTheme = {
    themeColor1: '#66BFBF',
    themeColor2: '#FF0063',
    themeColor3: '#C4D7E0',
    lightThemeColor1: '#EAF6F6',
    textColor: 'black',
    bgColor: '#F9F9F9',
    accentColor: '#AA14F0',
    borderColor: '#433776',
    ...commonStyle,
};