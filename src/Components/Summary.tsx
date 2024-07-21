import React from "react";
import { Container, Full, HalfLeft, HalfRight } from "Components/Reactive";

export default function Summary(props: any) {
  const { audience } = props;
  const mobileNo = localStorage.mobile || " ";
  return (
    <React.Fragment>
      <Container>
        <Full>
          <span style={{ float: "right" }}>{mobileNo}</span>
          <h2>{audience.technical ? "TL;DR" : "Summary"}</h2>
        </Full>
      </Container>
      <Container>
        <HalfLeft />
        <HalfRight>
          <ul>
            {props.data.map((element: string[]) => {
              let compiled = element
                .slice(0, audience.detailLevel + 1)
                .join(" ");
              return <li key={compiled}>{compiled}</li>;
            })}
          </ul>
        </HalfRight>
      </Container>
    </React.Fragment>
  );
}
