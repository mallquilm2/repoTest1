package com.mgl.service;

import com.mgl.bean.UsuarioBean;
import com.mgl.dao.UsuarioDao;
import com.mgl.dao.impl.UsuarioDaoImpl;

public class UsuarioService {
	//devuelve un objeto UsuarioBean (devuelve el usuario logeados)
	public UsuarioBean validarCredenciales(UsuarioBean usuarioBean){
		UsuarioDao usuarioDao = new UsuarioDaoImpl();
		return usuarioDao.validarCredenciales(usuarioBean);
	}
}
