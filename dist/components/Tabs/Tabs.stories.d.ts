import React from 'react';
import { ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<import("@stitches/react/types/styled-component").StyledComponent<React.ForwardRefExoticComponent<import("@radix-ui/react-tabs").TabsProps & React.RefAttributes<HTMLDivElement>>, {}, {}, import("@stitches/react/types/css-util").CSS<{}, {
    rgb: {
        blue: string;
        yellow: string;
    };
    colors: {
        white: string;
        blueLight: string;
        blue: string;
        blueDark: string;
        yellowLight: string;
        yellow: string;
        yellowDark: string;
    };
    space: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
    };
    fontSizes: {
        1: string;
        2: string;
        3: string;
    };
    borderRadius: {
        1: string;
        2: string;
    };
}, import("@stitches/react/types/config").DefaultThemeMap, {
    backgroundRGBA: (rgb: string) => {
        '$$background-color-opacity': number;
        backgroundColor: string;
    };
    backgroundOpacity: (opacity: number) => {
        '$$background-color-opacity': string;
    };
}>>>;
export default _default;
export declare const Custom: {
    (): JSX.Element;
    argTypes: {
        asChild: {
            table: {
                disable: boolean;
            };
        };
        as: {
            table: {
                disable: boolean;
            };
        };
        css: {
            table: {
                disable: boolean;
            };
        };
    };
};
