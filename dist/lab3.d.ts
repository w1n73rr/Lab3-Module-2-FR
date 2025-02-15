interface IOwner {
    lastName: string;
    firstName: string;
    middleName: string;
    birthDate: Date;
    document: TypeOfDocument;
    serialNumber: number;
    number: number;
    ownerInfo: () => string;
}
declare enum TypeOfDocument {
    PASSPORT = "\u041F\u0430\u0441\u043F\u043E\u0440\u0442",
    LICENCE = "\u0412\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430 "
}
interface IVehicle {
    brand: string;
    model: string;
    yearOfRelease: number;
    vinNumber: string;
    numberOfRegistration: string;
    owner: IOwner;
    vehicleInfo: () => string;
}
declare class Owner implements IOwner {
    private _firstName;
    private _lastName;
    private _middleName;
    private _birthDate;
    private _document;
    private _serialNumber;
    private _number;
    get firstName(): string;
    get lastName(): string;
    get middleName(): string;
    get birthDate(): Date;
    get document(): TypeOfDocument;
    get serialNumber(): number;
    get number(): number;
    set firstName(value: string);
    set lastName(value: string);
    set middleName(value: string);
    set birthDate(value: Date);
    set document(value: TypeOfDocument);
    set serialNumber(value: number);
    set number(value: number);
    constructor(firstName: string, lastName: string, middleName: string, birthDate: Date, document: TypeOfDocument, serialNumber: number, number: number);
    ownerInfo(): string;
}
declare class Vehicle implements IVehicle {
    private _brand;
    private _model;
    private _yearOfRelease;
    private _vinNumber;
    private _numberOfRegistration;
    private _owner;
    constructor(brand: string, model: string, yearOfRelease: number, vinNumber: string, numberOfRegistration: string, owner: IOwner);
    get brand(): string;
    get model(): string;
    get yearOfRelease(): number;
    get vinNumber(): string;
    get numberOfRegistration(): string;
    get owner(): IOwner;
    set brand(value: string);
    set model(value: string);
    set yearOfRelease(value: number);
    set vinNumber(value: string);
    set numberOfRegistration(value: string);
    set owner(value: IOwner);
    vehicleInfo(): string;
}
interface ICar extends IVehicle {
    typeBody: BodyType;
    class: classAuto;
}
declare enum classAuto {
    A = "\u041A\u043B\u0430\u0441\u0441 \u0410",
    B = "\u041A\u043B\u0430\u0441\u0441 B",
    C = "\u041A\u043B\u0430\u0441\u0441 C",
    D = "\u041A\u043B\u0430\u0441\u0441 D"
}
declare enum BodyType {
    SEDAN = "\u0421\u0435\u0434\u0430\u043D",
    HATCHBACK = "\u0425\u044D\u0442\u0447\u0431\u044D\u043A",
    COUPE = "\u041A\u0443\u043F\u0435",
    UNIVERSAL = "\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B"
}
declare class Car extends Vehicle implements ICar {
    private _typeBody;
    private _class;
    constructor(typeBody: BodyType, classAuto: classAuto, yearOfRelease: number, brand: string, model: string, vinNumber: string, numberOfRegistration: string, owner: IOwner);
    get typeBody(): BodyType;
    get class(): classAuto;
    set typeBody(value: BodyType);
    set class(value: classAuto);
    vehicleInfo(): string;
}
interface IMotorbike extends IVehicle {
    frameType: string;
    forSport: boolean;
}
declare class Motorbike extends Vehicle implements IMotorbike {
    private _frameType;
    private _forSport;
    constructor(frameType: string, forSport: boolean, yearOfRelease: number, brand: string, model: string, vinNumber: string, numberOfRegistration: string, owner: IOwner);
    get frameType(): string;
    get forSport(): boolean;
    set frameType(value: string);
    set forSport(value: boolean);
    vehicleInfo(): string;
}
interface IVehicleStorage<T extends IVehicle> {
    created: Date;
    data: T[];
    getAll: () => T[];
    save(data: T): void;
    remove(index: number): void;
}
declare class VehicleStorage<T extends IVehicle> implements IVehicleStorage<T> {
    private readonly _created;
    private _data;
    get created(): Date;
    get data(): T[];
    constructor();
    getAll(): T[];
    remove(index: number): void;
    save(data: T): void;
}
declare const owner: IOwner;
declare const car: ICar;
declare const motorBike: IMotorbike;
declare const vehicleStorage: IVehicleStorage<IVehicle>;
