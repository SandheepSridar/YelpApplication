(function () {
var myConnector = tableau.makeConnector();
myConnector.getSchema = function (schemaCallback) {

var cols = [
{ id : "state", alias:"state", dataType : tableau.dataTypeEnum.string },
{ id : "city", alias: "city", dataType : tableau.dataTypeEnum.string},
{ id : "zip", alias: "zip", dataType : tableau.dataTypeEnum.string },
];
var tableInfo = {
id : "yelp3",
alias : "yelp3",
columns : cols
};
schemaCallback([tableInfo]);
};
myConnector.getData = function(table, doneCallback) {
$.getJSON("http://people.tamu.edu/~sandheepsridar/yelp3.json", function(resp) {
var feat = resp;
tableData = [];
// Iterate over the JSON object
for (var i = 0, len = feat.length; i < len; i++) {
tableData.push({
"state": feat[i]["state"],
"city": feat[i] ["city"],
"zip": feat[i] ["zip"]
});
}
table.appendRows(tableData);
doneCallback();
});
};
tableau.registerConnector(myConnector);
$(document).ready(function () {
$("#submitButton").click(function () {
tableau.connectionName = "yelp3";
tableau.submit();
});
});})();