var o = location.href.match("book/[0-9]+")[0].split("/")[1], e = document.cookie.matchAll("lan_access_token=([^;]+)").next().value[1];
(async function (){
let resp = await fetch(`https://reader.lanbook.com/api/v2/book/${o}/documentFile?jwtToken=${e}`);
let json = await resp.json();
var a = document.createElement('a');
a.href = "data:application/pdf;base64,"+json.data;
a.click();
})();
