import {DefaultTheme} from "styled-components";

const commonStyle = {
    modalZIndex: 1000,
    headerZIndex: 100,

    white: '#f0f0f0',

    defaultFontSize: '14px',
    titleFontSize: '30px',
    subTitleFontSize: '18px',

    modalTitleFontSize: '18px',
    boxShadow: '0 1px 3px 1px rgb(0 0 0 / 10%)',
    hoverBoxShadow: '0 1px 3px 1px rgb(0 0 0 / 20%)',

    containerWidth: '1000px',
};

export const lightTheme: DefaultTheme = {
    themeColor1: '#66BFBF',
    themeColor2: '#FF0063',
    themeColor3: '#C4D7E0',
    lightThemeColor1: '#EAF6F6',
    warningColor: '#7b041f',
    textColor: 'black',
    bgColor: '#F9F9F9',
    accentColor: '#AA14F0',
    borderColor: 'rgba(0, 0, 0, 0.2)',
    ...commonStyle,
};
