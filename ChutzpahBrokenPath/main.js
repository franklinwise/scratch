// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
	waitSeconds: 600,
	appDir: "../",
	baseUrl: "../js/",
	urlArgs : "bust=2",  //TODO: change to build not time
	paths: {
		order: 'libs/require/order.min',
		jquery: 'libs/require-jquery',
		underscore: 'libs/underscore/underscore-amd',
		backbone: 'libs/backbone/backbone-amd',
		qunit: 'libs/qunit-git',
		bootstrap: 'libs/bootstrap/bootstrap',
		clickover: 'libs/bootstrap/bootstrapx-clickover',
		text: 'libs/require/text',
		templates: '../templates',
		shared: './shared',
		data: 'data',
		dataFilter: './data-filter',
		util: './util',
		happy: 'libs/happy/happy-all',
		cookie: 'libs/cookie/jquery.cookie',
		accounting: 'libs/accounting/accounting.min',
		jcolor: 'libs/jquery/jquery.color',
		highcharts: 'libs/highcharts/highcharts',
		classy: 'libs/classy/classy'	
		
	}, 
	
	modules: [
	//Optimize the require-jquery.js file by applying any minification
	//that is desired via the optimize: setting above.
        {
        name: "require-jquery"
       },

	//Optimize the application files. Exclude jQuery since it is
	//included already in require-jquery.js
        {
        name: "main",
        exclude: ["jquery"]
       }
    ]
	
});

require([

// Load our app module and pass it to our definition function
  '../test/app-test'
// Some plugins have to be loaded in order due to their non AMD compliance
// Because these scripts are not "modules" they do not pass any values to the definition function below
], function (App) {
	// The "app" dependency is passed in as "App"
	// Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
	App.initialize();
});
