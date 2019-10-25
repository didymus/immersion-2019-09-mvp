import React from 'react';
import axios from 'axios';

import List from './List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    this.getItems = this.getItems.bind(this);
  }
  getItems() {
    console.log('##########');
    return axios.get('/items')
      .then(response => this.setState({ items: response.data}))
  }

  componentDidMount() {
    this.getItems()
      // .then((data) => {
      //   this.setState({
      //     items: data,
      //   });
      // })
      // .catch((err) => {
      //   console.error(err);
      // });
  }

  render() {
    const { items } = this.state;

    return (
      <div>
        <h1>Item List</h1>
        <List items={items} />
        {/* <button onClick={this.getItems}>Click</button> */}
      </div>
    );
  }
}

export default App;
