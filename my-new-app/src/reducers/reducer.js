const initialState = {
    cards: [
        {
            id: 1,
            year: 1996,
            title: 'Batman',
            imageUrl: '../img/batman.jpg',
            imdbID: '2387hg8',
            type: 'move'
        },
        {
            id: 2,
            year: 2000,
            title: 'Catwoman',
            imageUrl: '../img/catwoman.jpg',
            imdbID: '2487hg9',
            type: 'move'
        },
        {
            id: 3,
            year: 1996,
            title: 'Batman',
            imageUrl: '../img/batman.jpg',
            imdbID: '2387hg8',
            type: 'move'
        },
        {
            id: 4,
            year: 2000,
            title: 'Catwoman',
            imageUrl: '../img/catwoman.jpg',
            imdbID: '2487hg9',
            gender: 'move'
        },
        {
            id: 5,
            year: 1996,
            title: 'Batman',
            imageUrl: '../img/batman.jpg',
            imdbID: '2387hg8',
            type: 'move'
        },
        {
            id: 6,
            year: 2000,
            title: 'Catwoman',
            imageUrl: '../img/catwoman.jpg',
            imdbID: '2487hg9',
            gender: 'move'
        },
        {
            id: 7,
            year: 1996,
            title: 'Batman',
            imageUrl: '../img/batman.jpg',
            imdbID: '2387hg8',
            type: 'move'
        },
        {
            id: 8,
            year: 2000,
            title: 'Catwoman',
            imageUrl: '../img/catwoman.jpg',
            imdbID: '2487hg9',
            type: 'move'
        }
    ],
    searchValue: '',
};

const cardsReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOAD_INITIAL_CARDS': {
            return {
                cards: state.cards,
                searchValue: state.searchValue
            }
        }
        case 'ADD_CARD': {
            return {
                cards: [...state.cards, action.payload],
                searchValue: state.searchValue
            };
        }
        case 'DELETE_CARD': {
            return {
                cards: state.cards.filter(card => action.payload !== card.id),
                searchValue: state.searchValue,
            };
        }
        case 'SEARCH_CARD': {
            return {
                cards: state.cards,
                searchValue: action.payload,
            }
        }
        default: { return state; }        
    }
}

export default cardsReducer;