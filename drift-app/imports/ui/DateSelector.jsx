var React = require('react');
var DatePicker = require('react-datepicker');
var moment = require('moment');

require('react-datepicker/dist/react-datepicker.css');

class DateSelector extends React.Component {

    constructor(props) {
        super(props);
        state = { startDate: moment() };
        this.handleChange = this.handleChange.bind(this);
    }

  handleChange(date) {
      console.log(date);
      this.setState({startDate: date});
    }

  render() {
    return (
      <DatePicker
        selected={moment()}
        onChange={this.handleChange} />
    );
  }
}

DateSelector.defaultProps = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
};

module.exports = DateSelector;
