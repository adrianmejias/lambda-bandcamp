const bandcamp = require('node-bandcamp');
const responder = require('./responder');

// Searching for tracks
exports.trackSearch = async (event, context, callback) => {
    let trackName = 'tibetan pop stars';
    let perPage = 30;
    if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
        if (event.queryStringParameters.track_name !== undefined && event.queryStringParameters.track_name !== null && event.queryStringParameters.track_name !== '') {
            trackName = event.queryStringParameters.track_name;
        }
        if (event.queryStringParameters.per_page !== undefined && event.queryStringParameters.per_page !== null && event.queryStringParameters.per_page !== '') {
            perPage = parseInt(event.queryStringParameters.per_page);
            if (perPage <= 0) {
                perPage = 1;
            } else if (perPage > 100) {
                perPage = 100;
            }
        }
    }
    const response = await bandcamp.trackSearch(trackName, perPage).then(results => {
        return {
            data: results,
            total: results.length
        };
    }).catch(error => {
        return {
            error: error
        };
    });
    if (response.error) {
        // callback(null, responder.internalServerError(response.error));
        return responder.internalServerError(response.error);
    }
    // callback(null, responder.success(response));
    return responder.success(response);
};

// Streaming a track
exports.getTrack = async (event, context, callback) => {
    let trackUrl = 'https://hopalong.bandcamp.com/track/tibetan-pop-stars';
    if (event.queryStringParameters) {
        if (event.queryStringParameters) {
            if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
                if (event.queryStringParameters.track_url !== undefined && event.queryStringParameters.track_url !== null && event.queryStringParameters.track_url !== '') {
                    trackUrl = event.queryStringParameters.track_url;
                }
            }
        }
    }
    const response = await bandcamp.getTrack(trackUrl).then(function(stream) {
        return {
            data: stream
        };
    }).catch(error => {
        return {
            error: error
        };
    });
    if (response.error) {
        // callback(null, responder.internalServerError(response.error));
        return responder.internalServerError(response.error);
    }
    // callback(null, responder.success(response));
    return responder.success(response);
};

// Getting track details
exports.getDetails = async (event, context, callback) => {
    let trackUrl = 'https://hopalong.bandcamp.com/track/tibetan-pop-stars';
    if (event.queryStringParameters) {
        if (event.queryStringParameters !== null && event.queryStringParameters !== undefined) {
            if (event.queryStringParameters.track_url !== undefined && event.queryStringParameters.track_url !== null && event.queryStringParameters.track_url !== '') {
                trackUrl = event.queryStringParameters.track_url;
            }
        }
    }
    const response = await bandcamp.getDetails(trackUrl).then(function(result) {
        return {
            data: result,
        };
    }).catch(error => {
        return {
            error: error
        };
    });
    if (response.error) {
        // callback(null, responder.internalServerError(response.error));
        return responder.internalServerError(response.error);
    }
    // callback(null, responder.success(response));
    return responder.success(response);
};