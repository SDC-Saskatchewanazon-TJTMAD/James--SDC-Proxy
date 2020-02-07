import React from "react";
import { Grid, Cell } from "styled-css-grid";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid
        columns={"minmax(300px, 1fr) minmax(194px, 350px) 194px"}
        rows={"108px minmax(537px, 1fr)"}
        justifyContent="space-around"
        areas={[
          "matt-comp matt-comp matt-comp",
          "tay-comp roy-comp travis-comp",
          "david-comp david-comp david-comp",
          "mark-comp mark-comp mark-comp"
        ]}
      >
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="matt-comp"
        >
          <div id="app"></div>
        </Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="tay-comp"
        >
          <div id="tay-prodimage"></div>
        </Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="roy-comp"
        >
          <div id="productDescription"></div>
        </Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="travis-comp"
        ></Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="david-comp"
        >
          <div id="reviews"></div>
        </Cell>
        <Cell
          middle
          style={{ display: "flex", verticalAlign: "middle" }}
          area="mark-comp"
        >
          <div id="carousel"></div>
        </Cell>
      </Grid>
    );
  }
}
