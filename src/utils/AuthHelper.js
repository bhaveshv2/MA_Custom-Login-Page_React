import { EventEmitter } from 'events';
import { isTokenExpired } from './jwtDecoder';
import auth0 from 'auth0-js';
import jwt_decode from 'jwt-decode';

class AuthHelper extends EventEmitter{
    constructor(domain,clientId){
        super();
        this.auth0 = new auth0.WebAuth({
            clientID:clientId,
            domain:domain,
            responseType:'token id_token',
            redirectUri:`${window.location.origin}`
        })
    }

    setToken(accessToken,idToken){
        localStorage.setItem('access_token',accessToken);
        localStorage.setItem('id_token',idToken);
    }

    setProfile(id_token){
        const decoded =jwt_decode(id_token);
        localStorage.setItem('profile',JSON.stringify(decoded));
    }

    getProfile(){
        const profile = localStorage.getItem('profile');
        return profile?JSON.parse(localStorage.profile):{};
    }

    getToken(){
        return localStorage.getItem('id_token');
    }

    login = (username,password)=>{
        this.auth0.client.login({
            realm:'Username-Password-Authentication',
            username,
            password
        },(err,authResult)=>{
            if(err){
                alert("Error:Login - "+err.description)
                return;
            }

            if(authResult && authResult.idToken && authResult.accessToken){
                this.setToken(authResult.accessToken, authResult.idToken);
                this.setProfile(authResult.idToken);
                window.location = window.location.origin;
            }
        })
    }

    signup = (email,password,confirmPassword)=>{
        if(password === confirmPassword){
            this.auth0.signup({
                connection:'Username-Password-Authentication',
                email,
                password,
            },function(err){
                if(err){
                    console.log('Error:Singup ',err);
                }
            })
        }
    }

    parseHash(hash){
        this.auth0.parseHash({hash},(err,authResult)=>{
            if(err){
                console.log('Error:parsing hash ',err);
            }
            if(authResult && authResult.accessToken && authResult.idToken){
                this.setToken(authResult.accessToken, authResult.idToken);
                this.auth0.client.userInfo(authResult.accessToken, (err,profile)=>{
                    if(err){
                        console.log('Error loading the profile ',err);
                    }else{
                        this.setProfile(authResult.idToken);
                    }
                })
            }
            else if(authResult && authResult.error){
                alert('Error: '+ authResult.error)
            }
        })
    }

    loggedIn(){
        const token = this.getToken();
        return !!token && !isTokenExpired(token);
    }

    logout(){
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
    }
}

export default AuthHelper;