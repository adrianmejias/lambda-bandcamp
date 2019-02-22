const handler = require('./index');

//  Searching for tracks
handler.trackSearch({
	queryStringParameters:{
		// track_name: 'tibetan pop stars',
		per_page: 5
	}
}).then(response => {
    // console.log('trackSearch', response.body);
    JSON.parse(response.body).data.forEach(track => {
    	console.log('track', track);
    })
}).catch(error => {
    console.error('trackSearch', error);
});