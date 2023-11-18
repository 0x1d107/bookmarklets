# Bookmarklets
Here are the bookmarklets
## libdl.js
Source:

```js
var o = location.href.match("book/[0-9]+")[0].split("/")[1], e = document.cookie.matchAll("lan_access_token=([^;]+)").next().value[1];

document.location.href = `https://reader.lanbook.com/api/v2/book/${o}/documentFile?jwtToken=${e}`;
```

Minfied:

```
javascript:var%20o%3Dlocation.href.match(%22book%2F%5B0-9%5D%2B%22)%5B0%5D.split(%22%2F%22)%5B1%5D%2Ce%3Ddocument.cookie.matchAll(%22lan_access_token%3D(%5B%5E%3B%5D%2B)%22).next().value%5B1%5D%3Bdocument.location.href%3D%60https%3A%2F%2Freader.lanbook.com%2Fapi%2Fv2%2Fbook%2F%24%7Bo%7D%2FdocumentFile%3FjwtToken%3D%24%7Be%7D%60%3B%0A
```

[Link](javascript:var%20o%3Dlocation.href.match(%22book%2F%5B0-9%5D%2B%22)%5B0%5D.split(%22%2F%22)%5B1%5D%2Ce%3Ddocument.cookie.matchAll(%22lan_access_token%3D(%5B%5E%3B%5D%2B)%22).next().value%5B1%5D%3Bdocument.location.href%3D%60https%3A%2F%2Freader.lanbook.com%2Fapi%2Fv2%2Fbook%2F%24%7Bo%7D%2FdocumentFile%3FjwtToken%3D%24%7Be%7D%60%3B%0A)
