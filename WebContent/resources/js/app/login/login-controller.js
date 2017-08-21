loginApp.controller("LoginController", function($scope, LoginService,sharedDataService)
{
	
	$scope.datosPagina = {
		user:"",
		password:""
	};
	
	$scope.init = function()
	{
		
	}
	
	$scope.validarCredenciales = function (){
		LoginService.validarCredenciales($scope.datosPagina.user,$scope.datosPagina.password).then(function(response) {
					
				if(response.id != null){
					alert("Bienvenido");
					//here go to welcome...
				}else{
					alert("No se encontraron sus credenciales!");
					window.location.href = "index.html";
				}
					
			});	
	};
	
	/*
	$scope.title = "T\u00EDtulo P\u00E1gina";
	var datosGlobales;
	
	$scope.datosPagina = {
			rut: "",
			nombre: "",
			nroTarjeta: "",
			cboEjecutivo: "-1",
			fechaIngreso: "",
			cboProdPlastico: "-1",
			totalTarjetas: "",
			cboAcciones: "-1",
			estado: "",
			bloqueos: "",
			tarjetasTitulares: []
		};
	
	$scope.AplicacionesList = [];
	$scope.ListaparaComboList = [];
	
	$scope.paginacion = new Pagination();//para inicializar el componente paginacion.

	$scope.init = function()
	{
		
		   var dato={_rutCliente:"101681955",_ctaCte:"", _tipCta:"", _nombre:"Nombre",_codCnv:"",	 _codSer:"", _fecIni:"", _fecTer:"", _estMan:"",
	                 _codCmn:"", _gloCmn:"", _codBie:"", _codMon:"",	 _mtoMaxFij:"",	 _cct0:"",	 _filler:""};
		   
		   //alert(JSON.stringify(dato));
		   
		 
			sharedDataService.addObject("lista", dato);
			
				
			var listaObjeto=sharedDataService.getObject("lista");
			
			//alert(JSON.stringify(listaObjeto));
			
		
		$scope.cargaCombo1();
		
		//obtenerDatosGlobales();
	};
	
	function obtenerDatosGlobales(){
		
		DemoService.obtenerDatosGlobales().then(
			function(response) {
				datosGlobales=response;
				alert(datosGlobales.gRutUsuario);
		});	
	}
	
	$scope.clickRdoRut = function()
	{
		alert("click en radio 1");
	};
	
	$scope.clickRdoTarjeta = function()
	{
		alert("click en radio 2");
	};
	
	$scope.buscar = function()
	{
		alert("Texto ingresado en 'Texto 1':"+ $scope.datosPagina.nombre);
	};

	$scope.mostrarValorCombo1 = function()
	{
		
		alert("Valor seleccionado en 'Combo 1':"+ $scope.datosPagina.cboEjecutivo);
	};
	
	
	
	function validarFormulario(){
		var correcto =true;
		var claveValor = $scope.datosPagina.nombre;
		if(claveValor==""){
			correcto=false;
			alert("Ingrese un valor en la caja de texto");
			
	     }
		return correcto;
		
	}
	
	$scope.busqAS400 = function()
	{
		
		if(validarFormulario()){
			var claveValor = $scope.datosPagina.nombre;
			DemoService.busqAS400(claveValor).then(
				function(response) {
				$scope.paginacion.calcularPaginas(JSON.parse(response.respuesta));
            	var codigoRespuesta = response.response;
				var cuerpoRespuesta = response.message;
				if(codigoRespuesta == "0"){
					alert(JSON.stringify(response.respuesta));
					$scope.setAplicacionesListaList(JSON.parse(response.respuesta));	
				}
				else{
					alert(response.message);
				}
			});			
		}
			
	};
	
	$scope.busqSYBASE = function()
	{
		if(validarFormulario()){
			var claveValor = $scope.datosPagina.nombre;
			DemoService.busqSYBASE(claveValor).then(
				function(response) {
				$scope.paginacion.calcularPaginas(JSON.parse(response.respuesta));
            	var codigoRespuesta = response.response;
				var cuerpoRespuesta = response.message;
				if(codigoRespuesta == "0"){
					$scope.setAplicacionesListaList(JSON.parse(response.respuesta));	
				}
				else{
					alert(response.message);
				}
			});			
		}
			
	};
	
	$scope.setAplicacionesListaList = function(aplicaciones)  {
		$scope.AplicacionesList = aplicaciones;
	};
	
	$scope.cargaCombo1 = function()
	{
		DemoService.cargaCombo1().then(function(response) {
            	var codigoRespuesta = response.response;
				var cuerpoRespuesta = response.message;
				if(codigoRespuesta == "0"){					
					$scope.setListaParaComboList(JSON.parse(response.respuesta));	
				}
				else{
					alert(response.message);
				}
			});			
			
	};
	

	$scope.setListaParaComboList = function(listaParaCombo)  {
		$scope.ListaparaComboList = listaParaCombo;
	};	

    $scope.Imprimir = function(){
    	if($scope.AplicacionesList.length > 0){
	    	window.location.href = "/FondosMutuosClientWeb/DemoServlet?action=imprimir&valor_caja_texto1="+$scope.datosPagina.nombre
	    	+"&listaString="+JSON.stringify($scope.AplicacionesList);
	    	alert("Se imprimi\u00f3 correctamente el archivo.");
    	} else {
    		alert("No se han generado resultados para Imprimir...");
    	}
    };
    $scope.exportarXLS = function(){
    	if($scope.AplicacionesList.length > 0){
	    	window.location.href = "/FondosMutuosClientWeb/DemoServlet?action=exportaexcel&valor_caja_texto1="+$scope.datosPagina.nombre;
	    	alert("Se export\u00f3 correctamente el archivo.");
    	} else {
    		alert("No se han generado resultados para Exportar...");
    	}
    };

    $scope.exportarTXT = function(){
    	if($scope.AplicacionesList.length > 0){
	    	window.location.href = "/FondosMutuosClientWeb/DemoServlet?action=exportatxt&valor_caja_texto1="+$scope.datosPagina.nombre;
	    	alert("Se export\u00f3 correctamente el archivo.");
    	} else {
    		alert("No se han generado resultados para Exportar...");
    	}
    };
    
    $scope.seleccionarRegistro = function(valor_seleccionado){
    	alert("Valor seleccionado de la grilla: << " + valor_seleccionado + " >>");
    };
    
    $scope.eventoCambio = function(){
    	if($scope.datosPagina.cboDemo!==null){
    		alert("Valor de combo seleccionado: << " + $scope.datosPagina.cboDemo._abreviatura + " >>");
    	}
    };
    
    function paseDeDatos(){
    	sharedDataService.addItem("tipoDocumento","dni");
		sharedDataService.addObject("lista", $scope.ListaparaComboList);
		
		var dato = sharedDataService.getItem("tipoDocumento");		
		var listaObjeto=sharedDataService.getObject("lista");
		
		alert(dato);
		alert(JSON.stringify(listaObjeto));
    }
    */
    	
});

angular.element(document).ready(function()
{
	//$(".wrapper-body").width(750);
});