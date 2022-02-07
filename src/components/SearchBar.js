import React from 'react';

class SearchBar extends React.Component {
  ////////*  Controled Component

  state = { t: '' };

  OnInputClick() {
    console.log('Input is Clicked');
  }
  ////////* this keyword related problem Solve
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.runMeWhenUserSubmit(this.state.t);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>
              <h1>Search Image</h1>
            </label>
            <input
              type="text"
              placeholder="Find Your Image"
              value={this.state.t}
              onChange={(e) => this.setState({ t: e.target.value })}
              onClick={this.OnInputClick}
            />
          </div>
        </form>
      </div>
    );
  }
  ////////*  Uncontroled Component

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // OnInputClick() {
  //   console.log('Input is Clicked');
  // }

  // render() {
  //   return (
  //     <div className="ui segment">
  //       <form className="ui form">
  //         <div className="field">
  //           <label>
  //             <h1>Search Image</h1>
  //           </label>
  //           <inputn
  //             type="text"
  //             placeholder="Find Your Car"
  //             onChange={this.onInputChange}
  //             onClick={this.OnInputClick}
  //           />
  //         </div>
  //       </form>
  //     </div>
  //   );

  //////// * Alternative Event Handler

  // render() {
  //   return (
  //     <div className="ui segment">
  //       <form className="ui form">
  //         <div className="field">
  //           <label>
  //             <h1>Search Image</h1>
  //           </label>
  //           <input type="text" onChange={(e) => console.log(e.target.value)} />
  //         </div>
  //       </form>
  //     </div>
  //   );
  // }
}

export default SearchBar;
