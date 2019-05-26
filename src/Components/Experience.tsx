import React from "react";
import arrayToSentence from "array-to-sentence";
import ReactMarkdown from "react-markdown";

import { Container, Full, HalfLeft, HalfRight } from "Components/Reactive";

export default function Experience(props: any) {
  const { audience, data, label } = props;
  console.log(
    data.filter((element: any) => element.finish >= audience.since),
    audience.since
  );
  return (
    <React.Fragment>
      <Container>
        <Full>
          <h2>{label}</h2>
        </Full>
      </Container>
      {data
        .filter((element: any) => element.finish >= audience.since)
        .map((element: any, key: number) => {
          console.log(element);
          return (
            <React.Fragment>
              <Container key={key + Math.random()}>
                <HalfLeft>
                  {formatTime(element.start)} - {formatTime(element.finish)}
                </HalfLeft>
                <HalfRight>
                  <h3>
                    {element.position} <small>- {element.company}</small>
                  </h3>
                </HalfRight>
              </Container>
              <Project project={element} audience={audience} />
              {audience.detailLevel > 0 &&
                element.projects &&
                element.projects
                  .filter((project: any) => project.finish >= audience.since)
                  .map((project: any) => (
                    <Project project={project} audience={audience} />
                  ))}
            </React.Fragment>
          );
        })}
    </React.Fragment>
  );
}

export function Project(props: any) {
  const { project, audience } = props;
  return (
    <React.Fragment>
      <Container>
        <HalfLeft>
          {audience.detailLevel > 1 &&
            project.images &&
            project.images.map((image: string) => {
              return (
                <a href={image}>
                  <img className="thumb" src={image} alt="" />
                </a>
              );
            })}
        </HalfLeft>
        <HalfRight>
          {project.name && project.role && (
            <h4>
              {project.role} on {project.name}
            </h4>
          )}
          {audience.detailLevel > 1 && project.description && (
            <p>
              <ReactMarkdown source={project.description} />
            </p>
          )}
          {audience.detailLevel > 0 && project.achievements && (
            <ul>
              {project.achievements.map((achievement: string) => {
                return <li key={achievement}>{achievement}</li>;
              })}
            </ul>
          )}
          {audience.detailLevel > 0 &&
            audience.technical &&
            project.technology && (
              <p>Technical: {formatTechnology(project.technology)}</p>
            )}
          {audience.detailLevel > 0 && project.soft && (
            <p>Other: {formatTechnology(project.soft)}</p>
          )}
        </HalfRight>
      </Container>
    </React.Fragment>
  );
}

function formatTechnology(list: string[]) {
  list = list.sort();
  return arrayToSentence(list);
}

function formatTime(input: string) {
  if (input.match(/^\d{4}[-]\d{2}$/)) {
    const [year, month] = input.split("-");
    return MONTHS[month] + " " + year;
  } else {
    return input;
  }
}

const MONTHS: { [x: string]: string } = {
  "01": "January",
  "02": "February",
  "03": "March",
  "04": "April",
  "05": "May",
  "06": "June",
  "07": "July",
  "08": "August",
  "09": "Septermber",
  "10": "October",
  "11": "November",
  "12": "December"
};
