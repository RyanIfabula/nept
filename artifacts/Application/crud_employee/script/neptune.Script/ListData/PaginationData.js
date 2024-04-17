function PaginationEmployeeData(SearchData, index) {

    var limit = 3
    
    if(SearchData === "")
    {
        var options = {
        parameters: {
            
            "skip": index*limit
        }}
        apigetEmployee_List(options);
    }
    else{
        var options = {
        parameters: {
            "where":JSON.stringify([{"Firstname": "Like(%25" + SearchField.getValue() + "%25)" },{"LastName": "Like(%25" + SearchField.getValue() + "%25)" },{"Position": "Like(%25" + SearchField.getValue() + "%25)" }]),
            "skip": index*limit
        }}
        apigetEmployee_List(options);
    }
}