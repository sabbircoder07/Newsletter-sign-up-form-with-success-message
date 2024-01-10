import * as model from "./model.js";
import * as confi from "./confi.js";
import signupView from "./view/signupView.js";

const controlSignup = function (newSignup) {
  try {
    model.signup(newSignup);
    signupView.renderEmailAddress(model.state.signupInformation.emailID);
    signupView._clearErrorMessage();
    signupView.showMessageContainer();
    setTimeout(function () {
      signupView.hideMessageContainer();
    }, confi.TIMEOUT_SECOND * 1000);
    signupView.startInterVal();
  } catch (error) {
    signupView.renderError(error.message);
    setTimeout(function () {
      signupView._clearErrorMessage();
    }, confi.MESSAGE_CLOSE_SEC * 1000);
  }
};

const controlDismissMessage = function () {
  try {
    signupView.hideMessageContainer();
  } catch (error) {
    signupView.renderError(error.message);
  }
};

const init = function () {
  signupView.addHandlerSignup(controlSignup);
  signupView.addHandlerDismiss(controlDismissMessage);
};

init();
