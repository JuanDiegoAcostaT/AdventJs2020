import { fitsInOneBox, IBox } from "./challenge"


const boxes = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }
  ]
const boxes2 = [
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
]


 


    describe('fits in one box', (): void => {
        it('should return a boolean', (): void => {
            expect(typeof fitsInOneBox(boxes)).toBe('boolean')
        })

        it('should be equal to expectedValue', (): void => {
            expect(fitsInOneBox(boxes)).toEqual(true);
        })
        it("should return false if boxes does not fit", (): void => {
            expect(fitsInOneBox(boxes2)).toEqual(false);
        })

    })
