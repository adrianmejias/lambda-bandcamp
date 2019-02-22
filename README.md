# (unofficial) Bandcamp API for AWS Lambda

## Installation
* `npm install`
* compress files into zip
* create a function in AWS Lambda
* upload to AWS Lambda
* setup AWS API Gateway

## Searching for tracks
Specific tracks can be searched for using the trackSearch method. This function takes the following parameters:

This api endpoint takes the following parameters:
* query (str): The search query for which you want results.
* limit (defaults to 30): The maximum number of results you want returned. Defaults to 30.

Example: `https://*.execute-api.*.amazonaws.com/default/trackSearch?track_name=tibetan pop stars&per_page=5`

JSON Response:
```json
{
    "data": [{
        "title": "title",
        "album": "album name",
        "artist": "artist name",
        "image": "URL to track artwork",
        "url": "URL to be passed to getTrack method"
    }, ...],
    total: 1
}
```

## Streaming a track (not tested)
A specific track can be streamed using the getTrack endpoint. This function takes just one parameter, the Bandcamp URL string retrieved using the previously discussed trackSearch method.

This api endpoint takes the following parameters:
* track_url (url): Bandcamp URL string for the track.

Example: `https://*.execute-api.*.amazonaws.com/default/getTrack?track_url=https://hopalong.bandcamp.com/track/tibetan-pop-stars`

JSON Response:
```json
{
    "data": {
        ...
    }
}
```

## Getting track details
The details for a specific track (title, duration, etc.) can be retrieved using the getDetails method. This function takes the Bandcamp URL string for the track as a parameter, and returns a JSON response.

This api endpoint takes the following parameters:
* track_url (url): Bandcamp URL string for the track.

Example: `https://*.execute-api.*.amazonaws.com/default/getDetails?track_url=https://hopalong.bandcamp.com/track/tibetan-pop-stars`

JSON Response:
```json
{
    "data": {
        "title": "title",
        "album": "album name",
        "artist": "artist name",
        "image": "URL to track artwork",
        "url": "URL to be passed to getTrack method"
    }
}
```