import React from "react"
import Layout from "../components/layout";

export default () => (
    <Layout>
        <form name="contact" method="POST" action="/success" data-netlify-recaptcha="true" data-netlify="true">
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