function searchEmployee(){
    //Filter OR
   var options = {
    parameters: {
        "where":JSON.stringify([{"Firstname": "Like(%25" + SearchField.getValue() + "%25)" },{"LastName": "Like(%25" + SearchField.getValue() + "%25)" },{"Position": "Like(%25" + SearchField.getValue() + "%25)" }]),
        "order": JSON.stringify({"Firstname": "ASC", "LastName": "DESC"})
    }}

    apigetEmployee_List(options);
    apiGetDataCount(options);

}