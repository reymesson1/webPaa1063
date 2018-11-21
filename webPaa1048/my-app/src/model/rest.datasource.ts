import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SELECT_ITEM_HEIGHT_EM } from '@angular/material';

@Injectable()
export class RestSourceData{

constructor(private http: HttpClient, private route: Router){}

    schedules : any = []  
    activities : any = []  
    words : any = []  
    fields : any = []  
    master : any = []  
    TOKEN_KEY = 'token'
    authPath = 'http://localhost:4201'
    userData : any = []
    updating

    getUsers() {      

        this.http.get<any>(this.authPath +'/userdata/'+this.token).subscribe(res =>{
            this.userData = res;
        })        
    }

    setUsers(userData) {      
        this.userData["token"] = this.token;
        this.http.post<any>(this.authPath + '/userdata', userData).subscribe(res =>{ 
                
        })    
    }

    getFields() {      
        this.http.get<any>(this.authPath +'/fields').subscribe(res =>{           
            this.fields = res;
        })        
    }
    addField(fieldData) {
        this.fields.push(fieldData);
        this.http.post<any>(this.authPath + '/field', fieldData).subscribe(res =>{ 
                        
        })    
    }
    sendUserRegistration(regData) {
        this.http.post<any>(this.authPath + '/register', regData).subscribe(res =>{ 

            //localStorage.setItem(this.TOKEN_KEY, res.token)          
        })    
    }

    get token(){
        return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated(){
        return !!localStorage.getItem(this.TOKEN_KEY)
    }

    logout(){
        localStorage.removeItem(this.TOKEN_KEY);
        this.route.navigateByUrl('/login');
    }

    loginUser(loginData) {
    this.http.post<any>(this.authPath + '/login', loginData).subscribe(res =>{
        
        localStorage.setItem(this.TOKEN_KEY, res.token)
        if(this.isAuthenticated){
            this.route.navigateByUrl("/")
        }else{
            console.log("Registration Failed")
        }   
    })
    }

    removeField(i){        
        this.http.post<any>(this.authPath + '/removefield', {"_id":i}).subscribe(res =>{
            window.location.reload();
        })
        
    }

    updateField(i){        
        this.http.post<any>(this.authPath + '/updatefield', i).subscribe(res =>{
            window.location.reload();
        })
        
    }

    getMaster() {      
        this.http.get<any>(this.authPath +'/master').subscribe(res =>{           
            this.master = res;
        })        
    }
    
    addMaster(fieldData) {
        this.master.push(fieldData);
        fieldData["token"]=this.token
        this.http.post<any>(this.authPath + '/master', fieldData).subscribe(res =>{ 
           this.updating = res;           
        })  
    }

    addMasterPicture(fieldData) {        
        fieldData["token"]=this.token
        fieldData["_id"] = this.updating._id
        this.http.post<any>(this.authPath + '/masterpicture', fieldData).subscribe(res =>{ 
                    
        })  
    }

    setMasterStatus(fieldData) {                
        this.http.post<any>(this.authPath + '/masterstatus', fieldData).subscribe(res =>{ 
                    
        })  
    }

    setMasterEdit(fieldData) {                
        this.http.post<any>(this.authPath + '/masteredit', fieldData).subscribe(res =>{                               
        })  
        window.location.reload();    
    }

    setMasterRemove(fieldData) {                
        this.http.post<any>(this.authPath + '/masterremove', fieldData).subscribe(res =>{ 
           window.location.reload();         
        })  
    }

    
    getWord(){
        this.http.get<any>(this.authPath +'/wordlist').subscribe(res =>{
            this.words = res;
        })
    }

    addWordList(fieldData){
        this.http.post<any>(this.authPath + '/addwordlist', fieldData).subscribe(res =>{ 
            window.location.reload();         
         })
    }

    removeWord(i){
        this.http.post<any>(this.authPath + '/removewordlist', {"_id":i}).subscribe(res =>{ 
            window.location.reload();         
         })
    }

    getActivities(){
        this.http.get<any>(this.authPath +'/activities').subscribe(res =>{
            this.activities = res;
        })
    }

    getSchedules(){
        this.http.get<any>(this.authPath +'/schedules').subscribe(res =>{
            this.schedules = res;
        })
    }

    setSchedules(data){
        this.http.post<any>(this.authPath + '/editschedules', data).subscribe(res =>{ 
            window.location.reload()
        })
    }

    resetAll(){
        this.http.get<any>(this.authPath +'/resetschedules').subscribe(res =>{
            this.schedules = res;
        })
    }

    resetAllWithValue(){
        this.http.get<any>(this.authPath +'/resetscheduleswithvalue').subscribe(res =>{
            this.schedules = res;
        })
    }

    resetNowAll(data){
        this.http.post<any>(this.authPath + '/resetnowschedules', data).subscribe(res =>{ 
            window.location.reload()
        })
    }

    addSchedules(data){
        this.http.post<any>(this.authPath + '/addschedules', data).subscribe(res =>{ 
            window.location.reload()
        })
    }
    removeSchedules(data){        
        this.http.post<any>(this.authPath + '/removeschedules', data[0]).subscribe(res =>{ 
            window.location.reload()
        })
    }
    runScript(data){        
        this.http.post<any>(this.authPath + '/runscript', data).subscribe(res =>{ 
            
        })
    }
}