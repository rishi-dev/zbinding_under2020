/*!
 * UI development toolkit for HTML5 (OpenUI5)
 * (c) Copyright 2009-2017 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides control sap.ui.demokit.UIAreaSubstitute.
sap.ui.define(['sap/ui/core/Element', './library'],
	function(Element, library) {
	"use strict";

	/**
	 * Constructor for a new UIAreaSubstitute.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * A substitute for a UIArea that can be embedded in the control tree.
	 * @extends sap.ui.core.Element
	 * @version 1.48.5
	 *
	 * @constructor
	 * @private
	 * @sap-restricted sdk
	 * @alias sap.ui.demokit.UIAreaSubstitute
	 */
	var UIAreaSubstitute = Element.extend("sap.ui.demokit.UIAreaSubstitute", /** @lends sap.ui.demokit.UIAreaSubstitute.prototype */ { metadata : {

		library : "sap.ui.demokit",
		aggregatingType : "sap.ui.demokit.CodeSampleContainer",
		aggregations : {

			/**
			 * Content Area used for the running sample code
			 */
			content : {type : "sap.ui.core.Control", multiple : true, singularName : "content"}
		}
	}});

	return UIAreaSubstitute;

});
