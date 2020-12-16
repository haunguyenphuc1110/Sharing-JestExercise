import React from "react";

import getJSON from "./GetJSON";

const withData = url => FetchingComponent =>
  class extends React.Component {
    constructor(props) {
      super(props);

      this.state = { data: [] };
    }

    componentDidMount() {
      const endpoint = typeof url === "function" ? url(this.props) : url;

      getJSON(endpoint).then(data => this.setState({ data }));
    }

    render() {
      return <FetchingComponent {...this.props} {...this.state} />;
    }
  };

export default withData;
