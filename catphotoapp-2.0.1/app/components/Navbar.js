import React from 'react';
import {render} from 'react-dom';

class Navbar extends React.Component {
  render(){
      return(
      <nav>
        <div className="nav-wrapper blue darken-2">
          <a href="#" onClick={this.props.clearSearch} className="brand-logo">&nbsp;&nbsp;&nbsp;CatPhotoApp</a>
          <a href="#" data-activates="mobile" className="button-collapse"><i className="fa fa-bars"></i></a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a className="modal-trigger" href="#addCatModal">Add Cat Photo</a></li>
          </ul>
          <ul className="side-nav" id="mobile">

            <li><a className="modal-trigger" href="#addCatModal">Add Cat Photo</a></li>
          </ul>
        </div>
      </nav>


    );
  }
}
export default Navbar;
