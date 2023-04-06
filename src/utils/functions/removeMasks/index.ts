export const removeMasks = (susCard: string | undefined) => {
    if (!susCard) return;

    return susCard.replaceAll(/\D/g, '')
}