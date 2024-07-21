import React from "react";

import { Container, Full, HalfLeft, HalfRight } from "Components/Reactive";

export default function Education(props: any) {
  const { audience, data } = props;
  return (
    <React.Fragment>
      <Container>
        <Full>
          <h2>Education</h2>
        </Full>
      </Container>
      {data
        // .filter((element: any) => element.finish >= audience.since)
        .map((element: any, key: number) => {
          return (
            <Container key={key}>
              <HalfLeft>
                {element.start} - {element.finish}
              </HalfLeft>
              <HalfRight>
                <h3>
                  {element.course} <small>- {element.institution}</small>
                </h3>
                {audience.detailLevel > 1 && <p>{element.description}</p>}
                {audience.detailLevel > 1 && element.thesis && (
                  <p>{element.thesis}</p>
                )}
                {audience.detailLevel > 0 && <p>Major: {element.major}</p>}
              </HalfRight>
            </Container>
          );
        })}
    </React.Fragment>
  );
}
