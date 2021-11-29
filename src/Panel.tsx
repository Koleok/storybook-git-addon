import React, { useEffect } from "react";
import { useGlobals } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import { PanelContent } from "./components/PanelContent";
import { checkout, getBranches } from "./gitApi";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const [{ branches = [] }, updateGlobals] = useGlobals();

  const updateBranches = () => {
    getBranches().then(({ branches }) => updateGlobals({ branches }));
  };

  useEffect(updateBranches, []);

  return (
    <AddonPanel {...props}>
      <PanelContent
        branches={branches}
        checkoutBranch={(name) => checkout(name).then(updateBranches)}
      />
    </AddonPanel>
  );
};
