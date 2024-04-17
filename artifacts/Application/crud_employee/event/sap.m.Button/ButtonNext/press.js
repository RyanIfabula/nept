var currentIndex = CurrentIndex.getText();

var tambahan = 0;

if((parseInt(InvisibleTotalCount.getText()) % 3 > 0)) {

    tambahan = tambahan + 1;

}

if((parseInt(InvisibleTotalCount.getText()/3) + tambahan > parseInt(currentIndex))) { 
  

    currentIndex = parseInt(currentIndex) + 1;

    CurrentIndex.setText(currentIndex);        
    
    PaginationEmployeeData( SearchField.getValue(), (parseInt(currentIndex)-1))
}
else{
    sap.m.MessageToast.show("All data was loaded");
}