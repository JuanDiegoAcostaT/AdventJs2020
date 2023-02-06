export function countHours(year: number, holidays: string[]): number {
    return holidays.reduce(
        (acc: number, holy: string): number => {
            let value: number = 2
            const randomDate: Date = new Date(
                `${holy.replace('/', '-')}-${year}`
            )
            const ramdonNumber : number = randomDate.getDay()
            if (ramdonNumber == 0 ||
                ramdonNumber == 6) value = 0;
            return acc + value
        }, 0)
}
