////////////////////////////////////////////////////////////////////////////////
// get-data.js /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// getAccessToken //////////////////////////////////////////////////////////////
// Returns an access token from petfinder.com.
async function getAccessToken() {
  const gotAccessToken = await fetch("https://api.petfinder.com/v2/oauth2/token", {
    body: `grant_type=client_credentials&client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  })
  .catch(() => {
    console.log(
      `Failed [gotAccessToken] request to petfinder.com.
      Do you have the [REACT_APP_CLIENT_ID] and [REACT_APP_CLIENT_SECRET]?
      Check .env file and add them if they're missing.`
    );
  })
  // Convert response to JSON,
  .then((fetchedResponse) => {
    return fetchedResponse.json();
  })
  // Extract & return [access_token] from response.
  .then((jsonifiedResponse) => {
    return jsonifiedResponse.access_token;
  })
  .catch(() => {
    console.log("Cannot retrieve [gotAccessToken] from petfinder.com.");
  })
  return gotAccessToken;
}

// getGPData ///////////////////////////////////////////////////////////////////
// Returns an individual guinea pig's data,
// given a valid petfinder.com [accessToken] and [gpId].
async function getGPData(accessToken, gpId) {
  const gotGpData = await fetch(`https://api.petfinder.com/v2/animals/${gpId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  .catch(() => {
    console.log(
      `Failed [gotGpData] request to petfinder.com.
      Do you have a valid [accessToken]?
      Do you have a valid [gpId]?`
    )
  })
  // Convert response to JSON and return,
  .then((fetchedResponse) => {
    return fetchedResponse.json();
  })
  return gotGpData;
}

// getGPListData ///////////////////////////////////////////////////////////////
// Returns list of guinea pigs,
// given a petfinder.com [accessToken] and the [zip] to search.
const getGPListData = async (accessToken, zip) => {
  const gotGPListData = fetch(`https://api.petfinder.com/v2/animals/?type=small-furry&location=${zip}&sort=distance`, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
  .catch(() => {
    console.log("Cannot fetch [gotGPData].");
  })
  // Convert response to JSON,
  .then((fetchedResponse) => {
    return fetchedResponse.json();
  })
  // Extract & return [animals] array from response.
  .then((jsonifiedResponse) => {
    return jsonifiedResponse.animals;
  })
  return gotGPListData;
}

export { getAccessToken, getGPData, getGPListData };