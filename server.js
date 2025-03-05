// Boilerplate Code for HTTP Status Code API
const express = require('express');
const app = express();

/*
Task:
You need to create an API that helps users understand different HTTP status codes and their meanings.

Requirements:
1. Create a GET endpoint at "/status-info".
2. The endpoint should accept a "code" as a query parameter (e.g., /status-info?code=200).
3. Based on the status code provided, the API should respond with:
   a. The status code.
   b. A description of the status code.

Example Responses:
- For 200 (OK):
  Request: /status-info?code=200
  Response:
  {
    "status": 200,
    "message": "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."
  }

- For 404 (Not Found):
  Request: /status-info?code=404
  Response:
  {
    "status": 404,
    "message": "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource."
  }

- For 500 (Internal Server Error):
  Request: /status-info?code=500
  Response:
  {
    "status": 500,
    "message": "Internal Server Error: The server encountered an unexpected condition that prevented it from fulfilling the request."
  }

- For 400 (Bad Request):
  Request: /status-info?code=400
  Response:
  {
    "status": 400,
    "message": "Bad Request: The server cannot process the request due to client-side errors (e.g., malformed syntax)."
  }

List of Status Codes to Handle:
200, 201, 204, 400, 401, 403, 404, 405, 429, 500, 502, 503, 504
*/

const statusCode = [
  {code: 200, message:  "OK: The request has succeeded. The meaning of this status depends on the HTTP method used."},
  {code:201, message:  "created:The request has been fulfilled and a new resourse has been created"},
  {code:204, message:  "No content:The server successfully processed the request and not returning any content"},
  {code:400, message: "Bad request:The server is not able to process the request due to client side errors(e.g. malformed syntax)"},
  {code:401, message: "Unauthorized: The request has not been applied because it lacks valid authentication credentials for the target resource"},
  {code:403, message: "Forbidden: The server understood the request but refuses to authoriz it to be fulfilled"},
  {code:404, message: "Not Found: The server has not found anything matching the request URI. This is often caused by a missing page or resource." },
  {code:405, message: "Method not allowed: The method is known by the server but is not supported by the target resourc"},
  {code:429, message: "Too many request: The user has sent too many request in a given amount of time"},
  {code:500, message: "Internal server error: The server encountered an unexpected condition that prevented it from fulfilling the request"},
  {code:502, message: "Bad gateway: The server received an invalid response from the upstream server"},
  {code:503, message: "Service unavailable: The server is currently unable to handle the request due to a temporary overload or scheduled maintenance"},
  {code:504, message: "Gateway timeout: The server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request."}
  
]
app.get('/status-info',(req,res)=>{
  const code = parseInt(req.query.code);

  const statusInfo = statusCode.find(item=>item.status===code);

  if(statusInfo){
    res.json(statusInfo);
  }else{
    res.status(400).json({
      status: 400,
      message: 'Bad request:The server is not able to process the request due to client side errors(e.g. malformed syntax)'
    });
  }
})




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Status Code API is running on http://localhost:${PORT}`);
});
