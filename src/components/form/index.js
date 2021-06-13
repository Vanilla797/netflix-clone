import React from "react";
import {
  Container,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
  Base,
} from "./styles/form";

function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

export default Form;

Form.Error = function FromError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>;
};

Form.Base = function FromBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>;
};
Form.Title = function FromTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FromText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
Form.TextSmall = function FromTextSmall({ children, ...restProps }) {
  return <TextSmall {...restProps}>{children}</TextSmall>;
};
Form.Link = function FromLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Form.Input = function FromInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Submit = function FromSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
