import {DefaultTheme} from "styled-components";

const commonStyle = {
    modalZIndex: 1000,
    headerZIndex: 100,

    white: '#f0f0f0',

    defaultFontSize: '14px',
    titleFontSize: '30px',
    subTitleFontSize: '18px',

    modalTitleFontSize: '18px',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 15%)',

    containerWidth: '1000px',
};

export const lightTheme: DefaultTheme = {
    themeColor1: '#66BFBF',
    themeColor2: '#FF0063',
    themeColor3: '#C4D7E0',
    lightThemeColor1: '#EAF6F6',
    textColor: 'black',
    bgColor: '#F9F9F9',
    accentColor: '#AA14F0',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    ...commonStyle,
};
