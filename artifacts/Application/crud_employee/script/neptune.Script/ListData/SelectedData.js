function GetSelectedData(id){
    ////console.log(id);

    var options = {
        parameters: {
            "where":JSON.stringify([{"id": id}]),
            "select":"id,Firstname,LastName,Address,Position,Email,Photo,Birth"
        }}

    apiGetSpesificData(options);

    App.to(DataEmployee);
}