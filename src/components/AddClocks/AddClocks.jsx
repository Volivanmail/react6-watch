import { Component } from "react";
import moment from "moment";
import './AddClocks.css';
import PropTypes from 'prop-types';

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.title,
      time: this.toOffsetDate(this.props.offset),
    };
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.tick(),
      100
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toOffsetDate(offset) {
    const hrs = moment().utc().add(offset,'hours').hours();
    const mins = moment().minutes();
    const secs = moment().seconds();
    return moment().set({ hours: hrs, minutes: mins, seconds: secs }).format('HH:mm:ss');
  }

  tick() {
    this.setState({
      time: this.toOffsetDate(this.props.offset)
    });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { removeTime } = this.props;
    return (
      <div className="App-clock">
        <div className="clock_title">{this.state.name}:</div>
        <div className="clock_time">{this.state.time}</div>
        <button className="clock_remove" type="button" onClick={removeTime}>&times;</button>
      </div>
    );
  }
}

Clock.propTypes = {
  id: PropTypes.any.isRequired,
  title: PropTypes.string,
  offset: PropTypes.any.isRequired,
};