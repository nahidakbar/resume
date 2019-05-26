import React from "react";

import ReactMarkdown from "react-markdown";

import { Container, HalfLeft, HalfRight } from "Components/Reactive";

export default function Contact(props: any) {
  let contact: any = {};
  try {
    contact = JSON.parse(localStorage.resumeContact);
  } catch (e) {}
  const keys = Object.keys(contact).sort();

  return (
    <React.Fragment>
      {keys.length > 0 && (
        <Container>
          <HalfLeft />
          <HalfRight>
            {keys.map(key => {
              return (
                <div>
                  {key}:{" "}
                  <ReactMarkdown
                    source={contact[key]}
                    renderers={{ paragraph: "span" }}
                  />
                </div>
              );
            })}
          </HalfRight>
        </Container>
      )}
    </React.Fragment>
  );
}
