//var loginApp = angular.module('LoginApp', ['dependencyApp1','','dependencyApp2']);
var loginApp = angular.module('LoginApp',['utilJsApp']);

loginApp.config(["$httpProvider", function($httpProvider)
{
	$httpProvider.defaults.cache = false;
	
	if( !$httpProvider.defaults.headers.get )
	{
	$httpProvider.defaults.headers.get = {};
	}
	// Desactivar IE Ajax Request Caching
	$httpProvider.defaults.headers.get["If-Modified-Since"] = "0";
	
}	]);