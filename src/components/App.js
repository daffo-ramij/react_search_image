import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  ////* use of async and await for Handling request

  onSearchSubmit = async (term) => {
    const res = await unsplash.get('/search/photos', {
      params: { query: term },
    });

    this.setState({ images: res.data.results });
    //console.log(this.setState({ images: res.data.results }));
  };

  //////*   Find data form an API

  // onSearchSubmit(term) {
  //   axios
  //     .get('https://api.unsplash.com/search/photos', {
  //       params: { query: term },
  //       headers: {
  //         Authorization:
  //           'Client-ID CuqTeLUlTNJ8egDJPmnoaD7DrWQ2VhxgJ7QYnwzVIy8',
  //       },
  //     })
  //     .then((res) => {
  //       console.log(res.data.results);
  //     });
  // }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar runMeWhenUserSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
