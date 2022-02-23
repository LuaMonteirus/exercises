/* Monthly outcomes                 Monthly incomes

Facultaty:      |200$               2400$
Light bill:     |250$               300$
Water bill:     |135$
Wi-fi:          |120$
4G:             |150$
house rent:     |900$
Health plan:    |200$
English course: |300$
Spotify:        |10$
*/

// ------ 

const family = {
    incomes: [2400, 300],
    outcomes: [200, 250, 135, 120, 150, 900, 200, 300, 10]
}

function sum(cost) {
    let total = 0

    for(let value of cost) {
        total += value
    }
    return total
}

function cal() {
    const incomesCal = sum(family.incomes)
    const outcomesCal = sum(family.outcomes)
    const total = incomesCal - outcomesCal

    if (total > 0) {
        console.log(`Your balance is good, you have: ${total.toFixed(2)}`)        
    } else {
        console.log(`Your balance is bad, you have: ${total.toFixed(2)}`)
    }
}

cal()