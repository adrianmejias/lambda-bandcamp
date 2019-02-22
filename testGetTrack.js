const handler = require('./index');

// Streaming a track
handler.getTrack({}).then(response => {
    console.log('getTrack', response);
}).catch(error => {
    console.error('getTrack', error);
});