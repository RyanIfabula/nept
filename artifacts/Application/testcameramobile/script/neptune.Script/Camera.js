// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    // Take picture using device camera and retrieve image as base64-encoded string
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });
}

// Called when a photo is successfully retrieved
function onPhotoDataSuccess(imageData) {
    // Get image handle
    var img = document.getElementById('myImage');

    // Set the captured photo as the source of the image element
    img.src = "data:image/jpeg;base64," + imageData;
}

// Called if something bad happens
function onFail(message) {
    alert('Failed because: ' + message);
}