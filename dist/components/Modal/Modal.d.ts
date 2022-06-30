import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
export interface ContentProps {
    children: React.ReactNode;
    className?: string;
}
declare function Content({ children, className }: ContentProps): JSX.Element;
declare const Root: React.FC<DialogPrimitive.DialogProps>;
declare const Trigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const Title: import("@stitches/react/types/styled-component").StyledComponent<React.ForwardRefExoticComponent<DialogPrimitive.DialogTitleProps & React.RefAttributes<HTMLHeadingElement>>, {}, {}, import("@stitches/react/types/css-util").CSS<{}, {
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
}>>;
declare const Description: import("@stitches/react/types/styled-component").StyledComponent<React.ForwardRefExoticComponent<DialogPrimitive.DialogDescriptionProps & React.RefAttributes<HTMLParagraphElement>>, {}, {}, import("@stitches/react/types/css-util").CSS<{}, {
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
}>>;
declare const Close: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
export { Root, Trigger, Content, Title, Description, Close, };
