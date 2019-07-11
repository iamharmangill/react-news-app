import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";

class Search extends React.Component {
  render() {
    return (
      <Box m={3}>
        <div>
          <Box align="center" p={{ md: 3 }} >
            <h1>React News App</h1>
            <div>
              <form onSubmit={this.props.submitSearch} noValidate>
                <div>
                  <Input
                    placeholder="Enter your search.."
                    label="Search"
                    onChange={this.props.changeQuery}
                    margin="dense"
                    type="search"
                  />
                  <Button variant="contained" color="primary" type="submit">
                    Search
                  </Button>
                </div>
              </form>
            </div>
          </Box>

          <AppBar fullWidth={true} position="static" color="primary">
            <Tabs
              centered
              value={this.props.activeTab}
              onChange={this.props.changeTab}
              indicatorColor="primary"
            >
              <Tab value="ca" label="Canada">
                {" "}
                Canada{" "}
              </Tab>
              <Tab value="in" label="India">
                {" "}
                India{" "}
              </Tab>
              <Tab value="searchResults" label="Search Results">
                {" "}
                Search{" "}
              </Tab>
              <Tab value="us" label="USA">
                {" "}
                USA{" "}
              </Tab>
              <Tab value="br" label="Brazil">
                {" "}
                Brazil{" "}
              </Tab>
            </Tabs>
          </AppBar>
        </div>
      </Box>
    );
  }
}

export default Search;
