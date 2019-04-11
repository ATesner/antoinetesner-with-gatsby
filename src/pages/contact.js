import React from "react"
import Layout from "../components/layout";

export default () => (
    <Layout>
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  <p>
    <label>Email: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <div data-netlify-recaptcha="true"></div>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </Layout>
)