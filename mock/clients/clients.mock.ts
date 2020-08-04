export function fillClients(iterations: number){
    let clients: Array<object> = []
    for (let i = 0 ; i < iterations ; i++) {
        clients.push({
            DNI: `${i}`,
            name: `name${i}`,
            lastName: `lastName${i}`,
            address: `address/${i}`,
            phone: `0412-${i}`,
            date: `2/06/2020`
        })
    }
    return clients;
}

export const clientUpdate = [
    {
        name: `name`,
        lastName: `lastName`,
        address: `address/`,
        phone: `0412`,
    }
]