import Sale from '../sales/model/sales.model';

export class SalesC implements ISales {

    async abstract(data1?: string | undefined, data2?: string | undefined ){
        let result: Array<TSales | []> = [];
        data1 === undefined && data2 === undefined? result = await this.allSales(): null;
        data1 != undefined && data2 === undefined? result = await this.oneSale(data1): null;
        data1 != undefined && data2 != undefined? result = await this.range(data1, data2): null;
        return result;
    }

    async allSales(): Promise<Array<TSales | []>>{
        const sales: Array<TSales> = await Sale.find();
        if(sales != null){
            return sales;
        }else{
            return [];
        }
    }

    async oneSale(date: string): Promise<Array<TSales | []>>{
        const sales: Array<TSales> = await Sale.find({dateFormat: date});
        if(sales != null){
            return sales;
        }else{
            return [];
        }
    }
    async range(ini: string, fin: string): Promise<Array<TSales | []>>{
        const rangeDate: Array<TSales> = await Sale.find({
            $and: [
                {
                    dateFormat: {
                        $gte: ini
                    }
                },
                {
                    dateFormat: {
                        $lte: fin
                    }
                }
            ]
        })
       return rangeDate
    }
}