export const Add_Todo=(task)=>{
    return (dispatch)=>{
        dispatch({type:'Add_ToDo',payload:task})
    }
}
export const Edit_Todo=(id,task,status)=>{
    return (dispatch)=>{
        dispatch({
            type:'Edit_ToDO',
            payload:{id,task,status}
        })
    }
}
export const Delete_Todo=(id)=>{
    return (dispatch)=>{
        dispatch({
            type:'Delete_ToDO',
            payload:id
        })
    }
}