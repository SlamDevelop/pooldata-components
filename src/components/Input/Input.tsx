import React from 'react';
import type * as Stitches from '@stitches/react';

import * as Styled from './Input.style';

export type InputType = 'text' | 'password';
export type InputColor = Stitches.VariantProps<typeof Styled.Input>['color'];

export interface InputProps {
    id?: string;
    type?: 'text' | 'password';
    color?: Stitches.VariantProps<typeof Styled.Input>['color'];
    value?: string;
    placeholder?: string;
}

const Input = ({
    id,
    type,
    color,
    value,
    placeholder
}: InputProps) => (
    <Styled.Input
        id={id}
        type={type}
        color={color}
        defaultValue={value}
        placeholder={placeholder}
    />
);

export { Input }