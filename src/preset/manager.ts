import { addons, types } from "@storybook/addons";

import { TOOL_ID, ADDON_ID, PANEL_ID } from "../constants";
import { Panel } from "../Panel";
import { Tool } from "../Tool";

// Register the addon
addons.register(ADDON_ID, () => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: "Git",
    match: ({ viewMode }) => !!(viewMode && viewMode.match(/^(story|docs)$/)),
    render: Tool,
  });
  // Register the panel
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Git",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
  });
});
