import { formatDate } from '../helpers/formatDate'
export class Create implements ICreate {
    constructor(private data: any, private model: any){}
    create(): object{
        const document = new this.model(this.data);
        document.dateFormat = formatDate(document.date)
        return document;
    }
}