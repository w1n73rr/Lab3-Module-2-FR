interface IOwner{
    lastName:string;
    firstName:string;
    middleName:string;
    birthDate:Date;
    document:TypeOfDocument;
    serialNumber:number;
    number:number;
    ownerInfo:()=>string;
}
enum TypeOfDocument{
    PASSPORT = "Паспорт",
    LICENCE = "Водительские права ",
}
interface IVehicle{
    brand:string;
    model:string;
    yearOfRelease:number;
    vinNumber:string;
    numberOfRegistration:string;
    owner:IOwner;
    vehicleInfo:()=>string;
}

class Owner implements IOwner {
    private _firstName: string;
    private _lastName: string;
    private _middleName: string;
    private _birthDate: Date;
    private _document: TypeOfDocument;
    private _serialNumber: number;
    private _number: number;

    
    get firstName(): string {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get middleName(): string {
        return this._middleName;
    }

    get birthDate(): Date {
        return this._birthDate;
    }

    get document(): TypeOfDocument {
        return this._document;
    }

    get serialNumber(): number {
        return this._serialNumber;
    }

    get number(): number {
        return this._number;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    set middleName(value: string) {
        this._middleName = value;
    }

    set birthDate(value: Date) {
        this._birthDate = value;
    }

    set document(value: TypeOfDocument) {
        this._document = value;
    }

    set serialNumber(value: number) {
        this._serialNumber = value;
    }

    set number(value: number) {
        this._number = value;
    }
    constructor(firstName:string,lastName:string,middleName:string,birthDate:Date,document:TypeOfDocument,serialNumber:number,number:number){
        this._firstName=firstName;
        this._lastName=lastName;
        this._middleName=middleName;
        this._birthDate=birthDate;
        this._document=document;
        this._serialNumber=serialNumber;
        this._number=number;
    }
    ownerInfo():string {
        return `ФИО: ${this._lastName} ${this._firstName} ${this._middleName}
                Дата рождения: ${this._birthDate.toDateString()}
                Документ: ${this._document}
                Серийный номер: ${this._serialNumber}
                Номер: ${this._number}`;
    }
}

class Vehicle implements IVehicle {
    private _brand: string;
    private _model: string;
    private _yearOfRelease: number;
    private _vinNumber:string;
    private _numberOfRegistration: string;
    private _owner: IOwner;

    constructor(
        brand: string,
        model: string,
        yearOfRelease: number,
        vinNumber: string,
        numberOfRegistration: string,
        owner: IOwner
    ) {
        this._brand = brand;
        this._model = model;
        this._yearOfRelease = yearOfRelease;
        this._vinNumber = vinNumber;
        this._numberOfRegistration = numberOfRegistration;
        this._owner = owner;
    }

    get brand(): string {
        return this._brand;
    }

    get model(): string {
        return this._model;
    }

    get yearOfRelease(): number {
        return this._yearOfRelease;
    }

    get vinNumber(): string {
        return this._vinNumber;
    }

    get numberOfRegistration(): string {
        return this._numberOfRegistration;
    }

    get owner(): IOwner {
        return this._owner;
    }

    set brand(value: string) {
        this._brand = value;
    }

    set model(value: string) {
        this._model = value;
    }

    set yearOfRelease(value: number) {
        this._yearOfRelease = value;
    }

    set vinNumber(value: string) {
        this._vinNumber = value;
    }

    set numberOfRegistration(value: string) {
        this._numberOfRegistration = value;
    }

    set owner(value: IOwner) {
        this._owner = value;
    }

    // Метод вывода информации о транспортном средстве
    vehicleInfo(): string {
        return `Марка: ${this._brand}
                Модель: ${this._model}
                Год выпуска: ${this._yearOfRelease}
                VIN: ${this._vinNumber}
                Регистрационный номер: ${this._numberOfRegistration}
                Владелец: ${this._owner.firstName} ${this._owner.lastName}`;
    }
}

interface ICar extends IVehicle{
    typeBody:BodyType;
    class:classAuto;
}

enum classAuto{
    A = "Класс А",
    B = "Класс B",
    C = "Класс C",
    D = "Класс D"
}
enum BodyType{
    SEDAN = "Седан",
    HATCHBACK = "Хэтчбэк",
    COUPE = "Купе",
    UNIVERSAL = "Универсал"
}

class Car extends Vehicle implements ICar {
    private _typeBody: BodyType;
    private _class: classAuto;
    
    constructor(
        typeBody: BodyType,
        classAuto: classAuto,
        yearOfRelease: number,
        brand: string,
        model: string,
        vinNumber: string,
        numberOfRegistration: string,
        owner: IOwner
    ) {
        super(brand,model,yearOfRelease,vinNumber,numberOfRegistration,owner)
        this._typeBody = typeBody;
        this._class = classAuto;
    }

    get typeBody(): BodyType {
        return this._typeBody;
    }

    get class(): classAuto {
        return this._class;
    }

    set typeBody(value: BodyType) {
        this._typeBody = value;
    }

    set class(value: classAuto) {
        this._class = value;
    }
 
    vehicleInfo(): string {
        return super.vehicleInfo() + `\nТип кузова: ${this._typeBody}\nКласс автомобиля: ${this._class ? "Да" : "Нет"}`;
    }
}

interface IMotorbike extends IVehicle{
    frameType:string;
    forSport:boolean;
}

class Motorbike extends Vehicle implements IMotorbike {
    private _frameType: string;
    private _forSport: boolean;

    constructor(
        frameType: string,
        forSport: boolean,
        yearOfRelease: number,
        brand: string,
        model: string,
        vinNumber: string,
        numberOfRegistration: string,
        owner: IOwner
    ) {
        super(brand,model,yearOfRelease,vinNumber,numberOfRegistration,owner)
        this._frameType = frameType;
        this._forSport = forSport;
    }

    get frameType(): string {
        return this._frameType;
    }

    get forSport(): boolean {
        return this._forSport;
    }

    set frameType(value: string) {
        this._frameType = value;
    }

    set forSport(value: boolean) {
        this._forSport = value;
    }

    vehicleInfo(): string {
        return super.vehicleInfo() + `\nТип рамы: ${this._frameType}\nСпортивный: ${this._forSport ? "Да" : "Нет"}`;
    }
}

interface IVehicleStorage<T extends IVehicle>{
    created:Date;
    data: T[];
    getAll:()=>T[];
    
    save(data:T):void;

    remove(index:number):void;
}

class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T>{
    private readonly _created:Date;
    private _data:T[];

    get created():Date{
        return this._created;
    }

    get data():T[]{
        return this._data;
    }

    constructor(){
        this._created = new Date();
        this._data = [];
    }

    getAll(): T[]{
        return this.data;
    }

    remove(index: number):void{
        this._data = this.data.splice(index,1);
    }

    save(data:T):void{
        this._data.push(data);
    }
}


const owner: IOwner = new Owner("Данил","Ушаков","Романович",new Date(2005,21,10),TypeOfDocument.PASSPORT,123456,7890);

const car: ICar = new Car(BodyType.SEDAN,classAuto.A,2022,"Lada","Vesta","JHMCM56557C404453","03-10/543",owner);
const motorBike: IMotorbike = new Motorbike("Одинарная закрытая рама",true,2020,"Yamaha","Model1","JHMCM56557C404453","03-10/543",owner);

const vehicleStorage: IVehicleStorage<IVehicle> = new VehicleStorage();
vehicleStorage.save(car);
vehicleStorage.save(motorBike);

console.log(vehicleStorage.getAll());