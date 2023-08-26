export const initialState = {
    myLists: [],
}

export const My_list_reducers = (state, action) => {


    const { type, payload } = action;

    if (type === 'add_list') {
        return {
            ...state,
            myLists: payload.myLists
        }
    } else if (type === 'remove_list') {

        return {
            ...state,
            myLists: payload.myLists
        }

    } else {
        console.log("type not founded");
    }

}