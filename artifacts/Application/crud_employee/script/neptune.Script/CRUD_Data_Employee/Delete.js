function deleteEmployee() {
    var options = {
    parameters: {
        "where": JSON.stringify({"id": IDInvisible.getText()})
    }}

    apiDeleteDataEmployee(options);
    apigetEmployee_List();
}