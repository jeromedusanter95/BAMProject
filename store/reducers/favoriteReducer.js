const initialState = { favoriteBooks: [] }
function toggleFavorite(state = initialState, action){
  let nextState
  switch (action.type) {
    case 'TOGGLE_FAVORITE' :
    const favoriteBooksIndex = state.favoriteBooks.findIndex(item => item.primary_isbn10 == action.value.primary_isbn10)
    if (favoriteBooksIndex !== -1) {
      nextState = {
        ...state,
        favoriteBooks: state.favoriteBooks.filter((item, index) => index != favoriteBooksIndex)
      }
    } else {
      nextState = {
        ...state,
        favoriteBooks: [...state.favoriteBooks, action.value]
      }
    }
    return nextState || state
    default:
    return state
  }
}

export default toggleFavorite
