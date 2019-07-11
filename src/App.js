import "./App.css";
import axios from "axios";
import Main from "./components/Main.js";
import React, { Component } from "react";
import Search from "./components/SearchBar.js";

const apiKey = "your-api-key-here";

class App extends Component {
  state = {
    activeTab: "searchResults"
  };

  changeTab = async (event, newTab) => {
    await this.setState({
      activeTab: newTab,
      articles: []
    });
    await this.getNews();
  };

  getNews = async () => {
    const url = this.getUrl();
    if (this.state.activeTab === "searchResults" && !this.state.query) {
      this.setState({
        articles: []
      });
      return;
    }

    const articles = this.state.articles || [];

    await axios
      .get(url)
      .then(res => {
        this.setState({ articles: [...articles, ...res.data.articles] });
      })
      .catch(error => {
        console.log(error);
      });
  };

  getUrl = () => {
    if (this.state.activeTab === "searchResults") {
      return `https://newsapi.org/v2/everything?q=${
        this.state.query
      }&sortBy=publishedAt&pageSize=3&page=1&apiKey=${apiKey}`;
    } else {
      return `https://newsapi.org/v2/top-headlines?country=${
        this.state.activeTab
      }&sortBy=publishedAt&pageSize=3&page=1&apiKey=${apiKey}`;
    }
  };

  changeQuery = event => {
    this.setState({
      query: event.target.value
    });
  };

  submitSearch = async event => {
    if (event) {
      event.preventDefault();
    }
    await this.setState({
      activeTab: "searchResults",
      articles: []
    });
    await this.getNews();
  };

  render() {
    return (
      <div className="app">
        <Search
          activeTab={this.state.activeTab}
          changeTab={this.changeTab}
          submitSearch={this.submitSearch}
          changeQuery={this.changeQuery}
        />
        <div>
          <Main
            activeTab={this.state.activeTab}
            articles={this.state.articles}
          />
          <h3>Source: NEWSAPI.ORG</h3>
        </div>
        
      </div>
      
    );
  }
}

export default App;
