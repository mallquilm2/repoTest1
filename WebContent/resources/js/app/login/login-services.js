loginApp.service("LoginService", function($http, $q){

	return ({
		validarCredenciales: validarCredenciales
//		busqAS400:busAS400,
//		busqSYBASE:busqSYBASE,
//		cargaCombo1:cargaCombo1,
//		obtenerDatosGlobales:obtenerDatosGlobales
	});

	function handleError(response)
	{
		if ( !angular.isObject(response.data) || !response.data.message )
		{
			return ($q.reject("An unknown error occurred."));
		}
		return ($q.reject(response.data.message));
	}
	
	function handleSuccess(response)
	{
		return (response.data);
	}
	
	function validarCredenciales(user,password)
	{
		var request = $http({
            method: "get",
            url: "/miProyectoPrueba/InitServlet",
            params: {
                action: "validarCredenciales",
                user:		user,
                password: 	password
            }
        });
        return( request.then( handleSuccess, handleError ) );
    }
	/*
	function handleError(response)
	{
		if ( !angular.isObject(response.data) || !response.data.message )
		{
			return ($q.reject("An unknown error occurred."));
		}
		return ($q.reject(response.data.message));
	}

	function handleSuccess(response)
	{
		return (response.data);
	}
	
	function obtenerDatosGlobales()
	{
		var request = $http({
            method: "get",
            url: "/FondosMutuosClientWeb/GeneralServlet",
            params: {
                action: "obtenerDatosGlobales"
            }
        });
        return( request.then( handleSuccess, handleError ) );
    }
	
	
	function busAS400(clv_valor)
	{
		var request = $http({
            method: "get",
            url: "/FondosMutuosClientWeb/DemoServlet",
            params: {
                action: "consultaAS400",
                valor_caja_texto1: clv_valor
            }
        });
        return( request.then( handleSuccess, handleError ) );
    }
	
	function busqSYBASE(clv_valor)
	{
		var request = $http({
            method: "get",
            url: "/FondosMutuosClientWeb/DemoServlet",
            params: {
                action: "consultaSYBASE",
                valor_caja_texto1: clv_valor
            }
        });
        return( request.then( handleSuccess, handleError ) );
    }
	
	function cargaCombo1()
	{
		var request = $http({
            method: "get",
            url: "/FondosMutuosClientWeb/DemoServlet",
            params: {
                action: "cargaCombo1"
            }
        });
        return( request.then( handleSuccess, handleError ) );
    }
*/
});