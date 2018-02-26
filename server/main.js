import { Meteor } from 'meteor/meteor';
import { Products  } from '../imports/api/Products'

Meteor.startup(() => {
  // code to run on server at startup
});


Cloudinary.config({
        cloud_name: 'dygu6sw0x',
        api_key: '722626157138979',
        api_secret: 'HZ5XREhOMfpY2UCtSUPiP-KIJlQ'
})