import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import * as Tabs from './Tabs';

export default {
    title: 'Example/Tabs',
    component: Tabs.Root,
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ width: 600 }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Tabs.Root>;


export const Custom = () => (
    <Tabs.Root defaultValue="tab1">
        <Tabs.List>
            <Tabs.Trigger value="tab1">
                Tab 1
            </Tabs.Trigger>
            <Tabs.Trigger value="tab2">
                Tab 2
            </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
            <h3>Tab 1</h3>
        </Tabs.Content>
        <Tabs.Content value="tab2">
            <h3>Tab 2</h3>
        </Tabs.Content>
    </Tabs.Root>
);