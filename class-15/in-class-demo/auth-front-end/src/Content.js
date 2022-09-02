import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class Content extends React.Component {

  getBooks = async () => {
    if (this.props.auth0.isAuthenticated) {

      // get a token
      const res = await this.props.auth0.getIdTokenClaims();

      // __raw MUST have a double underscore
      const jwt = res.__raw;
      console.log(jwt);
      // jwt - pronounced JOT


      // from the axios docs
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books',
        headers: {"Authorization": `Bearer ${jwt}`}
      };
      let results = await axios(config);

      // the same as above but the way we are used to writing it
      // let url = `${process.env.REACT_APP_SERVER}/books`;
      // let results = await axios.get(url);
      
      console.log(results.data);

    } else {
      console.log('please log in');
    }
  }

  componentDidMount () {
    this.getBooks();
  }

  render() {
    console.log(this.props.auth0.user);
    return (
      <h1>Content page</h1>
    )
  }
}

export default withAuth0(Content);
