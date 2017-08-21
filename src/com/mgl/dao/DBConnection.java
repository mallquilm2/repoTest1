package com.mgl.dao;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {
	
	private Connection connection = null;
	
	public DBConnection(){
		
		try{
	        //obtenemos el driver de para mysql
	        Class.forName("com.mysql.jdbc.Driver").newInstance();
	        
	        //obtenemos la conexión
	        connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/financialdb","root","mysql");
	       
	        if(connection != null){
	            System.out.println("Connection Ok!");
	        }
	    }catch(Exception ex){
	        System.out.println(ex.getMessage());
	    }
	}

	public Connection getConnection() {
		return connection;
	}

	public void setConnection(Connection connection) {
		this.connection = connection;
	}
	
	
}
