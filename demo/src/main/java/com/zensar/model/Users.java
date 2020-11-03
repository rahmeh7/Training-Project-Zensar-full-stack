package com.zensar.model;

import javax.persistence.Entity;
import javax.persistence.Id;
@Entity
public class Users {
	@Id
	private Integer userId;
	private String userName;
	private Integer userPhone;
	private String userEmail;
	private Integer Person;
	public Integer getUserId() {
		return userId;
	}
	public void setUserId(Integer userId) {
		this.userId = userId;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public Integer getUserPhone() {
		return userPhone;
	}
	public void setUserPhone(Integer userPhone) {
		this.userPhone = userPhone;
	}
	public String getUserEmail() {
		return userEmail;
	}
	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	public Integer getPerson() {
		return Person;
	}
	public void setPerson(Integer person) {
		Person = person;
	}
	
	
	

}
