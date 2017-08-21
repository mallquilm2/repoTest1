var utiljsApp = angular.module('utilJsApp', []);
 
utiljsApp.service('sharedDataService', function($window)
{
 
    var KEY = 'AppSharedJs.SelectedValue';
 
    var addItem = function(key, value)
    {
        KEY = 'AppSharedJs.SelectedValue' + '.' + key;
        $window.sessionStorage.setItem(KEY, value);
    };
 
    var getItem = function(key, remove)
    {
        KEY = 'AppSharedJs.SelectedValue' + '.' + key;
        valor = $window.sessionStorage.getItem(KEY);
        
        if(typeof valor != 'undefined' && remove){
            removeItem(key);
        }
        
        return valor;
    };
    
    var removeItem = function(key)
    {
        KEY = 'AppSharedJs.SelectedValue' + '.' + key;
        $window.sessionStorage.removeItem(KEY);
    };
 
    var addObject = function(key, object)
    {
        KEY = 'AppSharedJs.SelectedObject' + '.' + key;
        $window.sessionStorage.setItem(KEY, JSON.stringify(object));
    };
 
    var getObject = function(key, remove)
    {
        KEY = 'AppSharedJs.SelectedObject' + '.' + key;
        valor = JSON.parse($window.sessionStorage.getItem(KEY));
 
        if(typeof valor != 'undefined' && remove){
            removeObject(key);
        }
        
        return valor; 
    };
    
    var removeObject = function(key)
    {
        KEY = 'AppSharedJs.SelectedObject' + '.' + key;
        $window.sessionStorage.removeItem(KEY);
    };
    
    return ({
        addItem : addItem,
        getItem : getItem,
        addObject : addObject,
        getObject : getObject,
        removeItem : removeItem,
        removeObject: removeObject
    });
 
});