
import { ActionTypes } from "../constants/actionTypes";
const initialState = {
    users: [],
    posts: [],
    loading: false,
};

export const chatReducer = (state = initialState, { type, payload }) => {

    switch (type) {
        case ActionTypes.SET_USERS:

            // console.log(payload);

            return {
                ...state,
                users: payload,
                loading: false,


            };


        case ActionTypes.SET_LOADİNG:
            return {
                ...state,

                loading: true
            };

        case ActionTypes.SET_POSTS:
            return {
                ...state,
                posts: payload,
            };

        default:
            return state;
    }

};