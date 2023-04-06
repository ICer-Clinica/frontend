export const removeMasks = (susCard: string | undefined): string | any => {
    if (!susCard) return;

    return susCard.replaceAll(/\D/g, '')
}