import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        themeColor1: string;
        themeColor2: string;
        themeColor3: string;
        lightThemeColor1: string;
        textColor: string;
        bgColor: string;
        warningColor: string;
        accentColor: string;
        borderColor: string;
        boxShadow: string;
        hoverBoxShadow: string;
        white: string;

        modalZIndex: number;
        headerZIndex: number;

        defaultFontSize: string;
        titleFontSize: string;
        subTitleFontSize: string;

        modalTitleFontSize: string;

        containerWidth: string;
    }
}
