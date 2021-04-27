export const myPeopleReducer = (state, action) => 
{
    if(action.type == 'chomp') {
        return state.map(person => {
          if(person.name == action.payload) {
            person.alive = false;
          }
          return person;
        })
      }
      if(action.type == 'revive') {
        return state.map(person => {
          if(person.name == action.payload) {
            person.alive = true;
          }
          return person;
        })
      }
}