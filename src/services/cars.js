class CarsService {
  constructor() {
    this.cars = [
      {
        modelo: "Dodge",
        ano: 1974,
        price: 46000,
        description: "um verdadeiro muscle americado",
        photo: "https://i.imgur.com/rXHjIKn.jpg",
      },
      {
        modelo: "Jeep",
        ano: 2000,
        price: 21000,
        description: "um jeep como você sempre desejou",
        photo: "https://i.imgur.com/bWB52UR.jpg",
      },
      {
        modelo: "Ferrari",
        ano: 2010,
        price: 550000,
        description: "Uma linda ferrari vermelha como deus quis",
        photo: "https://i.imgur.com/M4I8TX3.jpg",
      },
      {
        modelo: "Fusca",
        ano: 1994,
        price: 25000,
        description: "um fusca das antiga igual ao que o vovô tinha",
        photo: "https://i.imgur.com/UVyX4mQ.jpg",
      },
      {
        modelo: "McLaren F1",
        ano: 2018,
        price: 600000,
        description: "o super esportivo dos sonhos",
        photo: "https://i.imgur.com/JEjX5sQ.jpg",
      },
      {
        modelo: "Ferrari 458 Spider",
        ano: 2019,
        price: 750000,
        description: "um lindo super esportivo",
        photo: "https://i.imgur.com/yCiU6i2.jpg",
      },
      {
        modelo: "Kombi",
        ano: 1993,
        price: 35000,
        description: "linda e conservada",
        photo: "https://i.imgur.com/5HQOP07.jpeg",
      },
      {
        modelo: "Firebird",
        ano: 1976,
        price: 54000,
        description: "firebird restaurado com 500cv",
        photo: "https://i.imgur.com/54H44cz.jpeg",
      },
    ];
  }

  getCars() {
    return this.cars;
  }

  addCar(car) {
    this.cars.push(car);
  }

  removeByIndex(index) {
    this.cars.splice(index, 1);
  }
}

export default new CarsService();
