import React from "react";
import './search.css';

class Search extends React.Component {
  render() {
    return (
       <div className="ui massive input">
       <input type="text" placeholder="Search..." onChange={this.props.handleClick} />
     </div>
    );
  }
}

export default Search;
