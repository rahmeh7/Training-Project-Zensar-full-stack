package com.zensar.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zensar.model.Registration;
import com.zensar.model.Registration;

public interface RegistrationDao  extends JpaRepository<Registration,Integer>{

	public Registration findByEmailId(String emailId);


	public Registration findByEmailIdAndPassword(String emailId, String password);

	

}
