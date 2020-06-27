const dominio = "http://104.129.131.142:4000"
var ret = (ruta, callback, datos = {}, method = 'GET')=>{
  let data = {
    method: method,
    headers: {//Header Defination
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    }
  }
  if(method!="GET")
  {
    var formBody = [];
    for (var key in datos) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(datos[key]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    data.body= formBody
  }
  console.log(data)
  fetch(dominio + ruta, data)
        .then(response => {return(response.json())})
          .then(function(myJson) {callback(myJson)});
}

module.exports = ret;
