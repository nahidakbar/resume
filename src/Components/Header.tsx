import React from "react";

import DocumentTitle from "react-document-title";
import { Container, Full } from "Components/Reactive";

export default function Header(props: any) {
  return (
    <Container>
      <Full>
        <DocumentTitle title={props.title}>
          <h1>{props.title}</h1>
        </DocumentTitle>
      </Full>
    </Container>
  );
}
