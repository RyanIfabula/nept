function update() {

    // ***** Validation Section *****

     if (inputFirstName.getValue() === ""){
        inputFirstName.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Product Name");
        return
    };

    if (inputLastName.getValue() === ""){
        inputLastName.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Description");
        return
    };

    if (inputAddress.getValue() === ""){
        inputAddress.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Price");
        return
    };

    if (inputPosition.getValue() === ""){
        inputPosition.setValueState("Error")
        sap.m.MessageToast.show("Please provide a Stocks");
        return
    };
    
    //Create the empty object
    let createData = {}
     createData.Firstname = inputFirstName.getValue();
    createData.LastName = inputLastName.getValue();
    createData.Address = inputAddress.getValue();
    createData.Position = inputPosition.getValue();
    createData.Email = inputEmail.getValue();
    createData.Photo = ImageBase64Invisible.getText();    
    createData.Birth = inputBirthday.getValue();
    createData.id = IDInvisible.getText();
    //console.log(createData);

    var options = {data: createData};   

    apiUpdateEmployee(options); 
   

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