//https://dev.to/nilanth/how-to-secure-jwt-in-a-single-page-application-cko

export function saveJWT(access_token){
	localStorage.setItem('jwToken', access_token);
}

export function getJWT(headers){
	return headers['Authorization']=localStorage.getItem('jwToken');
}

export function removeJWT(){
	try{
		localStorage.removeItem('jwToken');
	}
	catch(e){
		return false;
	}
	return true;
}

export function checkExistJWT(){
	return localStorage.getItem('jwToken') ? true:false;
}