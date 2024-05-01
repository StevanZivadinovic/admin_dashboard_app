export interface UserType{
    _id: string | number | readonly string[] | undefined
    id:number,
    img:string,
    username:string,
    email:string,
    phone:number,
    createdAt:Date,
    isAdmin:boolean,
    isActive:boolean,
    address:string,
    password:string
}


export interface ProductsType{
    _id: string | number | readonly string[] | undefined
    id:number,
    title:string,
    desc:string,
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