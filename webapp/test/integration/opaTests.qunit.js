/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["mcpm/ui/project1/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
