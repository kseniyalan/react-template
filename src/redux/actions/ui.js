//Error, Success, Warning Messages
export const SHOW_ERROR_MSG = "Show error message";
export const HIDE_ERROR_MSG = "Hide error message";

export const SHOW_SUCCESS_MSG = "Show success message";
export const HIDE_SUCCESS_MSG = "Hide success message";

export const HIDE_WARNING_MSG = "Hide warning message";

//Cancel something modal window
export const OPEN_CANCEL_MODAL = "Open cancel modal";
export const CLOSE_CANCEL_MODAL ="Close cancel modal";

/* ************************************* */
//Error, Success, Warning Messages
export const showErrorMessage = text => ({ 
  type: SHOW_ERROR_MSG,
  payload: {
    text,
  }
});

export const hideErrorMessage = () => ({
  type: HIDE_ERROR_MSG,
});

export const showSuccessMessage = text => ({
  type: SHOW_SUCCESS_MSG,
  payload: {
    text,
  }
});

export const hideSuccessMessage = () => ({
  type: HIDE_SUCCESS_MSG,
});

export const hideWarningMessage = () => ({
  type: HIDE_WARNING_MSG,
});

//Cancel something modal window
export const openCancelModal = () => ({
  type: OPEN_CANCEL_MODAL,
});

export const closeCancelModal = () => ({
  type: CLOSE_CANCEL_MODAL,
});