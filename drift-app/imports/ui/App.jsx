import React, { Component } from 'react';

import Task from './Task.jsx';
import DateSelector from './DateSelector.jsx';

// App component - represents the whole app
export default class App extends Component {
  getTasks() {
    return [
      { _id: 1, text: 'Paris' },
      { _id: 2, text: 'Barcelona' },
      { _id: 3, text: 'Shangai' },
    ];
  }

  renderTasks() {
    return this.getTasks().map((task) => (
      <Task key={task._id} task={task} />
    ));
  }

  renderDate() {
    return <DateSelector></DateSelector>;
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Drift</h1>
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
        {this.renderDate()}
      </div>
    );
  }
}
