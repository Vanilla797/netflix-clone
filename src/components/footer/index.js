import React from "react";
import {
  Container,
  Row,
  Column,
  Link,
  Title,
  Text,
  Break,
} from "./styles/footer";

export default function Footer({ children, ...restPros }) {
  return <Container {...restPros}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restPros }) {
  return <Row {...restPros}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restPros }) {
  return <Column {...restPros}>{children}</Column>;
};

Footer.Link = function FooterLink({ children, ...restPros }) {
  return <Link {...restPros}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restPros }) {
  return <Title {...restPros}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restPros }) {
  return <Text {...restPros}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restPros }) {
  return <Break {...restPros}>{children}</Break>;
};
