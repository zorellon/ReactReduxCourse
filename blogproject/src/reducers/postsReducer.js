export default (state = [], action) => {

    switch (action.type){
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }

    // can NOT return undefined (aka no lack of return statment)
    //return state;
};