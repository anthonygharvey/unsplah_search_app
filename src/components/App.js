import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { images: [] };
  onSearchSubmit = async searchTerm => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: searchTerm },
      headers: {
        Authorization:
          "Client-ID 47ff7b8c5ff4476e2afeaa166884a8e649e47ed830cab9b25a4e74abc741d8a8"
      }
    });
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar submit={this.onSearchSubmit} />
        <p>Found {this.state.images.length} images</p>
      </div>
    );
  }
}

export default App;
