package com.zensar.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zensar.dao.RegistrationDao;
import com.zensar.model.Registration;


@Service
public class RegistrationServiceImpl {

	@Autowired
	private RegistrationDao repo;
	public Registration saveUser(Registration user) {	
	return	repo.save(user);
		
	}
	
	public Registration fetchUserByEmailId(String email) {
		 return repo.findByEmailId(email);
		
	}
	
	public Registration fetchUserByEmailIdAndPassword(String email, String password) {
		// TODO Auto-generated method stub
		return repo.findByEmailIdAndPassword(email,password);
	}
}
