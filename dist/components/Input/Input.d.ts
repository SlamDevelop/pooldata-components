import type * as Stitches from '@stitches/react';
import * as Styled from './Input.style';
export declare type InputType = 'text' | 'password';
export declare type InputColor = Stitches.VariantProps<typeof Styled.Input>['color'];
export interface InputProps {
    id?: string;
    type?: 'text' | 'password';
    color?: Stitches.VariantProps<typeof Styled.Input>['color'];
    value?: string;
    placeholder?: string;
}
declare const Input: ({ id, type, color, value, placeholder }: InputProps) => JSX.Element;
export { Input };
