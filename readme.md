# LeoILab Assessment

## Instructions

### Install required dependencies
(You need to have installed NodeJS)
#### Install Expo and project dependencies
```bash
npm install -g expo-cli
npm install
```
### Run the app
```bash
npm start
```
This will open the WebBrowser and shows a QR code to scan with the Expo App
that you can find [here](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=es)
(The PC and the cellphone must be in the same network)

## How to use it
When the app starts it asks you for email and password (it can be any valid mail and any password, it was just to try jwt)
Then you'll be redirected to the main page where you can find an input text and a search button.
You have to write a valid github username and tap search; and the app will looks for it on github's API and shows it.

## Tests
This project uses jest for unit testing (now is only cheking if the UserInfo component can be created)
You only need to run:
```bash
npm test
``` 

### About the project
For this project I used ReactNative with Axios for fetching JSON data from the API.
Jests for Unit Testing, and React-Navigation for routing.
Always leting apart the logic and the calls to the API from the components and relying in custom services and helpers.

