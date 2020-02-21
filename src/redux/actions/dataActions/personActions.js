import * as types from "../actionTypes";
import * as PersonApi from "../../../api/PersonApi";
import { beginApiCall, apiCallError } from "../apiStatusActions";

export function loadPeopleDataSuccess(people) {
  return { type: types.LOAD_PEOPLE_DATA_SUCCESS, people };
}

export function loadPeopleData() {
  return dispatch => {
    dispatch(beginApiCall());
    return PersonApi.findAllPeople()
      .then(data => {
        dispatch(loadPeopleDataSuccess(data));
        return data;
      })
      .catch(error => {
        dispatch(apiCallError(error));
        throw error;
      });
  };
}
