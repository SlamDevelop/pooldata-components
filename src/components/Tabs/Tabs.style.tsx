import { styled } from '../../styles/stitches.config';
import * as TabsPrimitive from '@radix-ui/react-tabs';

const Tabs = styled(TabsPrimitive.Root, {
    display: 'flex',
    flexDirection: 'column',
});

const List = styled(TabsPrimitive.List, {
    flexShrink: 0,
    display: 'flex',
});

const Trigger = styled(TabsPrimitive.Trigger, {
    all: 'unset',
    fontFamily: 'inherit',
    padding: '0 $space$4',
    height: 45,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '$fontSizes$2',
    lineHeight: 1,
    userSelect: 'none',
    cursor: 'pointer',
    transition: '200ms',
    
    '&:hover': { color: '$colors$blue' },
    '&[data-state="active"]': {
        color: '$colors$blue',
        borderBottom: '1px solid currentColor',
    },
});

const Content = styled(TabsPrimitive.Content, {
    flexGrow: 1,
    outline: 'none',
});


export {
    Tabs,
    List,
    Trigger,
    Content
};