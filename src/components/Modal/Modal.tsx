import React from 'react';
import { Cross2Icon } from '@radix-ui/react-icons';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import * as Styled from './Modal.style';


export interface ContentProps {
    children: React.ReactNode
}

function Content({ children }: ContentProps) {
    return (
        <DialogPrimitive.Portal>
            <Styled.Overlay />
            <Styled.Content>
                <Close asChild>
                    <Styled.CrossButton aria-label="Close">
                        <Cross2Icon />
                    </Styled.CrossButton>
                </Close>
                {children}
            </Styled.Content>
        </DialogPrimitive.Portal>
    );
}

const Root = DialogPrimitive.Root;
const Trigger = DialogPrimitive.Trigger;
const ModalContent = Content;
const Title = Styled.Title;
const Description = Styled.Description;
const Close = DialogPrimitive.Close;

export {
    Root,
    Trigger,
    Content,
    Title,
    Description,
    Close,
};