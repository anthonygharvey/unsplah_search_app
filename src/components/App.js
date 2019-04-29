import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  onSearchSubmit = searchTerm => {
    console.log(`Logged from App: ${searchTerm}`);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar submit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
