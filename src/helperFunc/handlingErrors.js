export const handleErrors = (err,t) => {
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
    // console.log(err, 'haj');
    // if(err.message===t('user_not_found')){
    //   error.bigError=t('user_not_found')
    // }
    // if(err.message===t('wrong_username_or_password')){
    //   error.bigError=t('wrong_username_or_password')
    // }
    if(err.code===11000 || err.message==='already in use'){
      if(err?.keyValue?.username){
        error.username._errors.push(`Username '${err?.keyValue?.username}' already exists.`);
      }
      if(err?.keyValue?.email){
        error.email._errors.push(`Email '${err?.keyValue?.email}' already exists.`) 
      }
    }
    if (err?.message.includes('User validation failed')) {
      Object.values(err?.errors).forEach(({properties}) => {
        error[properties.path]._errors.push(properties.message)
      });
    }
    return error;
  };
  