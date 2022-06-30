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
    case "ADD-ADDRESS":
      return {
        ...authState,
        addresses: authAction.payload,
      };
    case "REMOVE-ADDRESS":
      return {
        ...authState,
        addresses: authAction.payload,
      };
    case "GET-Address":
      return {
        ...authState,
        addresses: authAction.payload,
      };
    case "EDIT-ADDRESS":
      return {
        ...authState,
        addresses: authAction.payload,
      };
    case "LOGOUT":
      return {
        ...authState,
        isSubmit: false,
        email: "",
        password: "",
      };

    default:
      return authState;
  }
};
