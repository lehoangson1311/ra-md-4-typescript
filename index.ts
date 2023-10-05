import readline from "readline";
import { Car } from "./Models/Car";
import { CarManager } from "./CarManager";

//Khởi tạo 1 instance của chức năng cho phép nhập giá trị từ bàn phím
let readLineInstance = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//Hàm để chạy chương trình
function main() {
  //Khởi tạo các thuộc tính và các chức năng nhập vào
  readLineInstance.question("Vui long nhap: ", (action: string) => {
    switch (action) {
      //Thêm student
      case "C":
        //Tương tự
        const car: Car = new Car(1, "mec", 15000, "yellow", "SUV");
        CarManager.createCar(car);
        main();
        break;
      //Show toàn bộ student
      case "R":
        //Tương tự
        CarManager.showAllCar();
        main();
        break;
      //Cập nhật
      case "U":
        const Car1: Car = new Car(1, "mec", 15000, "yellow", "SUV");
        //Gọi phương thức cập nhật student từ class StudentManager
        CarManager.updateCar(1, Car1);
        main();
        break;
      //Xóa
      case "D":
        //Tương tự
        CarManager.deleteCar(1);
        main();
        break;
      case "E":
        //Đóng chức năng nhập vào => thoát chương trình
        readLineInstance.close();
        break;
      default:
        console.log(action);
        main();
        break;
    }
  });
}

main();
