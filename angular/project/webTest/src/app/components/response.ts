export interface IResponse{
    // const options = {method: 'GET', headers: {Accept: 'application/json'}};

// fetch('https://api.fastforex.io/convert', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));
"from": "";
"to": "";
"amount": number;
"value": number;
"last_update": "";
"last_update_timestamp": ""
}