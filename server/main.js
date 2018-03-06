import { Meteor } from 'meteor/meteor';
import { Products  } from '../imports/api/Products'
import { Orders  } from '../imports/api/Orders'

import { URLA } from './methods/sendEmailAdmin'
import { URLC } from './methods/sendEmailClient'




Meteor.startup(() => {
  process.env.MAIL_URL=URLA
  process.env.MAIL_URL=URLC
});


Cloudinary.config({
        cloud_name: 'dygu6sw0x',
        api_key: '722626157138979',
        api_secret: 'HZ5XREhOMfpY2UCtSUPiP-KIJlQ'
})


Accounts.config({
  forbidClientAccountCreation: true
});

