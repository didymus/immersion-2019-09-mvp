import React from 'react';
import axios from 'axios';

import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vulns: [],
    };
    this.getVulns = this.getVulns.bind(this);
  }

  componentDidMount() {
    this.getVulns()
      .then((data) => {
        this.setState({
          vulns: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  getVulns() {
    return axios.get('/vulns')
      .then(response => response.data);
  }

  render() {
    const { vulns } = this.state;

    return (
      <div>
        <h1>Vuln List</h1>
        <List vulns={vulns} />
      </div>
    );
  }
}

export default App;
