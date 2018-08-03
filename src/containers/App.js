import React, { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from './Header';
import Home from "./Home";
import Login from "./Login";
// import SignUp from "./SignUp";

// const Public = () => <h3>Public</h3>;
const Protected = () => <h3>Protected</h3>;

class App extends Component {
  constructor(props) {
    super(props);

    console.log('this', this)
  }

  authGuard = (component) => {
    // console.log('isAuthenticated', this.props);

    if (this.props.token) {
      return component
    }
    return <Redirect to="/login" />
  };

  hideAuth = (component) => {
    if (!this.props.token) {
      return component
    }
    return <Redirect to="/home" />
  };

  render() {
    return (
      <BrowserRouter>

        <div className="app-layout">
          {!!this.props.token && <Header/>}

          <main className="container">
            <Switch>
              <Route path="/" exact component={ Home }/>
              <Route path="/protected" exact render={() => this.authGuard(<Protected />)}/>
              <Route path="/login" render={() => this.hideAuth(<Login />)}/>
              <Redirect from="*" to="/" />
            </Switch>
          </main>
          <footer className="footer">
            footer
          </footer>

        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  error: state.auth.error
});

export default connect(mapStateToProps)(App);

// import React from 'react';
// import { Route, Switch } from 'react-router-dom';
// import { ConnectedRouter } from 'react-router-redux';
// import '../styles/App.scss';
//
// import Main from './Main';
// // import Dashboard from './Dashboard';
// import Login from './Login';
//
// const App = props => {
//   const { history } = props;
//
//   return (
//     <ConnectedRouter history={history}>
//       <Switch>
//         <Route path="/login" component={Login} />
//         <Route path="/" component={Main} />
//       </Switch>
//     </ConnectedRouter>
//   );
// };
//
// export default App;
