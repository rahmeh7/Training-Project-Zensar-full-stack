package com.zensar.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.zensar.model.Users;

import com.zensar.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")

public class UserController {
	@Autowired
	private UserService userService;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/user")
	//@ExceptionHandler(RecordAlreadyPresentException.class)
	public void addUser(@RequestBody Users newUser) {
		System.out.println("Inside addUser method..");
		userService.createUser(newUser);
	}
	
	 @GetMapping("/user")
	    public Iterable<Users> getAllUsers(){
	    	System.out.println("inside product");
	    	return userService.getAllUsers();
	    }
	 @PatchMapping("/user")
	 public void modifybooking(@RequestBody Users user) {
		 System.out.println("inside modify booking");
		 userService.updateUser(user);
	 }
	 @PatchMapping("/book")
	 public void redirectbooking(@RequestBody Users user) {
		 System.out.println("inside modify booking");
		 userService.updateUser(user);
	 }
	 


}
