/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','./ListItemBase','./library','sap/ui/core/EnabledPropagator','sap/ui/core/IconPool'],function(q,L,l,E,I){"use strict";var S=L.extend("sap.m.StandardListItem",{metadata:{library:"sap.m",properties:{title:{type:"string",group:"Misc",defaultValue:null},description:{type:"string",group:"Misc",defaultValue:null},icon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},iconInset:{type:"boolean",group:"Appearance",defaultValue:true},iconDensityAware:{type:"boolean",group:"Misc",defaultValue:true},activeIcon:{type:"sap.ui.core.URI",group:"Misc",defaultValue:null},info:{type:"string",group:"Misc",defaultValue:null},infoState:{type:"sap.ui.core.ValueState",group:"Misc",defaultValue:sap.ui.core.ValueState.None},adaptTitleSize:{type:"boolean",group:"Appearance",defaultValue:true},titleTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit},infoTextDirection:{type:"sap.ui.core.TextDirection",group:"Appearance",defaultValue:sap.ui.core.TextDirection.Inherit}},designTime:true}});S.prototype.exit=function(){if(this._oImage){this._oImage.destroy("KeepDom");}L.prototype.exit.apply(this,arguments);};S.prototype.setIcon=function(i){var o=this.getIcon();this.setProperty("icon",i);if(this._oImage&&(!i||I.isIconURI(i)!=I.isIconURI(o))){this._oImage.destroy("KeepDom");this._oImage=undefined;}return this;};S.prototype._getImage=function(){var i=this._oImage;if(i){i.setSrc(this.getIcon());if(i instanceof sap.m.Image){i.setDensityAware(this.getIconDensityAware());}}else{i=I.createControlByURI({id:this.getId()+"-img",src:this.getIcon(),densityAware:this.getIconDensityAware(),useIconTooltip:false},sap.m.Image).setParent(this,null,true);}var s=this.getIconInset()?"sapMSLIImg":"sapMSLIImgThumb";i.addStyleClass(i instanceof sap.m.Image?s:s+"Icon",true);this._oImage=i;return this._oImage;};S.prototype._activeHandlingInheritor=function(){if(this._oImage){var a=this.getActiveIcon();a&&this._oImage.setSrc(a);}};S.prototype._inactiveHandlingInheritor=function(){if(this._oImage){this._oImage.setSrc(this.getIcon());}};S.prototype.getContentAnnouncement=function(b){var a="",i=this.getInfoState(),o=I.getIconInfo(this.getIcon())||{};a+=(o.text||o.name||"")+" ";a+=this.getTitle()+" "+this.getDescription()+" "+this.getInfo()+" ";if(i!="None"&&i!=this.getHighlight()){a+=b.getText("LIST_ITEM_STATE_"+i.toUpperCase());}return a;};return S;},true);
