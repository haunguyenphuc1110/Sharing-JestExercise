import React from "React";

class Button extends React.Component {
  componentDidMount() {
    this.setState({
      message: "Test Life Cycle Of Component"
    });
  }

  render() {
    return <button onClick={this.props.onClick}>{this.props.text}</button>;
  }
}
export default Button;
