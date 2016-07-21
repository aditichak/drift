import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';


class Dropdown extends React.Component {
      constructor() {
        super();
      }

      onChange(input, resolve) {
        console.log(input);
        resolve = function() {
          console.log("in resolve");
        };
      }

      /*onSearch(input) {
        if (!input) return;
        console.info(`Searching "${input}"`);
      }*/

      render() {
        return (
          <div class="dropdown">
            <select>
              <option selected>Where Should We Go?</option>
              <option>Paris</option>
              <option>Shanghai</option>
              <option>Vancouver</option>
            </select>
          </div>
          );
      }
}

module.exports = Dropdown;

/*
Search.propTypes = {
  cities: PropTypes.array.isRequired,
};

export default createContainer(() => {
  return {
    cities: Cities.find({}).fetch(),
  };
}, App); */
