(function () {
var myConnector = tableau.makeConnector();
myConnector.getSchema = function (schemaCallback) {

var cols = [
{ id : "state", alias:"state", dataType : tableau.dataTypeEnum.string },
{ id : "stars", alias: "stars",dataType : tableau.dataTypeEnum.string },
{ id : "rating",alias: "rating", dataType : tableau.dataTypeEnum.string },
{ id : "business name",alias: "business name", dataType : tableau.dataTypeEnum.string },
{ id : "city", alias: "city", dataType : tableau.dataTypeEnum.string},
{ id : "zip", alias: "zip", dataType : tableau.dataTypeEnum.string },
];
var tableInfo = {
id : "yelp1",
alias : "yelp1",
columns : cols
};
schemaCallback([tableInfo]);
};
myConnector.getData = function(table, doneCallback) {
$.getJSON("http://people.tamu.edu/~sandheepsridar/ ", function(resp) {
var feat = resp;
tableData = [];
// Iterate over the JSON object
for (var i = 0, len = feat.length; i < len; i++) {
tableData.push({
"state": feat[i]["Trips Per Day"],
"stars": feat[i] ["Farebox Per Day"],
"rating": feat[i] ["Unique Medallions"],
"business name": feat[i] ["Unique Drivers"],
"city": feat[i] ["Medallions Per Day"],
"zip": feat[i] ["Avg Days Medallions on Road"]
});
}
table.appendRows(tableData);
doneCallback();
});
};
tableau.registerConnector(myConnector);
$(document).ready(function () {
$("#submitButton").click(function () {
tableau.connectionName = "taxi";
tableau.submit();
});
});})();