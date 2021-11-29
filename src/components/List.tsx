import React, { Fragment, useState } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { Icons, IconsProps } from "@storybook/components";
import { Branch } from "./types";

const ListWrapper = styled.ul({
  listStyle: "none",
  fontSize: 14,
  padding: 0,
  margin: 0,
});

const Wrapper = styled.div({
  display: "flex",
  width: "100%",
  borderBottom: `1px solid ${convert(themes.normal).appBorderColor}`,
  "&:hover": {
    background: convert(themes.normal).background.hoverable,
  },
});

const Icon = styled(Icons)<IconsProps>({
  height: 10,
  width: 10,
  minWidth: 10,
  color: convert(themes.normal).color.mediumdark,
  marginRight: 10,
  transition: "transform 0.1s ease-in-out",
  alignSelf: "center",
  display: "inline-flex",
});

const HeaderBar = styled.div({
  padding: convert(themes.normal).layoutMargin,
  paddingLeft: convert(themes.normal).layoutMargin - 3,
  background: "none",
  color: "inherit",
  textAlign: "left",
  cursor: "pointer",
  borderLeft: "3px solid transparent",
  width: "100%",

  "&:focus": {
    outline: "0 none",
    borderLeft: `3px solid ${convert(themes.normal).color.secondary}`,
  },
});

const Description = styled.div({
  padding: convert(themes.normal).layoutMargin,
  marginBottom: convert(themes.normal).layoutMargin,
  fontStyle: "italic",
  cursor: "pointer",
  "&:hover": {
    background: convert(themes.normal).background.hoverable,
  },
});

interface ListProps {
  branches: Branch[];
  onClick: (x: string) => void;
}

export const List: React.FC<ListProps> = ({ onClick, branches }) => (
  <ListWrapper>
    {branches.map((branch, idx) => (
      <Description onClick={() => onClick(branch.name)} key={idx}>
        {branch.checkedOut ? <strong>{branch.name}</strong> : branch.name}
      </Description>
    ))}
  </ListWrapper>
);
