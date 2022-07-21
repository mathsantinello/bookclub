import 'styled-components';

declare module 'styled-compnents' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            third: string;
            fourth: string;
        };
        images: {
            vintageborder: string;
            bookcover: string;
        };
    };
};