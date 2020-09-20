export default function addCardAction(card) {
    return {
        type: 'ADD_CARD',
        payload: card,
    }
}