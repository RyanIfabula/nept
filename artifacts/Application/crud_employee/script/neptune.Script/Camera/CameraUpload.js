// Set the File-Input to the oHTMLObject
sap.ui.getCore().attachInit(function(data) {
    oHTMLObjectCameraUpload.setContent('<input type="file" accept="image/*" id="file-input"  style="display:none" multiple>')
});

// Callback function from EventListener
function handleFileSelect(f) {
    var reader = new FileReader();

    reader.onload = (function (theFile) {
        return function (e) {
            var binaryData = e.target.result;

            // Converting Binary Data to base 64
            var base64String = window.btoa(binaryData);

            var fullBase64picture = "data:image/png;base64," + base64String;
            ////console.log(base64String)

            ImageEmployee.setSrc(fullBase64picture);

            //ButtonSavePicture.setEnabled(true);
            ImageBase64Invisible.setText(fullBase64picture);

        };
    })(f);
    reader.readAsBinaryString(f);
}