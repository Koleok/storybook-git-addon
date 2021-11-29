import { StoryFn as StoryFunction, StoryContext } from "@storybook/addons";
import { useEffect, useGlobals } from "@storybook/addons";
import { Branch } from "./gitApi";

export const withGlobals = (StoryFn: StoryFunction, context: StoryContext) => {
  const [{ branches }] = useGlobals();

  // Is the addon being used in the docs panel
  const isInDocs = context.viewMode === "docs";

  const checkedOut = branches?.find((b: Branch) => b.checkedOut).name || "";

  useEffect(() => {
    // Execute your side effect here
    // For example, to manipulate the contents of the preview
    const selectorId = isInDocs
      ? `#anchor--${context.id} .docs-story`
      : `#root`;

    displayToolState(selectorId, { checkedOut, isInDocs });
  }, [checkedOut]);

  return StoryFn();
};

function displayToolState(selector: string, state: any) {
  const rootElement = document.querySelector(selector);

  let preElement = rootElement.querySelector("pre");

  if (state.checkedOut) {
    if (!preElement) {
      preElement = document.createElement("pre");
      preElement.style.setProperty("position", "absolute");
      preElement.style.setProperty("bottom", "1px");
      preElement.style.setProperty("padding", "1rem");
      preElement.style.setProperty("background-color", "#eee");
      preElement.style.setProperty("border-radius", "3px");
      preElement.style.setProperty("max-width", "600px");
      rootElement.appendChild(preElement);
    }

    preElement.innerText = state.checkedOut
      ? `on branch "${state.checkedOut}"`
      : "";
  }
}
