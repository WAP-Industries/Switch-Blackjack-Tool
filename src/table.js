const Moves = {
    "H": "Hit",
    "S": "Stand",
    "P": "Split",
    "D": "Double/Hit",
    "DS": "Double/Stand"
}

const Strategy = new Map()
Strategy.set("5-8",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(9,          ['H', 'H', 'H', 'H', 'D', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(10,         ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H', 'H'])
Strategy.set(11,         ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H'])
Strategy.set(12,         ['H', 'H', 'H', 'S', 'S', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(13,         ['H', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(14,         ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(15,         ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'])
Strategy.set(16,         ['S', 'S', 'S', 'S', 'S', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("17-21",    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
Strategy.set("A,2",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,3",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,4",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,5",      ['H', 'H', 'H', 'H', 'D', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,6",      ['H', 'H', 'H', 'D', 'D', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("A,7",      ['S', 'S', 'S','DS','DS', 'S', 'S', 'H', 'H', 'H'])
Strategy.set("A,8",      ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
Strategy.set("A,9",      ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
Strategy.set("A,10",     ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
Strategy.set("2,2",      ['H', 'H', 'H', 'P', 'P', 'P', 'H', 'H', 'H', 'H'])
Strategy.set("3,3",      ['H', 'H', 'H', 'P', 'P', 'P', 'H', 'H', 'H', 'H'])
Strategy.set("4,4",      ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("5,5",      ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'H', 'H', 'H'])
Strategy.set("6,6",      ['H', 'H', 'P', 'P', 'P', 'H', 'H', 'H', 'H', 'H'])
Strategy.set("7,7",      ['S', 'P', 'P', 'P', 'P', 'P', 'H', 'H', 'H', 'H'])
Strategy.set("8,8",      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'H', 'H'])
Strategy.set("9,9",      ['S', 'S', 'P', 'P', 'P', 'S', 'P', 'P', 'S', 'S'])
Strategy.set("10,10",    ['S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S', 'S'])
Strategy.set("A,A",      ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'])