package com.zensar.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zensar.dao.UserDao;

import com.zensar.model.Users;
@Service
public class UserServiceImpl implements UserService {
   
	@Autowired
	 UserDao userDao;
	
	@Override
	public Users createUser(Users newUser) {
		Optional<Users> findUserById = userDao.findById(newUser.getUserId());
		return userDao.save(newUser); 
	}
	@Override
	public Iterable<Users> getAllUsers() {
		// TODO Auto-generated method stub
		return userDao.findAll();
	}
	@Override
	public Users updateUser(Users user) {
		Optional<Users> findUserById = userDao.findById(user.getUserId());
		
		return	userDao.save(user);
	
	}
	@Override
	public Users redirectbooking(Users user) {
    Optional<Users> findUserById = userDao.findById(user.getUserId());
		
		return	userDao.save(user);
	}

	}
	