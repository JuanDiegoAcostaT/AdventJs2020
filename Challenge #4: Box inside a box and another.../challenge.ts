export interface IBox {
    l: number;
    h: number;
    w: number
}

export function fitsInOneBox(boxes: IBox[]) : boolean {
    let isPossible : boolean = false;
    const giftBoxes =
        boxes.sort((boxA: IBox, boxB: IBox): number => {
            return boxA.l - boxB.l
        })

    const checkObjects = (index: number): void => {
        if (index == giftBoxes.length - 1) {
            isPossible = true
            return
        }
        const value1 = giftBoxes[index]
        const value2 = giftBoxes[index + 1]

        if (value1.l < value2.l &&
            value1.h < value2.h &&
            value1.w < value2.w) {
             checkObjects(index + 1)
             return;
        }
        isPossible = false
    }
    checkObjects(0)
    return isPossible
}