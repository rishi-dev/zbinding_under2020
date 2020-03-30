sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.demo2020.controller.propertybind", {

        onPress:function(){
            var bindingModel = this.getView().getModel("bindinglocal");
            console.log(this.getView().getModel("bindinglocal").getData().bindingModel.company);
        }
    });
 });