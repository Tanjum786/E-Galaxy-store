export const authReducer = (authState, authAction) => {
  console.log(authState);
  switch (authAction.type) {
    case "USER_DETAILS":
      return {
        ...authState,
        [authAction.name]: authAction.payload,
      };
    case "SUBMIT":
      return {
        ...authState,
        isSubmit: true,
      };
    case "EMAIL":
      return {
        ...authState,
        email: authAction.payload,
      };
    case "PASSWORD":
      return {
        ...authState,
        password: authAction.payload,
      };
    case "LOGIN_SUBMIT":
      return {
        ...authState,
        isSubmit: true,
      };
    case "GUEST-LOGIN":
      return {
        ...authState,
        email: authAction.payload.email,
        password: authAction.payload.password,
      };
    case "LOGOUT":
      return {
        ...authState,
        email: "",
        firstName: "",
        lastName: "",
        password: "",
        confirPassword: "",
        isSubmit: false,
      };

    default:
      return authState;
  }
};
