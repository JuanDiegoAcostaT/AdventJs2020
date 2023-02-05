import { wrapping } from "./challenge"


const gifts: string[] = ['cat', 'game', 'socks']
const giftsSolved: string[] = [
    "*****\n*cat*\n*****",
    "******\n*game*\n******",
    "*******\n*socks*\n*******"
]

const example = wrapping(gifts)
const example2 = wrapping([])


describe('wrapping function', (): void => {
    it('should return an array', (): void => {
        expect(Array.isArray(example)).toBe(true);
    })
    it('should be equal to giftsSolved', (): void => {
        expect(example).toEqual(giftsSolved);
    })
    it('should return an empty arry if gifts are empty', (): void => {
        expect(example2).toEqual([]);
    })
})
