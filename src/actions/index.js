import axios from "axios";

export const GET_USER ="GET_USER"
export const UPDATE_USER ="UPDATE_USER"
export const SAVE_USER ="SAVE_USER"
export const CLEAR_USER="CLEAR_USER"
export const GET_PLANTS ='GET_PLANTS'
export const GET_PLANT_TYPE ='GET_PLANT_TYPE'
export const GET_PLANT_BY_NAME ='GET_PLANT_BY_NAME'


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

export const getPlants=()=>{
	const plants =axios.get("localhost:5000/plants")
	return{
		type: "GET_PLANTS",
		payload: plants
	}
}

export const getPlantType=(type)=>{
	const plants =axios.get("")
	return{
		type: "GET_PLANT_TYPE",
		payload: plants
	}
}
export const getPlant=(name)=>{
	const plant =axios.get("")
	return{
		type: "GET_PLANT_BY_NAME",
		payload: plant
	}
}
