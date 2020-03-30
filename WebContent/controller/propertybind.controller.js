sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], function (Controller, MessageToast) {
    "use strict";
    return Controller.extend("sap.demo2020.controller.propertybind", {

        onPress:function(){
            var bindingModel = this.getView().getModel("bindinglocal");
            //show local model
            console.log(this.getView().getModel("bindinglocal").getData().bindingModel.company);
        },
        onPressCAL:function(){
                    console.log("trigger CAL");
                   var  oDatamodel = this.getView().getModel('bindingcal');
                    var mParameters = {           
                        urlParameters: {
                        },
                        method: "GET",
                        context: this,
                        async: true,
                        success: this.OrderTypeReadSuccessB.bind(this), 
                        error: this.OrderTypeReadErrorB.bind(this)                        
                    };       
                    oDatamodel.read("/ProductSet('HT-9991')", mParameters); 

        },

        onPressES5:function(){
            console.log("trigger ES5");
            var oDatamodel = this.getView().getModel('bindingcal');
            var mParameters = {
                urlParameters: {
                },
                method: "GET",
                context: this,
                async: true,
				success: this.OrderTypeReadSuccessB.bind(this), 
				error: this.OrderTypeReadErrorB.bind(this)                
            };       
            oDatamodel.read("/ProductSet('HT-1000')", mParameters); 
},

		OrderTypeReadSuccessB: function(oData) {
            console.log(oData);
		},
		OrderTypeReadErrorB: function(oError) {
			console.log(oError);
		}   


            
    });
 });