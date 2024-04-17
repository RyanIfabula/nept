var data = modelModelObject_SpesificData.getData();

//console.log(data);

// inputFirstName.setValue(data[0].Firstname);
// inputLastName.setValue(data[0].LastName);
// inputAddress.setValue(data[0].Address);
// inputPosition.setValue(data[0].Position);
// inputEmail.setValue(data[0].Email);
// ImageEmployee.setSrc(data[0].Photo);
// ImageBase64Invisible.setText(data[0].Photo);
// IDInvisible.setText(data[0].id);
//inputBirthday.setDateValue(DatetimeToDate(data[0].Birth));

data[0].Birth = DatetimeToDate(data[0].Birth);
modelDataEmployee.setData(data[0]);
ButtonSubmit.setVisible(false);
ButtonUpdate.setVisible(true);
ButtonDelete.setVisible(true);




function DatetimeToDate(Datetime) {
    // Convert DateTime to Date
    var datetime = new Date(Datetime); // gets the current datetime
    var year = datetime.getFullYear(); // gets the year
    var month = datetime.getMonth() + 1; // gets the month (as a number)
    var day = datetime.getDate(); // gets the day of the month

    var formattedDate = year + '-' + month + '-' + day; // formats the date as "YYYY-MM-DD"

    var date = new Date(formattedDate);
    //console.log(date); // prints "2021-7-15" or the current date in the "YYYY-MM-DD" format
    return date;
}
