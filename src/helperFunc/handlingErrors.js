//users errors handling
export const handleUsersErrors = (err,t) => {
    let error={
      username:{
        _errors:[]
      },
      email:{
        _errors:[]
      },
      password:{
        _errors:[]
      },
      phone:{
        _errors:[]
      },
      address:{
        _errors:[]
      },
      isAdmin:{
        _errors:[]
      },
      isActive:{
        _errors:[]
      }
    }
    if(err.code===11000 || err.message==='already in use'){
      if(err?.keyValue?.username){
        error.username._errors.push(`Username '${err?.keyValue?.username}' already exists.`);
      }
      if(err?.keyValue?.email){
        error.email._errors.push(`Email '${err?.keyValue?.email}' already exists.`) 
      }
    }
    if (err?.message.includes('User validation failed')) {
      Object.values(err?.errors)?.forEach(({properties}) => {
        error[properties.path]?._errors.push(properties.message)
      });
    }
    return error;
  };

  // export const handleZodErrors = (err)=>{
  //   console.log(err);
  //   let error={
  //     username:[],
  //     email:[],
  //     password:[]
  //   }
  //   console.log(Object.values(err)[1])
  //   Object.values(err)[1]?._errors?.forEach(a=>{
  //     console.log(a, a.includes('Password'))
  //     if(a.includes('Password')){
  //       error.password.push(a);
  //     }
  //     else if(a.includes('Email')){
  //       error.email.push(a)
  //     }
  //     else if(a.includes('Username')){
  //       error.username.push(a)
  //     }
  //   })
  //     return error;
  // }
  
//product errors handling
  export const handleProductsErrors = (err,t) => {
    let error={
      title:{
        _errors:[]
      },
      desc:{
        _errors:[]
      },
      price:{
        _errors:[]
      },
      stock:{
        _errors:[]
      },
      img:{
        _errors:[]
      },
      color:{
        _errors:[]
      },
      size:{
        _errors:[]
      }
    }
    
    if(err.code===11000 || err.message==='already in use'){
      if(err?.keyValue?.title){
        error.title._errors.push(`Title '${err?.keyValue?.title}' already exists.`);
      }
   
    }
    if (err?.message.includes('User validation failed')) {
      Object.values(err?.errors).forEach(({properties}) => {
        error[properties.path]._errors.push(properties.message)
      });
    }
    return error;
  };