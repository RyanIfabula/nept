//Create the empty object    
var currentIndex = CurrentIndex.getText();
ButtonNext.setVisible(true);

if(parseInt(currentIndex) >= 2){
    currentIndex = parseInt(currentIndex) - 1;

    ////console.log(currentIndex);

    CurrentIndex.setText(currentIndex);
    PaginationEmployeeData( SearchField.getValue(), (parseInt(currentIndex)-1))
}
else{
      PaginationEmployeeData( SearchField.getValue(), 0)
}