window.addEventListener("offline", onOffline, false);

window.addEventListener("online", onOnline, false);

function onOffline(){

    sap.m.MessageToast.show("Offline!");

    oButtonCallAPI.setVisible(false);

}

function onOnline(){

    sap.m.MessageToast.show("Online!");

    oButtonCallAPI.setVisible(true);

}