export default function searchCardAction(cardName) {
    return {
        type: 'SEARCH_CARD',
        payload: cardName,
    }
}