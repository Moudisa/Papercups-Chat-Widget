# Demo

[Papercups-chat-widget-demo.webm](https://github.com/Moudisa/Papercups-Chat-Widget/assets/37015810/22153174-b543-4c3e-8c81-d1bd1dfc146e)

# Usage
For adding the chat widget component into your react app, you need to perform the following steps:
1. Clone the github repository
2. Add the ChatWidgetComponent.js and ChatWidgetComponent.css files from this repository into your own app
3. Add the import statement and the component name in your file from where you want the chat window to render.
   
   `import ChatWidgetComponent from './ChatWidgetComponent';`
   
   `<ChatWidgetComponent/>`
5. You can remove the H1 heading in ChatWidgetComponent.js which is the first tag inside return block to avoid the extra heading.

# Install
Open your terminal and run the following command in order to be able to use the papercups library

    npm install --save @papercups-io/chat-widget

Sign up at https://app.papercups.io/register to get your account token. Your account token is what you'll use to pass in as the `accountId` prop below.
Replace the account token and inbox token in the ChatWidgetComponent.js file inside the div tag called chat-widget-body with your own tokens.

// Pass in your Papercups account token here after signing up

  token: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx',
  
// Specify a Papercups inbox

  inbox: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxx',

# Development
To build the project, run npm start in the root directory. (If you're running it for the first time, you'll have to run npm install first.)

`npm install`

`npm start`

This will start a development server on http://localhost:3000 by default, and open up the example app in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

`npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# Questions?
You can check out the papercups github repository for more information

https://github.com/papercups-io/chat-window
https://github.com/papercups-io/chat-widget
