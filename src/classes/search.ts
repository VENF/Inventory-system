export class Search implements ISearch {
    constructor(private model: any, private field?: string, private data?: string | number){}

    async searchAll(): Promise<Array<object>>{
        const documents = await this.model.find({}, { __v: 0, _id: 0, slug: 0, date: 0 });
        return documents;
    }

    async searchOne(): Promise<object>{
        const document = await this.model.findOne({ [`${this.field}`]: this.data }, { __v: 0, _id: 0, slug: 0, date: 0 });
        return document;
    }
}