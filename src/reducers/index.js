import { CREATE_TASK, DELETE_TASK, EDIT_TASK } from "../actions/types";

const initialState = [
    // {
    //     id: 1,
    //     title: 'Learn ReactJS',
    //     description: 'Have a Look at ReactJS',
    //     status: 'In Progress'
    // },
    // {
    //     id: 2,
    //     title: 'Learn Redux',
    //     description: 'Have a Look at Redux',
    //     status: 'Completed'
    // },
    // {
    //     id: 3,
    //     title: 'Learn MERN',
    //     description: 'Have a Look at MERN',
    //     status: 'Unstarted'
    // }
]

// tasks is a reducer. we have created a reducer which takes state and action as a 2 arguments.
const tasks = (state = { tasks: initialState }, action) => {

    /*****************************************************
     *              IF ELSE version
     *********************************************************/
    // if (action.type === EDIT_TASK) {
    //     const {payload} = action;
    //     return {
    //         tasks: state.tasks.map((task) => {
    //             if (task.id === payload.id) {
    //                 return Object.assign({}, task, payload.params);
    //             }
    //             return task
    //         }),
    //     }

    // }

    /*****************************************************
 *              SWITCH version
 *********************************************************/
    const { payload } = action;
    switch (action.type) {
        case EDIT_TASK: {
            return {
                tasks: state.tasks.map((task) => {
                    if (task.id === payload.id) {
                        return Object.assign({}, task, payload.params);
                    }
                    return task
                }),
            }
        }
        case CREATE_TASK: {
            return{
                tasks: state.tasks.concat(action.payload),
            }
        }
        case DELETE_TASK:{
            return{
                tasks: state.tasks.filter(task => task.id !== action.id)
            }
        }
    
    default: 
    return state;
};
}


export default tasks