export function fillProducts(iterations: number){
    
    let products: Array<object> = [];
    for (let i = 0 ; i < iterations ; i++) {
        products.push({
            type: `Jeans`,
            size: `s${i}`,
            price: 12,
            brand: `nike${i}`,
            quantity: 10,
            provider: `nike`,
            code: `asdasdasa${i}`,
            date: '202020'
        })
    }
    return products;
}

export const code: Array<string> = [];//export for delete product