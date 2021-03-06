import React, { Component } from "react";
import "./Parameters.css";

class Parameters extends Component {
  render() {
    return (
      <div id="parameters">
        <h2>Web app parameters</h2>
        <form>
          <label>
            Website URL (omit 'http://www.' - eg. jetblackespresso.com.au)
            <input
              className="thing"
              name="url"
              value={this.props.url}
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            API key
            (enter your URL above, and
            {" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={`https://www.${this.props.url.length === 0 ? "yoursite.com" : this.props.url}/_cpanel/setup_wizard?id=api`}
            >
              {" "}click to visit Neto dashboard
            </a>
            ):
            <input
              name="api"
              value={this.props.api}
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            Update value (the header in your CSV which contains the new stock values):
            <input
              name="string"
              value={this.props.string}
              onChange={this.props.handleInputChange}
            />
          </label>
          <label>
            Default update method after pressing reset button:
            <select
              defaultValue="increment"
              name="method"
              onChange={this.props.handleInputChange}
            >
              <option value="increment">Increment</option>
              <option value="decrement">Decrement</option>
              <option value="set">Set</option>
            </select>
          </label>
        </form>
      </div>
    );
  }
}

export default Parameters;
