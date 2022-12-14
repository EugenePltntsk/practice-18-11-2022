export const localKey = "tasks";

export const getDataFromLS = () =>  {
    const initialState = JSON.parse(localStorage.getItem(localKey));
    return initialState ? initialState : [];
  }