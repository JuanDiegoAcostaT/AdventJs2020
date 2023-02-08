
# Challenge #3: How many packs of gifts can Santa carry?


Santa Claus needs to review his gift boxes to make sure he can pack them all in his sleigh. He has a series of boxes of different sizes, characterized by their length, width, and height.


## Description

Your task is to write a function that, given a list of boxes with their sizes, determines whether it is possible to pack all the boxes in one so that each box contains another (which in turn contains another, and so on).

Each box represents its measures with an object. For example: {l: 2, w: 3, h: 2}. This means that the box has a length of 2, a width of 3 and a height of 2.

A box fits into another box if all the sides of the first are smaller than the sides of the second. The elves have told us that the boxes cannot be rotated, so you cannot put a box of 2x3x2 in a box of 3x2x2. Let's see some examples:

#### Things to keep in mind:

The boxes cannot be rotated because the elves have told us that the machine is not ready.
The boxes may come in any order.
The boxes are not always squares, they could be rectangles.

### Example

![Alt text](https://i.imgur.com/1zZ8PfD.png)


### Tests (Passed)

![Alt text](https://i.imgur.com/QsFBT1D.png)