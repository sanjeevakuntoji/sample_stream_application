import streams from '../apis/stream';
import history from '../history'
import { SIGN_IN,SIGN_OUT, CREATE_STREAM, FETCH_STREAM,FETCH_STREAMS,DELETE_STREAM,EDIT_STREAM } from './types'
export const SignIn = (userId) =>{

    return {
        type:SIGN_IN,
        payload: userId
    }
}

export const SignOut = () => {
   
    return{
        type: SIGN_OUT
    }

}

export const createStream = (fromValues) => {

    return  async (dispatch,getState) => {
        const { userId } = getState().auth;
       const response = await streams.post('/streams',{...fromValues, userId});
        dispatch({type:CREATE_STREAM, payload: response.data})
        ///Do some programatic navigation to
        //get the user back to the root route
        history.push('/')
    }
}

export const fetchStreams = () => async (dispatch) => {
    const response = await streams.get('/streams');

    dispatch({type: FETCH_STREAMS , payload: response.data})
}
export const fetchStream = (id) => async (dispatch) => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({type: FETCH_STREAM , payload: response.data})
}

export const editStream = (id,fromValues) => async (dispatch) => {
    const response = await streams.patch(`/streams/${id}`, fromValues);

    dispatch({type: EDIT_STREAM , payload: response.data})
    history.push('/')
}

export const deleteStream = (id) => async (dispatch) => {
     await streams.delete(`/streams/${id}`);

    dispatch({type: DELETE_STREAM , payload: id})
    history.push('/')
}
