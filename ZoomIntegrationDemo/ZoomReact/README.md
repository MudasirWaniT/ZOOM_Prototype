# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Zoom Integration


To run application , You have to run Visual Studio Code first because we are using JWT Token keys in our APIs on temporary basis. That keys can be expired after a certain period of time so you have to generate those keys from the given link.

Step - 1 : #API Changes : 

Controller Name : CreateController 

***** Add Your Keys ****
[Line No - 23]
string tokenString = "Your_Toek_Key_Here";
string emailId = "Your_EmailId_Here";
string apiSecretKey = "Your_JWT_SecretKey_Here";
string apiKey = "Your_JWT_APIKey_Here";

We have many carts from JWT Cart you can generate those keys and paste it on Create Controller from line 23 to 26.

We are also using Zoom SDK key and SDK Secret in our React Components Meeting and Join Meeting. That is also on temporary basis and can be expired . So you can generate those keys from the same link from SDK cart. 

Forllow the bellow link : 
https://marketplace.zoom.us/develop/create

Step - 2 : Required React Key's:

***** To start Meeting as a host ***
Page - 1 : Meeting.js 
    [Line No - 15]
    const _sdkKey = "Your_SDK_Key_Here";
    const _sdkSecret = "Your_SDK_Secret_Key_Here";
    const _redirectUrl = "https://localhost:3000/meeting";
    const _username = "Your_Name_Here";
    const _userEmail = "Your_Emailid_Here";

      ***** To Join Meeting as a client ***
 Page - 2 : JoinMeeting.js 
    [Line No - 14]
    const _sdkKey = "Your_SDK_Key_Here";
    const _sdkSecret = "Your_SDK_Secret_Key_Here";
    const _redirectUrl = "https://localhost:3000/meeting";
    const _username = "Your_Name_Here";
    const _userEmail = "Your_Emailid_Here";




