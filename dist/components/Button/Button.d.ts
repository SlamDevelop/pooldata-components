import React from 'react';
import type * as Stitches from '@stitches/react';
import * as Styled from './Button.style';
export declare type ButtonType = 'button' | 'submit';
export declare type ButtonColor = Stitches.VariantProps<typeof Styled.Button>['color'];
export interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    color?: Stitches.VariantProps<typeof Styled.Button>['color'];
    onClick?: () => void;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export { Button };
