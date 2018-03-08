// import axios from "axios";

export const GET_USER ="GET_USER"
export const UPDATE_USER ="UPDATE_USER"
export const SAVE_USER ="SAVE_USER"
export const CLEAR_USER="CLEAR_USER"


export const updateUser = (user)=>{
	return{
		type: "UPDATE_USER",
		payload: user
	}
}
export const clearUser = (user)=>{
	return{
		type: "CLEAR_USER",
		payload: user
	}
}

export const getUser= (regUser)=>{
	return{
		type: "GET_USER",
		payload: regUser
	}
}

export const saveUser =(regUser)=>{
	return{
		type: "SAVE_USER",
		payload: regUser
	}
}