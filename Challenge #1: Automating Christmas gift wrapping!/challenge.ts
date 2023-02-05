export function wrapping(gifts : string[]) : string[] {
    return gifts.map((gift : string) : string => {
      const asteriskLength : string = '*'.repeat(gift.length)
      return `**${asteriskLength}\n*${gift}*\n${asteriskLength}**`
    })
  }
  