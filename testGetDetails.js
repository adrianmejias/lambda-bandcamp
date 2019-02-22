const handler = require('./index');

// Getting track details
handler.getDetails({}).then(response => {
    console.log('getDetails', response);
}).catch(error => {
    console.error('getDetails', error);
});