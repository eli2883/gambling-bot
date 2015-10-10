var http = require('http');
var fs = require('fs');
var appID = 440;
var playerID = "STEAM_0:1:66711191";
var apiKey = "DBC51CCF7CF1E83BF7A0EF47E68A18CE";
function getInv(appID, playerID, apiKey){
var file = fs.createWriteStream(playerID + "-inv.json");
var request = http.get("http://api.steampowered.com/IEconItems_" + appID + "/GetPlayerItems/v0001/?key=" + apiKey + "&SteamID=" + playerID + "&format=json", function(response) {
  res.response.pipe(file);
});

}
