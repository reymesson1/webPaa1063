export class Master {
  constructor(
    public _id ?: number,
    public category ?: string,
    public category2 ?: string,
    public date ?: string,
    public description ?: string,
    public location ?: string,    
    public nameImages ?: Array<any>,
    public pathImages ?: Array<any>,  
    public place ?: string,
    public status ?: boolean,
    public title ?: string,
    public fullname ?: string,    
    public quantity ?: string,    
    public isLinear ?: string,    
    public order ?: number,    
  ) { }
 }