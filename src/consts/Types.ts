export interface UserType{
    id:number,
    img:string,
    username:string,
    email:string,
    phone:number,
    createdAt:Date,
    isAdmin:boolean,
    isActive:boolean,
    address:string
}


export interface ProductsType{
    id:number,
    title:string,
    description:string,
    img:string,
    price:number,
    createdAt:Date,
    stock:number,
    isActive:boolean,
    color:string,
    size:string
}
export interface productFormErrorType{
    error:{
      username:{
        _errors:string[]
      },
      email:{
        _errors:string[]
      },
      password:{
        _errors:string[]
      },
      phone:{
        _errors:string[]
      },
      address:{
        _errors:string[]
      },
      isAdmin:{
        _errors:string[]
      },
      isActive:{
        _errors:string[]
      }
    }
  }