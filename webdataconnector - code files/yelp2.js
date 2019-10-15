(function () {
var myConnector = tableau.makeConnector();
myConnector.getSchema = function (schemaCallback) {

var cols = [
{ id : "categories", alias:"categories", dataType : tableau.dataTypeEnum.string },
{ id : "categoryCount", alias: "categoryCount",dataType : tableau.dataTypeEnum.string },
];
var tableInfo = {
id : "yelp2",
alias : "yelp2",
columns : cols
};
schemaCallback([tableInfo]);
};
myConnector.getData = function(table, doneCallback) {
$.getJSON("http://people.tamu.edu/~sandheepsridar/yelp2.json", function(resp) {
var feat = resp;
tableData = [];
// Iterate over the JSON object
for (var i = 0, len = feat.length; i < len; i++) {
tableData.push({
"categories": feat[i]["categories"],
"categoryCount": feat[i] ["categoryCount"],
});
}
table.appendRows(tableData);
doneCallback();
});
};
tableau.registerConnector(myConnector);
$(document).ready(function () {
$("#submitButton").click(function () {
tableau.connectionName = "yelp2";
tableau.submit();
});
});})();