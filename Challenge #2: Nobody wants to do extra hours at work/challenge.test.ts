import { countHours } from "./challenge";

const year = 1985
const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']

const dateNumber = countHours(year, holidays)
const totalHours = 10


describe('countHours function', (): void => {
    it('should return a number', (): void => {
        expect(typeof dateNumber).toBe('number')
    })
    it('should be equal to totalHours', (): void => {
            expect(dateNumber).toEqual(totalHours);
    })
    it('should return 0 in case no more than 1 date', (): void => {
        expect(countHours(2022, ['01/01'])).toEqual(0);
})
})
