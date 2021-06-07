import React from "react";
import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";

export default function Jumbotron({
  children,
  direction = "row",
  ...restPros
}) {
  return (
    <Item {...restPros}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restPros }) {
  return <Container {...restPros}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restPros }) {
  return <Pane {...restPros}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restPros }) {
  return <Title {...restPros}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restPros }) {
  return <SubTitle {...restPros}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({ ...restPros }) {
  return <Image {...restPros} />;
};
