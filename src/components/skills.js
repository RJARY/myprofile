import React, { Component } from "react";
import { Grid, Cell, ProgressBar } from "react-mdl";

export default class Skills extends React.Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>{this.props.skill}</Cell>
        <Cell col={8}>
          <ProgressBar
            style={{ margin: "auto", width: "75%" }}
            progress={this.props.progress}
          />
        </Cell>
        {/* <Cell col={12}>
          <div style={{ display: "flex" }}>
            {this.props.skill}
            <ProgressBar
              style={{ margin: "auto", width: "75%" }}
              progress={this.props.progress}
            />
          </div>
        </Cell> */}
      </Grid>
    );
  }
}
