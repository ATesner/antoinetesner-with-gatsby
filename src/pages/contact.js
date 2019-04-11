import React from "react"
import Layout from "../components/layout";

export default () => (
    <Layout>

<form name="contact" method="POST" data-netlify="true">
    <label>Your Name: <input type="text" name="name" required /></label>   
    <label>Your Email: <input type="email" name="email" required /></label>
 
    <label>Message: <textarea name="message" required></textarea></label>
    <button type="submit">Envoyer</button>

</form>
  
    </Layout>
)