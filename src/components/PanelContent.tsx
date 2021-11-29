import React from "react";
import { styled } from "@storybook/theming";
import { Button } from "@storybook/components";
import { List } from "./List";
import { Branch } from "../gitApi";

export const RequestDataButton = styled(Button)({
  marginTop: "1rem",
});

interface PanelContentProps {
  branches: Branch[];
  checkoutBranch: (branch: string) => void;
}

export const PanelContent: React.FC<PanelContentProps> = ({
  branches,
  checkoutBranch,
}) => <List branches={branches} onClick={checkoutBranch} />;
