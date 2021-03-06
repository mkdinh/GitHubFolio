import { FETCH_USER_INFO, EDIT_USER_INFO, FETCH_REPOS, EDIT_REPOS  } from "../constants/action-types";

export const fetchUserInfo = () => dispatch => {
  fetch('/api/user/data', { credentials: 'include' })
    .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_USER_INFO,
        payload: data.data
      }))
      .then("fetch user data worked")
}



// = userInfo => ({ type: EDIT_USER_INFO, payload: userInfo });

