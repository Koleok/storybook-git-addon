import { StoryFn as StoryFunction } from "@storybook/addons";

export const withRoundTrip = (storyFn: StoryFunction) => {
  return storyFn();
};
