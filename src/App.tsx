import React from "react";

import BasicData from "Data/basic";
import SummaryData from "Data/summary";
import EducationData from "Data/education";
import ExperienceData from "Data/experience";
import VolunteerData from "Data/volunteer";

import Header from "Components/Header";
import Summary from "Components/Summary";
import Education from "Components/Education";
import Experience from "Components/Experience";

import Footer from "Components/Footer";
import { Audience, defaultAudience, AudiencePicker } from "Components/Audience";
import Contact from "Components/Contact";

export default class App extends React.Component<Audience, any> {
  state = defaultAudience;

  render() {
    const updateState = (update: any) =>
      this.setState((state: any) => Object.assign({}, state, update));
    return (
      <div>
        <Header title={BasicData.name + " - Résumé"} />
        <AudiencePicker audience={this.state} onChange={updateState} />
        <Contact />
        <Summary data={SummaryData} audience={this.state} />
        <Education data={EducationData} audience={this.state} />
        <Experience
          label="Experience"
          data={ExperienceData}
          audience={this.state}
        />
        <Experience
          label="Volunteer Experience &amp; Hobby Projects"
          data={VolunteerData}
          audience={this.state}
        />
        <Footer />
      </div>
    );
  }
}
