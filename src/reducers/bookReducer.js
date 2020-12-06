export const bookData = (state = {}, action) => {
  switch (action.type) {
    case 'GET_BOOK':
      return { allBooks: action.payload, filtered: action.payload };
    case 'ADD_BOOK':
      state.filtered.data.items.push(action.data);

      return {
        ...state,
        filtered: state.filtered,
      };
    case 'FILTER_BOOKS':
      return {
        ...state,
        filtered: {
          data: {
            items: state.allBooks.data.items.filter((book) => {
              const regex = new RegExp(`${action.payload}`, 'gi');
              return (
                book.volumeInfo.title.match(regex) ||
                book.volumeInfo.publisher.match(regex) ||
                book.volumeInfo.authors[0].match(regex)
              );
            }),
          },
        },
      };
    case 'CLEAR_FILTER':
      return {
        ...state,
        filtered: state.allBooks,
      };
    default:
      return state;
  }
};

export default bookData;
