package com.zensar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zensar.model.Registration;
import com.zensar.service.RegistrationServiceImpl;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class RegistrationController {

	@Autowired
	private RegistrationServiceImpl service;

	@PostMapping("/register")
	@CrossOrigin(origins="http://localhost:4200")
	public Registration registerUser(@RequestBody Registration user) throws Exception {

		String tempemailId = user.getEmailId();
		if (tempemailId != null && !"".equals(tempemailId)) {
			Registration userobj = service.fetchUserByEmailId(tempemailId);
			if (userobj != null) {
				throw new Exception("user with " + tempemailId + " is already exist");
			}

		}

		Registration userObj = null;
		userObj = service.saveUser(user);
		return userObj;

	}
	
	@PostMapping("/login")
	@CrossOrigin(origins="http://localhost:4200")
	public Registration loginUser(@RequestBody Registration user) throws Exception {
		String tempEmailId=user.getEmailId();
		String tempPass = user.getPassword();
		Registration userObj = null;
		if(tempEmailId !=null && tempPass !=null) {
			userObj=service.fetchUserByEmailIdAndPassword(tempEmailId, tempPass);
		}
		if(userObj ==null) {
		throw new Exception("Wrong Credential")	;
		}
		return userObj;
		}

}
