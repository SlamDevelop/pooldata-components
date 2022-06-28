declare const Button: import("@stitches/react/types/styled-component").StyledComponent<"button", {
    color?: "blue" | "yellow" | undefined;
}, {}, import("@stitches/react/types/css-util").CSS<{}, {
    rgb: {
        blue: string;
        yellow: string;
    };
    colors: {
        white: string;
        blue: string;
        yellow: string;
        yellowDark: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    backgroundRGBA: (rgb: string) => {
        '$$background-color-opacity': number;
        backgroundColor: string;
    };
    backgroundOpacity: (opacity: number) => {
        '$$background-color-opacity': string;
    };
}>>;
export { Button };
