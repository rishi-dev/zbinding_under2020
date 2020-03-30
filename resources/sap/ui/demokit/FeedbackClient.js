/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(['jquery.sap.global','sap/ui/core/IconPool','sap/ui/core/library','sap/ui/layout/HorizontalLayout','sap/ui/layout/VerticalLayout','sap/ui/layout/form/SimpleForm','sap/ui/layout/form/SimpleFormLayout','sap/ui/commons/Button','sap/ui/commons/CheckBox','sap/ui/commons/FormattedTextView','sap/ui/commons/Label','sap/ui/commons/Link','sap/ui/commons/SegmentedButton','sap/ui/commons/TextArea','sap/ui/commons/TextView','sap/ui/ux3/ToolPopup'],function(q,I,c,H,V,S,a,B,C,F,L,b,d,T,e,f){"use strict";var g=c.ValueState;var h=function(){this._oFeedbackContextText;this._oIncludeFeedbackContextCB;};h.prototype.updateFeedbackContextText=function(){if(this._oIncludeFeedbackContextCB.getChecked()){u.call(this);}else{i.call(this);}function u(){this._oFeedbackContextText.setText("Location: "+this._getCurrentPageRelativeURL()+"\n"+this._getUI5Distribution()+" Version: "+sap.ui.getVersionInfo().version);}function i(){this._oFeedbackContextText.setText(this._getUI5Distribution()+" Version: "+sap.ui.getVersionInfo().version);}};h.prototype._getUI5Distribution=function(){var v=sap.ui.getVersionInfo();var u="SAPUI5";if(v&&v.gav&&/openui5/i.test(v.gav)){u="OpenUI5";}return u;};h.prototype._getCurrentPageRelativeURL=function(){var p=window.location;return p.pathname+p.hash+p.search;};h.prototype.createFeedbackPopup=function(){this._oFeedbackContextText=new e("oFeedbackContextText");this._oIncludeFeedbackContextCB=new C("includePageCB");var t=this;var o=q.sap.loadResource('sap/ui/demokit/configuration/properties.json');var s=o["FeedbackServiceURL"];var i='Describe what you like or what needs to be improved. You can share your feedback for the overall Demokit experience or for the specific page you are currently viewing.';var j,r,k,l,m,n,p;function u(O){w();O.addContent(n);N.removeAllContent();N.addContent(O);}function v(){N.setBusyIndicatorDelay(0);N.setBusy(true);l.setValueState(g.None);l.setPlaceholder(i);}function w(){N.setBusy(false);j.setText("");k.setSelectedButton();l.setValue('');t._oIncludeFeedbackContextCB.setChecked(false);t._oIncludeFeedbackContextCB.fireChange();t._oFeedbackContextText.setVisible(false);m.setText("Show context data");m.setTooltip("Show context data");p.setEnabled(false);}function x(){I.addIcon("icon-face-very-bad","FeedbackRatingFaces",{fontFamily:"FeedbackRatingFaces",content:"E086",suppressMirroring:true});I.addIcon("icon-face-bad","FeedbackRatingFaces",{fontFamily:"FeedbackRatingFaces",content:"E087",suppressMirroring:true});I.addIcon("icon-face-neutral","FeedbackRatingFaces",{fontFamily:"FeedbackRatingFaces",content:"E089",suppressMirroring:true});I.addIcon("icon-face-happy","FeedbackRatingFaces",{fontFamily:"FeedbackRatingFaces",content:"E08B",suppressMirroring:true});I.addIcon("icon-face-very-happy","FeedbackRatingFaces",{fontFamily:"FeedbackRatingFaces",content:"E08C",suppressMirroring:true});}function y(){var R=new F("feedbackRateYourExperienceLabel");R.setHtmlText("<span class='feedbackAsterisk'>*</span>Rate your experience:");j=new L("feedbackRatingLabel",{});return new H('feedbackRatingHeader',{content:[R,j]});}function z(){x();k=new d({id:"feedbackRatingButton",buttons:[O("icon-face-very-bad","Very Poor",1),O("icon-face-bad","Poor",2),O("icon-face-neutral","Average",3),O("icon-face-happy","Good",4),O("icon-face-very-happy","Excellent",5)]});function O(Q,R,U){var W="sap-icon://FeedbackRatingFaces/"+Q;return new B({icon:W,width:"20%",press:P.bind(this,R,U)});}function P(Q,R){j.setText(Q);r=R;p.setEnabled(true);}return k;}function A(){l=new T("demokitFeedbackInput",{rows:13});l.setPlaceholder(i);return l;}function D(){t._oIncludeFeedbackContextCB.setText('Feedback is related to the current page');t._oIncludeFeedbackContextCB.attachChange(t.updateFeedbackContextText.bind(t));m=new b("feedbackContextDataLink",{wrapping:"false",text:"Show context data",tooltip:"Show context data",press:function(){if(t._oFeedbackContextText.getVisible()===false){m.setText("Hide context data");m.setTooltip("Hide context data");t._oFeedbackContextText.setVisible(true);}else{m.setText("Show context data");m.setTooltip("Show context data");t._oFeedbackContextText.setVisible(false);}}});return new H("feedbackContextButtons",{content:[t._oIncludeFeedbackContextCB,m]});}function E(){t._oFeedbackContextText.addStyleClass("feedbackContextData");t._oFeedbackContextText.setVisible(false);t.updateFeedbackContextText();return t._oFeedbackContextText;}function G(){var O=new b({text:"Privacy",tooltip:"Privacy",target:"_blank",href:"https://help.hana.ondemand.com/privacy.htm"});var P=new b({text:"Terms of Use",tooltip:"Terms of Use",target:"_blank",href:"https://help.hana.ondemand.com/terms_of_use.html"});var Q=new b({text:"Legal Agreement",tooltip:"Legal Agreement",target:"_blank",href:"./legal_agreement_with_privacy.html"});var R=new F();var U='Your feedback is anonymous, we do not collect any personal data. For more information see <embed data-index=\"0\">, <embed data-index=\"1\"> & <embed data-index=\"2\">.';R.addStyleClass("feedbackLicenseText");R.setHtmlText(U);R.addControl(O);R.addControl(P);R.addControl(Q);return R;}function J(){var O=new B({text:"Cancel",tooltip:"Cancel",press:function(){w();N.close();}});n=new B('closeBtn',{text:"Close",tooltip:"Close",press:function(){N.close();}});p=new B('sendBtn',{text:"Send",tooltip:"Send feedback",enabled:false,press:function(){var R={};if(t._oIncludeFeedbackContextCB.getChecked()){R={"texts":{"t1":l.getValue()},"ratings":{"r1":{"value":r}},"context":{"page":t._getCurrentPageRelativeURL(),"attr1":t._getUI5Distribution()+":"+sap.ui.version}};}else{R={"texts":{"t1":l.getValue()},"ratings":{"r1":{"value":r}},"context":{"attr1":t._getUI5Distribution()+":"+sap.ui.version}};}v();q.ajax({url:s,type:"POST",contentType:"application/json",data:JSON.stringify(R)}).done(function(){u(P);}).fail(function(){u(Q);});}});var P=new V({content:[new F('successMsg',{htmlText:'<h4>Your feedback was sent successfully.</h4>'})]});var Q=new V({content:[new F('errorMsg',{htmlText:'<h4>Your feedback was not sent.</h4>'})]});return new H('feedbackButtons',{content:[p,O]});}var K=new S({maxContainerCols:1,width:'400px',editable:true,layout:a.ResponsiveGridLayout,content:[new L({text:'Send us your feedback!'}),y(),z(),A(),D(),E(),G(),J()]});var M="theme/img/themeswitch_";var N=new f('feedBackPopup',{icon:'sap-icon://comment',iconHover:M+'hover.png',iconSelected:M+'selected.png',content:[K],defaultButton:p,closed:function(){this.removeAllContent();this.addContent(K);}});N.setTooltip("Send us your feedback!");return N;};return h;});
