export function distributeGifts(packOfGifts: string[], reindeers: string[]): number {
    const getLength = (array : string[]) : number => array.join('').length
    return Math.floor(getLength(reindeers) * 2 / getLength(packOfGifts))
}