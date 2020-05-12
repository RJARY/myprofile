import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";
export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };
  }
  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project #1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://tse2.mm.bing.net/th?id=OIP.z85NeOSrdSs7KQwak-6IkQHaDZ&pid=Api&P=0&w=372&h=171) center / cover",
              }}
            >
              BluePrism Project #1
            </CardTitle>
            <CardText>
              Blue Prism is the trading name of the Blue Prism Group, a UK
              multinational software corporation that pioneered and makes
              enterprise robotic process automation (RPA) software that provides
              a digital workforce designed to automate complex, end-to-end
              operational activities.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project #2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://tse2.mm.bing.net/th?id=OIP.z85NeOSrdSs7KQwak-6IkQHaDZ&pid=Api&P=0&w=372&h=171) center / cover",
              }}
            >
              BluePrism Project #2
            </CardTitle>
            <CardText>
              Blue Prism is the trading name of the Blue Prism Group, a UK
              multinational software corporation that pioneered and makes
              enterprise robotic process automation (RPA) software that provides
              a digital workforce designed to automate complex, end-to-end
              operational activities.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project #3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "black",
                height: "176px",
                background:
                  "url(https://tse2.mm.bing.net/th?id=OIP.z85NeOSrdSs7KQwak-6IkQHaDZ&pid=Api&P=0&w=372&h=171) center / cover",
              }}
            >
              BluePrism Project #3
            </CardTitle>
            <CardText>
              Blue Prism is the trading name of the Blue Prism Group, a UK
              multinational software corporation that pioneered and makes
              enterprise robotic process automation (RPA) software that provides
              a digital workforce designed to automate complex, end-to-end
              operational activities.
            </CardText>
            <CardActions border>
              <Button colored>Github</Button>
              <Button colored>CodePen</Button>
              <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Automation Anywhere</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is Eye Share</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is Python</h1>
        </div>
      );
    } else if (this.state.activeTab === 4) {
      return (
        <div>
          <h1>This is MySQL</h1>
        </div>
      );
    } else if (this.state.activeTab === 5) {
      return (
        <div>
          <h1>This is Java</h1>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>BluePrism</Tab>
          <Tab>Automation Anywhere</Tab>
          <Tab>Eye Share</Tab>
          <Tab>Python</Tab>
          <Tab>MySQL</Tab>
          <Tab>Java </Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
