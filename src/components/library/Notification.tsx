import { Component } from "react";

interface AlertProps {
  title: string;
}

interface AlertState {
  count: number;
}

class Alert extends Component<AlertProps, AlertState> {
  state = {
    count: 10,
  };
  render() {
    return (
      <div>
        {this.props.title} - {this.state.count}
      </div>
    );
  }
}

class Notification extends Component {
  render() {
    return (
      <div>
        Notification <Alert title="Urgente" />
      </div>
    );
  }
}

export default Notification;
