import { distributeGifts } from "./challenge"


const packOfGifts = ["book", "doll", "ball"]
const reindeers = ["dasher", "dancer"]

const giftsLength = distributeGifts(packOfGifts, reindeers)
const expectedValue = 2


describe('distribute gifts', (): void => {
    it('should return a number', (): void => {
        expect(typeof giftsLength).toBe('number')
    })

    it('should be equal to expectedValue', (): void => {
        expect(giftsLength).toEqual(expectedValue);
    })
    it("should return 0 if reindeers can't carry any pack", (): void => {
        expect(distributeGifts(['videogames', 'console'], ['midu'])).toEqual(0);
    })

})
