import type { Meta, StoryObj } from "@storybook/react";

import { CounterApp } from "./CounterApp";

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof CounterApp> = {
  component: CounterApp,
};

export default meta;
type Story = StoryObj<typeof CounterApp>;

export const FirstStory: Story = {
  args: {
    //👇 The args you need here will depend on your component
  },
};

export const Test = () => {
  return <div>test</div>;
};
