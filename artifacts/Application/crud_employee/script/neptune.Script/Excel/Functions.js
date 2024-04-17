function appSetBusy(val) {
    App.setBusy(val);
}

function buildDataTable(excelTab) {
    excelHeader = Object.keys(excelTab[0]);

    excelHeader.forEach(function (header) {
        //console.log(header);

        //Adding Column data and Bindings to TableXLSXData
        var column = new sap.m.Column({
            header: new sap.m.Text({ text: header }),
        });

        TableXLSXData.addColumn(column);
    });

    excelTab.forEach(function (data) {
        var item = new sap.m.ColumnListItem({
            cells: [
                new sap.m.Text({ text: data.EEID }),
                new sap.m.Text({ text: data["Full Name"] }),
                new sap.m.Text({ text: data["Job Title"] }),
                new sap.m.Text({ text: data.Department }),
                new sap.m.Text({ text: data["Business Unit"] }),
                new sap.m.Text({ text: data.Gender }),
                new sap.m.Text({ text: data.Ethnicity }),
                new sap.m.Text({ text: data.Age }),
                new sap.m.Text({ text: data["Hire Date"] }),
                new sap.m.Text({ text: data["Annual Salary"] }),
                new sap.m.Text({ text: data["Bonus %"] }),
                new sap.m.Text({ text: data.Country }),
                new sap.m.Text({ text: data.City }),
                new sap.m.Text({ text: data["Exit Date"] }),
            ],
        });

        TableXLSXData.addItem(item);
    });

    TableXLSXData.setVisible(true);
    ButtonClearEverything.setVisible(true);
    appSetBusy(false);
    //TableXLSXData.setHeaderText("XLSX Data Rows: " + excelTab.length);

    ButtonSave.setVisible(true);
}

function saveXLSXData() {
    //In here we're going to save the XLSX data to the backend via a Table API
    appSetBusy(true);

    var options = {
        data: modelMultiModel_Excel.getData(),
    };

    apiRestAPI_SendData(options);

    sap.m.MessageToast.show("All Data Saved");

    appSetBusy(false);
}

function ClearEverything() {
     appSetBusy(true);

    apiRestAPI_DeleteTable();
    ButtonClearEverything.setVisible(false);
    uploadXLS.setValue("");

    TableXLSXData.removeAllColumns();
    TableXLSXData.setVisible(false);
    colItemTableXLSX.removeAllCells();

    modelTableXLSXData.setData([]);
    modelTableXLSXData.refresh();

    ButtonSave.setVisible(false);
    appSetBusy(false);
}
