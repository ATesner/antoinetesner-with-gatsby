import React, { Component } from "react"
import Layout from "../components/layout";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Contact extends Component {

  constructor() {
    super();

    this.state = {
      multiline: ''
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  render () {
    return (
      <Layout>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />  
          <p>
          <TextField
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="filled"
            required
          />
          </p>
          <p>
            <TextField
              label="Message"
              multiline
              rows="4"
              margin="normal"
              variant="filled"
              name="message"
              required
            />
          </p>
          <p>
          <Button variant="contained" color="primary" type="submit">
            Send
          </Button>
          </p>
        </form>
      </Layout>
    )
  }
}

export default Contact;