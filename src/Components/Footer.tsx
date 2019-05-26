import React from "react";
import { Container, Full } from "Components/Reactive";
import ReactMarkdown from "react-markdown";

export default function Footer(props: any) {
  return (
    <React.Fragment>
      <Container className="printOnly printFooter">
        <Full>
          <ReactMarkdown source="For full portfolio, please visit: https://resume.nahidakbar.net." />
        </Full>
      </Container>
    </React.Fragment>
  );
}
