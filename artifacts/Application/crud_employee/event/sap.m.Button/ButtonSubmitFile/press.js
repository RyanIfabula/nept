var fileName = uploadXLS.getValue();

if (fileName === "") {
    sap.m.MessageToast.show("Please select a file to upload !");
    return;
}

// appSetBusy(true);
if (selectedFile) {
    //console.log(selectedFile);
    appSetBusy(true);

    var fileReader = new FileReader();

    fileReader.onload = function (event) {
        var data = event.target.result;

        var workbook = XLSX.read(data, {
            type: "binary",
        });

        workbook.SheetNames.forEach((sheet) => {
            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
            let jsonObject = JSON.stringify(rowObject);
            //console.log(jsonObject);
            rowObject.forEach(function (excelrow) {
                //Here we get the Excel data
                excelData.push(excelrow);
            });
            //console.log(excelData);
        });

        modelMultiModel_Excel.setData(excelData);

        buildDataTable(modelMultiModel_Excel.oData);
    };

    fileReader.readAsBinaryString(selectedFile);
}
