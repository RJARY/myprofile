import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import ProfilePic from "../assets/MishtiProfile.jpg";
export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={ProfilePic} alt="Mishti" style={{ height: "200px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Mishti Samani</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text
              used in laying out print, graphic or web designs. The passage is
              attributed to an unknown typesetter in the 15th century who is
              thought to have scrambled parts of Cicero's De Finibus Bonorum et
              Malorum for use in a type specimen book.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Rajkot, Gujrat,823003</p>
            <h5>Phone</h5>
            <p>(+91) 782-405-4446</p>
            <h5>Email</h5>
            <p>ermishtisamani@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Nirma University"
              schoolDescription="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book."
            />
            <Education
              startYear={2010}
              endYear={2012}
              schoolName="Nirma Engineering College"
              schoolDescription="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Cognizant Technology Solutions Pvt Ltd"
              jobDescription="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book."
            />
            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Rentokil Initials"
              jobDescription="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="BluPrism" progress={100} />
            <Skills skill="Automation Anywhere" progress={30} />
            <Skills skill="Eye Share" progress={70} />
            <Skills skill="Python" progress={60} />
            <Skills skill="MySQL" progress={80} />
            <Skills skill="Java" progress={50} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
