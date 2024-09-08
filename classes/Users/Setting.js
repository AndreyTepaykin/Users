/**
 * Class representing setting rows.
 *
 * This description should be revised and expanded.
 *
 * @module Users
 */
var Q = require('Q');
var Db = Q.require('Db');
var Setting = Q.require('Base/Users/Setting');

/**
 * Class representing 'Setting' rows in the 'Users' database
 * @namespace Users
 * @class Setting
 * @extends Base.Users.Setting
 * @constructor
 * @param {Object} fields The fields values to initialize table row as
 * an associative array of {column: value} pairs
 */
function Users_Setting (fields) {

	// Run mixed-in constructors
	Users_Setting.constructors.apply(this, arguments);
	
	/*
 	 * Add any privileged methods to the model class here.
	 * Public methods should probably be added further below.
	 */
}

Q.mixin(Users_Setting, Setting);

/*
 * Add any public methods here by assigning them to Users_Setting.prototype
 */

/**
 * The setUp() method is called the first time
 * an object of this class is constructed.
 * @method setUp
 */
Users_Setting.prototype.setUp = function () {
	// put any code here
	// overrides the Base class
};

module.exports = Users_Setting;