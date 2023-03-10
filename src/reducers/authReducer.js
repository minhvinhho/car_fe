const initState = {
    logged: null,
    host_info: {},
    carsImagesBaseURL: 'https://ssctestlaravelcode_be.dev/images/cars/'
}
const authReducer = (state = initState, action) => {

    if (action.type === 'INITIALIZE_HOST_INFO') {
        if (action.host_info)
            return {
                ...state,
                logged: true,
                host_info: action.host_info
            }
    }
    if (action.type === 'LOGIN') {
        return {
            ...state,
            logged: true,
        }
    }
    if (action.type === 'LOGOUT') {
        return {
            ...state,
            logged: false,
        }
    }
    return state;
}
export default authReducer;