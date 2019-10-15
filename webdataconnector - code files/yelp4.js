(function () {
var myConnector = tableau.makeConnector();
myConnector.getSchema = function (schemaCallback) {

var cols = [
{ id : "businessID", alias:"businessID", dataType : tableau.dataTypeEnum.string },
{ id : "categories", alias: "categories",dataType : tableau.dataTypeEnum.string },
{ id : "zip",alias: "zip", dataType : tableau.dataTypeEnum.string },
{ id : "stars",alias: "stars", dataType : tableau.dataTypeEnum.string }
];
var tableInfo = {
id : "yelp1",
alias : "yelp1",
columns : cols
};
schemaCallback([tableInfo]);
};
myConnector.getData = function(table, doneCallback) {
$.getJSON("http://people.tamu.edu/~sandheepsridar/yelp4.json", function(resp) {
var feat = resp;
tableData = [];
// Iterate over the JSON object
for (var i = 0, len = feat.length; i < len; i++) {
tableData.push({
"businessID": feat[i]["businessID"],
"categories": feat[i] ["categories"],
"zip": feat[i] ["zip"],
"stars": feat[i] ["stars"]
});
}
table.appendRows(tableData);
doneCallback();
});
};
tableau.registerConnector(myConnector);
$(document).ready(function () {
$("#submitButton").click(function () {
tableau.connectionName = "yelp4";
tableau.submit();
});
});})();