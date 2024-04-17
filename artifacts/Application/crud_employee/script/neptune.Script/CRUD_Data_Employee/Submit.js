function submit() {

    // ***** Validation Section *****

     if (inputFirstName.getValue() === ""){
        inputFirstName.setValueState("Error")
        sap.m.MessageToast.show("Please provide a First Name");
        return
    };

    if (inputLastName.getValue() === ""){
        inputLastName.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Last Name");
        return
    };

    if (inputAddress.getValue() === ""){
        inputAddress.setValueState("Error")
        sap.m.MessageToast.show("Please provide an Address");
        return
    };

    if (inputPosition.getValue() === ""){
        inputPosition.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Position");
        return
    };

    if (inputBirthday.getValue() === ""){
        inputEmail.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Birthday");
        return
    };


    //Create the empty object
    let createData = {}

    createData.Firstname = inputFirstName.getValue();
    createData.LastName = inputLastName.getValue();
    createData.Address = inputAddress.getValue();
    createData.Position = inputPosition.getValue();
    createData.Email = inputEmail.getValue();
    createData.Birth = inputBirthday.getValue();
    createData.Photo = ImageBase64Invisible.getText();


    //console.log(createData);

    options = {
        parameters: {
            
            "skip": 0,
            "order": JSON.stringify({"Firstname": "ASC", "LastName": "DESC"})
        }}

    apigetEmployee_List();
    
    var options = {data: createData};  

    
    apiCreateEmployee(options);   

    inputFirstName.setValue("");
    inputLastName.setValue("");
    inputAddress.setValue("");
    inputPosition.setValue("");
    inputEmail.setValue("");
    inputBirthday.setValue("");
    ImageBase64Invisible.setText("");
    ImageEmployee.setSrc("");
    inputBirthday.setValue("");
}