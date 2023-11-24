const reducer=(state=[],action)=>{
    if(action.type==='Add_ToDo'){
        state.push(...action.payload)

        return state
    }
    else if(action.type==='Edit_ToDO'){
        state.forEach(item => {
            if(item.ID ===action.payload.id){
                item.task = action.payload.task;
                item.status=action.payload.status;
            }
        })
        return state;
    }
    else if(action.type==='Delete_ToDO'){
        state=state.filter(element=>element.ID!==action.payload)
        return state;
    }
    else{
        return state
    }
}
export default reducer