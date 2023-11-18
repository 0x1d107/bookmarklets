var o = location.href.match("book/[0-9]+")[0].split("/")[1], e = document.cookie.matchAll("lan_access_token=([^;]+)").next().value[1];

document.location.href = `https://reader.lanbook.com/api/v2/book/${o}/documentFile?jwtToken=${e}`;
