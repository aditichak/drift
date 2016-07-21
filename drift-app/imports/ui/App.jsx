import React, { Component } from 'react';

import Task from './Task.jsx';
import DateSelector from './DateSelector.jsx';
import SearchBar from './SearchBar.jsx';

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

  renderSearchBar() {
    return (
      <div>
        <span>
            <SearchBar></SearchBar>
        </span>
      </div>
    );
  }

  renderDate() {
    return (
        <div>
          <span>
        <DateSelector></DateSelector>
            </span>
          <span>
            <DateSelector></DateSelector>
          </span>
          </div>
  );
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Drift</h1>
        </header>

        <ul>
          {this.renderSearchBar()}
        </ul>
        {this.renderDate()}
      </div>
    );
  }
}
