import React, { Fragment, useEffect } from "react";
import { useGlobals } from "@storybook/api";
import {
  Icons,
  IconButton,
  WithTooltip,
  TooltipLinkList,
} from "@storybook/components";

import { Branch, checkout, getBranches } from "./gitApi";

export const Tool = () => {
  const [{ branches }, updateGlobals] = useGlobals();

  const updateBranches = () => {
    getBranches().then(({ branches }) => updateGlobals({ branches }));
  };

  useEffect(updateBranches, []);

  return (
    <Fragment>
      <WithTooltip
        placement="bottom"
        trigger="click"
        closeOnClick
        tooltip={() => (
          <TooltipLinkList
            links={(branches || []).map((b: Branch) => ({
              id: b.name,
              title: b.name,
              value: b.name,
              active: b.checkedOut,
              onClick: () => checkout(b.name).then(updateBranches),
            }))}
          />
        )}
      >
        <IconButton key="branch" title="Check out a different branch">
          <Icons icon="merge" />
        </IconButton>
      </WithTooltip>
    </Fragment>
  );
};
