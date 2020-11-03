package com.zensar.service;

import com.zensar.model.Users;

public interface UserService {
	public Users createUser(Users newUser);
	
	 public Iterable<Users> getAllUsers();
    public Users updateUser(Users user);
	public Users redirectbooking(Users user);

}
