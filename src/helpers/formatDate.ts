export function formatDate(date: any){
    date =  date.toISOString().substring(0,10);
    return date;
}