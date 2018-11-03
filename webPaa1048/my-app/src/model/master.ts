export class Master {
  constructor(
    public _id ?: number,
    public category ?: string,
    public category2 ?: string,
    public date ?: string,
    public description ?: string,
    public to ?: string,    
    public nameImages ?: Array<any>,
    public pathImages ?: Array<any>,  
    public place ?: string,
    public status ?: boolean,
    public title ?: string,
    public fullname ?: string,    
    public from ?: string,    
    public isLinear ?: string,    
    public order ?: number,    
    public header ?: string,    
    public sequence ?: number,    
    public generated ?: string,    
    public price ?: number,    
    public area ?: number,    
  ) { }
 }