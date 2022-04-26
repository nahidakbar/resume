import React from "react";
import Select from "react-select";
import { Container, Full } from "Components/Reactive";

export function AudiencePicker(props: any) {
  const { audience, onChange } = props;

  return (
    <div className="notForPrint">
      <Container>
        <Full>
          <h2>What do you want to read?</h2>
        </Full>
      </Container>
      <Container>
        <Full>
          <SelectWrapper
            options={technicalOptions}
            value={audience.technical.toString()}
            onChange={(value: any) =>
              onChange({
                technical: (localStorage.resumeTechnical = value) === "true"
              })
            }
          />
        </Full>
        <Full>
          <SelectWrapper
            options={detailLevelOptions}
            value={audience.detailLevel.toString()}
            onChange={(value: any) =>
              onChange({
                detailLevel: localStorage.resumeDetailLevel = parseInt(value)
              })
            }
          />
        </Full>
        <Full>
          <SelectWrapper
            options={sinceOptions}
            value={audience.since}
            onChange={(value: any) =>
              onChange({ since: localStorage.resumeSince = value })
            }
          />
        </Full>
      </Container>
    </div>
  );
}

export enum DetailLevel {
  Summary = 0,
  SomeDetail = 1,
  FullDetail = 2
}

export type Audience = {
  technical: boolean;
  detailLevel: DetailLevel;
  since: string;
};

const year = new Date().getFullYear();

export const defaultAudience: Audience = {
  technical: localStorage.resumeTechnical
    ? localStorage.resumeTechnical === "true"
    : true,
  detailLevel: localStorage.resumeDetailLevel || 0,
  since: localStorage.resumeSince || `${year - 10}`
};

const technicalOptions = [
  { value: "true", label: "I want technical details" },
  { value: "false", label: "Don't show me technical details" }
];

const detailLevelOptions = [
  { value: "0", label: "I want an outline" },
  { value: "1", label: "I want some deatils" },
  { value: "2", label: "I want full details" }
];

const sinceOptions: any[] = [];

sinceOptions.push({
  value: `${year - 1}`,
  label: `I want history of past year (${year})`
});

// sinceOptions.push({
//   value: `${year - 3}`,
//   label: `I want history of past three years (${year - 3}-${year})`
// });

sinceOptions.push({
  value: `${year - 5}`,
  label: `I want history of past five years (${year - 5}-${year})`
});

// sinceOptions.push({
//   value: `${year - 10}`,
//   label: `I want history of past ten years (${year - 10}-${year})`
// });

sinceOptions.push({
  value: `${year - 1000}`,
  label: `I want full history`
});

function SelectWrapper(props: any) {
  const { options, value, onChange } = props;
  return (
    <Select
      options={options}
      defaultValue={options.find((option: any) => option.value === value)}
      styles={{
        option: styles => {
          return {
            ...styles,
            color: "black",
            cursor: "pointer"
          };
        }
      }}
      onChange={(value: any) => onChange(value.value)}
    />
  );
}
