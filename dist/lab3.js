var TypeOfDocument;
(function (TypeOfDocument) {
    TypeOfDocument["PASSPORT"] = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442";
    TypeOfDocument["LICENCE"] = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430 ";
})(TypeOfDocument || (TypeOfDocument = {}));
class Owner {
    get firstName() {
        return this._firstName;
    }
    get lastName() {
        return this._lastName;
    }
    get middleName() {
        return this._middleName;
    }
    get birthDate() {
        return this._birthDate;
    }
    get document() {
        return this._document;
    }
    get serialNumber() {
        return this._serialNumber;
    }
    get number() {
        return this._number;
    }
    set firstName(value) {
        this._firstName = value;
    }
    set lastName(value) {
        this._lastName = value;
    }
    set middleName(value) {
        this._middleName = value;
    }
    set birthDate(value) {
        this._birthDate = value;
    }
    set document(value) {
        this._document = value;
    }
    set serialNumber(value) {
        this._serialNumber = value;
    }
    set number(value) {
        this._number = value;
    }
    constructor(firstName, lastName, middleName, birthDate, document, serialNumber, number) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._middleName = middleName;
        this._birthDate = birthDate;
        this._document = document;
        this._serialNumber = serialNumber;
        this._number = number;
    }
    ownerInfo() {
        return `ФИО: ${this._lastName} ${this._firstName} ${this._middleName}
                Дата рождения: ${this._birthDate.toDateString()}
                Документ: ${this._document}
                Серийный номер: ${this._serialNumber}
                Номер: ${this._number}`;
    }
}
class Vehicle {
    constructor(brand, model, yearOfRelease, vinNumber, numberOfRegistration, owner) {
        this._brand = brand;
        this._model = model;
        this._yearOfRelease = yearOfRelease;
        this._vinNumber = vinNumber;
        this._numberOfRegistration = numberOfRegistration;
        this._owner = owner;
    }
    get brand() {
        return this._brand;
    }
    get model() {
        return this._model;
    }
    get yearOfRelease() {
        return this._yearOfRelease;
    }
    get vinNumber() {
        return this._vinNumber;
    }
    get numberOfRegistration() {
        return this._numberOfRegistration;
    }
    get owner() {
        return this._owner;
    }
    set brand(value) {
        this._brand = value;
    }
    set model(value) {
        this._model = value;
    }
    set yearOfRelease(value) {
        this._yearOfRelease = value;
    }
    set vinNumber(value) {
        this._vinNumber = value;
    }
    set numberOfRegistration(value) {
        this._numberOfRegistration = value;
    }
    set owner(value) {
        this._owner = value;
    }
    // Метод вывода информации о транспортном средстве
    vehicleInfo() {
        return `Марка: ${this._brand}
                Модель: ${this._model}
                Год выпуска: ${this._yearOfRelease}
                VIN: ${this._vinNumber}
                Регистрационный номер: ${this._numberOfRegistration}
                Владелец: ${this._owner.firstName} ${this._owner.lastName}`;
    }
}
var classAuto;
(function (classAuto) {
    classAuto["A"] = "\u041A\u043B\u0430\u0441\u0441 \u0410";
    classAuto["B"] = "\u041A\u043B\u0430\u0441\u0441 B";
    classAuto["C"] = "\u041A\u043B\u0430\u0441\u0441 C";
    classAuto["D"] = "\u041A\u043B\u0430\u0441\u0441 D";
})(classAuto || (classAuto = {}));
var BodyType;
(function (BodyType) {
    BodyType["SEDAN"] = "\u0421\u0435\u0434\u0430\u043D";
    BodyType["HATCHBACK"] = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A";
    BodyType["COUPE"] = "\u041A\u0443\u043F\u0435";
    BodyType["UNIVERSAL"] = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B";
})(BodyType || (BodyType = {}));
class Car extends Vehicle {
    constructor(typeBody, classAuto, yearOfRelease, brand, model, vinNumber, numberOfRegistration, owner) {
        super(brand, model, yearOfRelease, vinNumber, numberOfRegistration, owner);
        this._typeBody = typeBody;
        this._class = classAuto;
    }
    get typeBody() {
        return this._typeBody;
    }
    get class() {
        return this._class;
    }
    set typeBody(value) {
        this._typeBody = value;
    }
    set class(value) {
        this._class = value;
    }
    vehicleInfo() {
        return super.vehicleInfo() + `\nТип кузова: ${this._typeBody}\nКласс автомобиля: ${this._class ? "Да" : "Нет"}`;
    }
}
class Motorbike extends Vehicle {
    constructor(frameType, forSport, yearOfRelease, brand, model, vinNumber, numberOfRegistration, owner) {
        super(brand, model, yearOfRelease, vinNumber, numberOfRegistration, owner);
        this._frameType = frameType;
        this._forSport = forSport;
    }
    get frameType() {
        return this._frameType;
    }
    get forSport() {
        return this._forSport;
    }
    set frameType(value) {
        this._frameType = value;
    }
    set forSport(value) {
        this._forSport = value;
    }
    vehicleInfo() {
        return super.vehicleInfo() + `\nТип рамы: ${this._frameType}\nСпортивный: ${this._forSport ? "Да" : "Нет"}`;
    }
}
class VehicleStorage {
    get created() {
        return this._created;
    }
    get data() {
        return this._data;
    }
    constructor() {
        this._created = new Date();
        this._data = [];
    }
    getAll() {
        return this.data;
    }
    remove(index) {
        this._data = this.data.splice(index, 1);
    }
    save(data) {
        this._data.push(data);
    }
}
const owner = new Owner("Данил", "Ушаков", "Романович", new Date(2005, 21, 10), TypeOfDocument.PASSPORT, 123456, 7890);
const car = new Car(BodyType.SEDAN, classAuto.A, 2022, "Lada", "Vesta", "JHMCM56557C404453", "03-10/543", owner);
const motorBike = new Motorbike("Одинарная закрытая рама", true, 2020, "Yamaha", "Model1", "JHMCM56557C404453", "03-10/543", owner);
const vehicleStorage = new VehicleStorage();
vehicleStorage.save(car);
vehicleStorage.save(motorBike);
console.log(vehicleStorage.getAll());
