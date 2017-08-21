package com.mgl.dao.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.mgl.bean.UsuarioBean;
import com.mgl.dao.DBConnection;
import com.mgl.dao.UsuarioDao;

public class UsuarioDaoImpl implements UsuarioDao{

	@Override
	public UsuarioBean validarCredenciales(UsuarioBean usuarioBean) {
		//Aqui se hace select a la tabla user para validar si existe el usuario logeado
		try {
            Connection cn = new DBConnection().getConnection();
            PreparedStatement ps=cn.prepareStatement("");
            StringBuilder sb=new StringBuilder("");
            sb.append("Select id from user where name='");
            sb.append(usuarioBean.getName());
            sb.append("' and password = '");
            sb.append(usuarioBean.getPassword());
            sb.append("'");
            ResultSet rs= ps.executeQuery(sb.toString());
            
            if(rs.next())
                usuarioBean.setId(rs.getString("id"));
        } catch (Exception ex) {
            ex.printStackTrace();
            System.out.println("Error al hacer select a la tabla Usuario");
        }
        return usuarioBean;
	}

}
