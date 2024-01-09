import { v4 as uuidv4 } from "uuid";

export const state = {
  signupInformation: {
    id: "",
    emailID: "",
  },
};

export const signup = function (newSignup) {
  try {
    const emailID = newSignup.emailID;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailID) {
      if (emailID.match(regex)) {
        const signupInfo = {
          id: uuidv4(),
          email_ID: newSignup.emailID,
        };
        const signupJSON = JSON.stringify(signupInfo);
        state.signupInformation.id = uuidv4();
        state.signupInformation.emailID = newSignup.emailID;
      } else {
        throw new Error("Please Enter a Valid Email Address.");
      }
    } else {
      throw new Error("Please Enter a Valid Email Address.");
    }
  } catch (error) {
    throw error;
  }
};
