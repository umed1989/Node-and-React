var localtunnel = require("localtunnel");
localtunnel(5000, { subdomain: "asdfasdf" }, function(err, tunnel) {
  console.log("LT running");
});
