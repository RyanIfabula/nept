// Get Binding Context

// Replace yourField with FieldName
const context = oEvent.oSource.getBindingContext();  

// Get Entire Model
const data = context.getObject();
////console.log(data);

GetSelectedData(data.id);