# React photo gallery application
# Jonathan Rene
# 8/7/22

# Summary
This project demonstrates using demonstrates building an SPA with React. It allows users
to search photos on Flickr. A user can either click on the provided buttons to perform a search or type in a search in the search box. 

# How to use
The user must have an API key from Flickr. The API key must be stored as a string property within a JS object. This object must then be stored within a file called "config.js". The user needs to create the file. It needs to be created within the "src" folder/directory. Within the file, the user needs to create a jS object that is exported by default. The object needs to be named "apiInfo". The string property of the JS object called "apiInfo" needs to called "key". Its value will then be the user's Flickr API key. The file should like the following:

const apiInfo = {
    key: "API_KEY",
};

export default apiInfo;

To repeat, this file needs to be named "config.js" and must be located within the directory named "src".



In order to use this application, a user must have Node and NPM installed. They must open the application on any command line tool and run "npm install" and then run "npm start".

# What to know
This application uses the most current version of React and React Router. All application components are implemented using function components

