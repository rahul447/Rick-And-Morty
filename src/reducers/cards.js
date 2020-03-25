import { initialState } from "./initState"

export default function (state = initialState, action) {
  switch (action.type) {

    case SETUSERS:
      let users = [...action.payload];
      return {
        ...state,
        users,
        searchedUers: users
      }

    case SETSEARCHEDUSERS: 
      const matchedUsers = state.users.filter((user) => user.includes(`${action.payload.target.value}`));
      return {
        ...state,
        searchedUers: [...matchedUsers]
      }
    default:
      return state
  }
}

