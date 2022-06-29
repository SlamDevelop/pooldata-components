import React from 'react';
import { ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<React.FC<import("@radix-ui/react-dialog").DialogProps>>;
export default _default;
export interface CustomProps {
    button: string;
    content: Node;
}
export declare const Custom: {
    ({ button, content }: CustomProps): JSX.Element;
    args: {
        button: string;
        content: JSX.Element;
    };
};
