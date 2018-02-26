
import { Meteor } from 'meteor/meteor';
//import Meteor library
import React from 'react';
import { render } from 'react-dom';
//import the render function from react-dom
import { BrowserRouter } from 'react-router-dom';

import App from '../imports/App.js';

//import the React component that we haven't created yet! ...oops


Meteor.startup(() => {
  render(<BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('app'));
});


$.cloudinary.config({
        cloud_name:"dygu6sw0x"
})
