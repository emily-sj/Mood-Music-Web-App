  /* Load the HTTP library */
  //var http = require("http");

  /* Create an HTTP server to handle responses */

  /* http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }).listen(8888);
  print("XD"); */
  
  function getBase64Image(imgUrl, callback) {

    var img = new Image();

    // onload fires when the image is fully loadded, and has width and height

    img.onload = function(){

      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png"),
          dataURL = dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

      callback(dataURL); // the base64 string

    };

    // set attributes and src 
    img.setAttribute('crossOrigin', 'anonymous'); //
    img.src = imgUrl;

}
let imageUrl = "https://assets.entrepreneur.com/content/3x2/2000/20190502194704-ent19-june-editorsnote.jpeg";
getBase64Image(imageUrl, visionCall);
  function visionCall(base64) { 
    console.log("ok");
    let url = "https://vision.googleapis.com/v1/images:annotate?key=AIzaSyAwL18K_jvRTPE1PxAQLBcJwjcaRTVV_0k"; 

    let data = {
      "requests":[
        {
          "image":{
            "content": base64
          },
          "features":[
            {
              "type":"FACE_DETECTION",
              "maxResults":10
            }
          ]
        }
      ]
    };
  async function getData(url, data) {
    let response = await fetch(url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    responseData = await response.json();
    return responseData; 
  }

  let response = getData(url, data);
  console.log(response); 
  let resolved = Promise.resolve(response); 
  resolved.then(function(data) {
    console.log(data); 
  });
}