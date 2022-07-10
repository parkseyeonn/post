import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        themeColor1: string;
        themeColor2: string;
        themeColor3: string;
        lightThemeColor1: string;
        textColor: string;
        bgColor: string;
        accentColor: string;
        borderColor: string;
        white: string;

        defaultFontSize: string;
        titleFontSize: string;
        subTitleFontSize: string;

        modalTitleFontSize: string;

        containerWidth: string;

        button: {
            mini: string;
            normal: string;
        }
    }
}
