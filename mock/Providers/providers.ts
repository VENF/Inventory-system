export function fillProviders(iterations: number){
    let providers: Array<object> = []
    for (let i = 0 ; i < iterations ; i++) {
        providers.push({
            name: `name${i}`,
            lastName: `lastName${i}`,
            address: `address/${i}`,
            phone: `0412-${i}`,
            date: `2/06/2020`,
            company: `nike ${i}`,
            slug: `nike-${i}`
        })
    }
    return providers;
}

export const providerUpdate = [
    {
        name: `name`,
        lastName: `lastName`,
        address: `address/`,
        phone: `0412`,
    }
]