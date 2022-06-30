import React from 'react';
import type * as Stitches from '@stitches/react';

import * as Styled from './Button.style';

export type ButtonType = 'button' | 'submit';
export type ButtonColor = Stitches.VariantProps<typeof Styled.Button>['color'];

export interface ButtonProps {
    children: React.ReactNode;
    type?: 'button' | 'submit';
    className?: string;
    color?: Stitches.VariantProps<typeof Styled.Button>['color'];
    onClick?: () => void;
}

const Button = React.forwardRef((
    {
        children,
        type = 'button',
        className,
        color,
        onClick
    }: ButtonProps,
    ref: React.Ref<HTMLButtonElement>
) => {
    return (
        <Styled.Button
            ref={ref}
            type={type}
            className={className}
            color={color}
            onClick={onClick}
        >
            {children}
        </Styled.Button>
    );
});

export default Button;