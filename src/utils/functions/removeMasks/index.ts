export const removeMasks = (susCard: string) => {
    return susCard.replaceAll(/\D/g, '')
}