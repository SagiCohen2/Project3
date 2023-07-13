class Vacation {
    public vacKey:number;
    public destination:string;
    public description:string;
    public startDate:string;
    public endDate:string;
    public price:number;
    public vacImage:string;

constructor(vacKey:number,destination:string,description:string,startDate:string,endDate:string,price:number,vacImage:string){
    this.vacKey=vacKey;
    this.destination=destination;
    this.description=description;
    this.startDate=startDate;
    this.endDate=endDate;
    this.price=price;
    this.vacImage=vacImage;
}
    
}

export default Vacation;