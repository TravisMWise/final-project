const reducer = (posts = [], action) => {
    switch (action.type) {
        case 'UPDATE':
            return posts;
        case 'FETCH_ALL':
            return posts;
        case 'CREATE':
            return posts;
        default:
            return posts;
    }
}

export default reducer;