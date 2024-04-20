# Webpack-App
Deployed: [Webpack-App](https://rocky-dawn-12372-78ace6687a74.herokuapp.com/)
Repo: [GitHub Repo](https://github.com/AliahG97/webpack-app)

## Description
Webpack-App - also known as JATE is a Progressive Web Applications (PWAs) designed to improve web apps providing an "app-like experience" by implementing HTTPS, a web app manifest, and service workers which allows the app to function even if the user is offline.To  achieve this, the webpack.config.js file by is set up with plugins that help with service worker and manifest files, as well as including CSS and babel loaders. The src-sw.js file has been set up to store data from the app on the device, so it can still work even when there's no internet. By configuring the database, this ensures tha the app can handle the data effeciently. Lastly, users can install the app on their devices for offline. Now users can take notes anytime and acceess them again later with ease.

## Table of Contents
- [Installation](#installation)
- [Screenshot](#screenshot)
- [Usage](#usage)
- [Contribution](#contribution)
- [Credits](#credits)
- [License](#license)
- [Testing](#testing)

## Installation
To run the project locally, follow these steps:
1. Clone the repository to your local machine using `git clone https://github.com/AliahG97/weback-app.git`.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Update scripts in `package.json`.
5. enter in terminal: `npm run build`
5. Start the application with `npm start:dev`.

## Screenshot
![Webpack-App Screenshot video](../webpack-app/Assets/images/webapp-screenshot.gif)



## Usage
 Access the deployed site and type in a text! Click the install button to download the app and use it offline. If the page is closed or refreshed, when the user reopens it, the same text will still be there.


## Contribution
- Add the ability for other users to add texts to the same note.

## Credits
Aliah Guerra ([GitHub](https://github.com/AliahG97))

## License
This project is licensed under the MIT License.

## Testing
To test the project, follow these steps:
1. Navigate to the project file.
2. Run `npm install`.
3. Run `npm run build`.
4. Run `npm start:dev`.
