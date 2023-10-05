export class Car {
  private carId: number;

  private brand: string;

  private price: number;

  private color: string;

  private category: string;

  constructor(
    carId: number,
    brand: string,
    price: number,
    color: string,
    category: string
  ) {
    this.carId = carId;
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.category = category;
  }

  public get getCarId(): number {
    return this.carId;
  }

  public set setCarId(carId: number) {
    this.carId = carId;
  }

  public get getBrand(): string {
    return this.brand;
  }

  public set setBrand(brand: string) {
    this.brand = brand;
  }

  public get getPrice(): number {
    return this.price;
  }

  public set setPrice(price: number) {
    this.price = price;
  }

  public get getColor(): string {
    return this.color;
  }

  public set setColor(color: string) {
    this.color = color;
  }
  public get getCategory(): string {
    return this.category;
  }

  public set setCategory(category: string) {
    this.category = category;
  }

  //Phương thức để nhập các dữ liệu cho student
  public inputData(data: Car): void {
    this.brand = data.brand;
    this.price = data.price;
    this.color = data.color;
    this.category = data.category;
  }
  //phương thức để show hết mọi thông tin student ra
  public displayData(): void {
    console.log(this);
  }
}
