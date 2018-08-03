import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { logout } from "../../reducers/authReducers";

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showNav: false
    };
    // this.showNav = false;
    console.log('HEADER this', this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.state.showNav && this.navigationRef && !this.navigationRef.contains(event.target)) {
      this.setState({ showNav: false });
    }
  };

  toggleNavbar = () => {
    // this.showNav = !this.showNav;
    setTimeout(() => {
      this.setState({
        showNav: !this.state.showNav
      });
    }, 5);

    // console.warn('toggleNavbar this', this);
    // return this;
  };

  logout = () => {
    this.props.dispatch(logout());
    // this.props.history.push('/login')
  };

  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg bg-rose">
        <div className="container">
          {/*<NavLink to="/" className="navbar-brand">Blog</NavLink>*/}

          {/*<a className="navbar-brand" href="#">Navbar</a>*/}
          <button onClick={this.toggleNavbar} className="navbar-toggler" type="button">
            <i className="mdi mdi-menu"></i>
          </button>

          {/*show-navbar*/}
          <div className={`app-navigation-list collapse navbar-collapse ${this.state.showNav ? 'show-navbar' : ''}`}
               ref={node => { this.navigationRef = node; }}>

            <div className="navigation-links">
              <div className="close-navbar" title="close" onClick={this.toggleNavbar}>
                <i className="mdi mdi-window-close"></i>
              </div>
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <NavLink exact={true} activeClassName="active" to="/" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink exact={true} activeClassName="active" to="/protected" className="nav-link">Link</NavLink>
                  {/*<a className="nav-link">Link</a>*/}
                </li>
              </ul>
            </div>

            <div className="settings-buttons">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" onClick={this.logout}>Logout <i className="mdi mdi-logout"></i></a>
                </li>
              </ul>
            </div>

          </div>


          {/*<ul className="navbar-nav">*/}
          {/*<li className="nav-item active"><Link to="/protected">Protected Page</Link></li>*/}
          {/*<li className="nav-item"><Link to="/login">Login</Link></li>*/}
          {/*</ul>*/}
        </div>


      </nav>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token
});

export default connect(mapStateToProps)(Header);
