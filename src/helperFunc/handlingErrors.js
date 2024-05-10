//users errors handling
export const handleUsersErrors = (err, t) => {
  let error = {
    username: {
      _errors: [],
    },
    email: {
      _errors: [],
    },
    password: {
      _errors: [],
    },
    phone: {
      _errors: [],
    },
    address: {
      _errors: [],
    },
    isAdmin: {
      _errors: [],
    },
    isActive: {
      _errors: [],
    },
  };
  if (err.code === 11000 || err.message === "already in use") {
    if (err?.keyValue?.username) {
      error.username._errors.push(
        `Username '${err?.keyValue?.username}' already exists.`
      );
    }
    if (err?.keyValue?.email) {
      error.email._errors.push(
        `Email '${err?.keyValue?.email}' already exists.`
      );
    }
  }
  if (err?.message.includes("User validation failed")) {
    Object.values(err?.errors)?.forEach(({ properties }) => {
      error[properties.path]?._errors.push(properties.message);
    });
  }
  return error;
};

//product errors handling
export const handleProductsErrors = (err, t) => {
  let error = {
    title: {
      _errors: [],
    },
    desc: {
      _errors: [],
    },
    price: {
      _errors: [],
    },
    stock: {
      _errors: [],
    },
    img: {
      _errors: [],
    },
    color: {
      _errors: [],
    },
    size: {
      _errors: [],
    },
  };

  if (err.code === 11000 || err.message === "already in use") {
    if (err?.keyValue?.title) {
      error.title._errors.push(
        `Title '${err?.keyValue?.title}' already exists.`
      );
    }
  }
  if (err?.message.includes("User validation failed")) {
    Object.values(err?.errors).forEach(({ properties }) => {
      error[properties.path]._errors.push(properties.message);
    });
  }
  return error;
};
