package com.mgl.servlet;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;
import com.mgl.bean.UsuarioBean;
import com.mgl.service.UsuarioService;

/**
 * Servlet implementation class InitServlet
 */
//@WebServlet(name = "InitServlet", description = "First class when begin us application", urlPatterns = { "/InitServlet" })
public class InitServlet extends HttpServlet {
	
	private static final long serialVersionUID = 1L;

    /**
     * Default constructor. 
     */
    public InitServlet() {
    	super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		processRequest(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		processRequest(request, response);
	}

	private void processRequest(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException{
		// TODO Auto-generated method stub
		String action = request.getParameter("action");
		Map<String, String> _mapRespuesta = new HashMap<String, String>();
		if(action.equals("validarCredenciales")){
			validarCredenciales(_mapRespuesta,request,response);
		}
		
		//response.sendRedirect(request.getContextPath() + "/index.html");
	}

	private void validarCredenciales(Map<String, String> _mapRespuesta, HttpServletRequest request, HttpServletResponse response) throws IOException {
		log("Ingresó a validarCredenciales");
		String user = request.getParameter("user");
		String password = request.getParameter("password");
		
		UsuarioBean usuario = new UsuarioBean();
		usuario.setName(user);
		usuario.setPassword(password);
		
		UsuarioService usuarioService = new UsuarioService();
		UsuarioBean usuarioRespuesta = new UsuarioBean();
		usuarioRespuesta = usuarioService.validarCredenciales(usuario);
		
		String json = new Gson().toJson(usuarioRespuesta);
        response.setContentType("application/json");
        response.getWriter().write(json);
		
	}

	
}
