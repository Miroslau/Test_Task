export default function deleteCardAction(card) {
    return {
        type: 'DELETE_CARD',
        payload: card,
    }
}