class Vacation {
    public id:number;
    public destination:string;
    public description:string;
    public startDate:string;
    public endDate:string;
    public price:string;
    public vacImage:string;

constructor(destination:string,description:string,startDate:string,endDate:string,price:string,vacImage:string){
    this.destination=destination;
    this.description=description;
    this.startDate=startDate;
    this.endDate=endDate;
    this.price=price;
    this.vacImage=vacImage;
}
    
}

export default Vacation;