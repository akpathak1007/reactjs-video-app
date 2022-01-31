import React from "react";

// TODO: CONTROLLED SEARCHBAR
class SearchBar extends React.Component {
  state = { input: "" };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onChange(this.state.input);
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };
  render() {
    return (
      <div className="my-3">
        <form onSubmit={this.onFormSubmit} action="">
          <label htmlFor="video" className="form-label">
            Search Video
          </label>
          <div className="input-group">
            <input
              onChange={this.onInputChange}
              value={this.state.input}
              type="text"
              id="video"
              className="form-control"
              placeholder="Search here..."
            />
            <button className="btn btn-outline-primary">
              <i className="bi bi-search"></i>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default SearchBar;
