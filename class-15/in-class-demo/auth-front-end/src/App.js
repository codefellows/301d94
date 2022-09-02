import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Content from './Content';
import './App.css';

class App extends React.Component {

    render() {
      return (
        <>
          <h1>new</h1>
          {this.props.auth0.isAuthenticated
            ? <LogoutButton/>
            : <LoginButton/>
          }
          {this.props.auth0.isAuthenticated
            ? <Content/>
            : <h2>Please log in</h2>
          }
        </>
      )
    }
}

// useAuth0 — is for functional components
// withAuth0 — is for class components
export default withAuth0(App);
