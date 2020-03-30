/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/model/ChangeReason','sap/ui/model/PropertyBinding','sap/ui/model/ChangeReason'],function(q,C,P){"use strict";var O=P.extend("sap.ui.model.odata.ODataPropertyBinding",{constructor:function(m,p,c,a){P.apply(this,arguments);this.bInitial=true;this.oValue=this._getValue();this.vOriginalValue;this.getDataState().setValue(this.oValue);}});O.prototype.initialize=function(){if(this.oModel.oMetadata.isLoaded()&&this.bInitial){this.checkUpdate(true);this.bInitial=false;}};O.prototype.getValue=function(){return this.oValue;};O.prototype._getValue=function(){return this.oModel._getObject(this.sPath,this.oContext);};O.prototype.setValue=function(v){if(this.bSuspended){return;}if(!q.sap.equal(v,this.oValue)&&this.oModel.setProperty(this.sPath,v,this.oContext,true)){this.oValue=v;var d=this.getDataState();d.setValue(this.oValue);this.oModel.firePropertyChange({reason:C.Binding,path:this.sPath,context:this.oContext,value:v});}};O.prototype.setContext=function(c){if(this.oContext!=c){sap.ui.getCore().getMessageManager().removeMessages(this.getDataState().getControlMessages(),true);this.oContext=c;if(this.isRelative()){this.checkUpdate();}}};O.prototype.checkUpdate=function(f){if(this.bSuspended&&!f){return;}var d=this.getDataState();var c=false;var o=this.oModel.getOriginalProperty(this.sPath,this.oContext);if(f||!q.sap.equal(o,this.vOriginalValue)){this.vOriginalValue=o;d.setOriginalValue(o);c=true;}var v=this._getValue();if(f||!q.sap.equal(v,this.oValue)){this.oValue=v;d.setValue(this.oValue);this._fireChange({reason:C.Change});c=true;}if(c){this.checkDataState();}};O.prototype.checkDataState=function(p){var r=this.oModel.resolve(this.sPath,this.oContext);if(!p||r&&r in p){var d=this.getDataState();d.setLaundering(!!p&&!!(r in p));P.prototype.checkDataState.apply(this,arguments);}};return O;});
