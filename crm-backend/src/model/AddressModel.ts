<<<<<<< HEAD
export type AddressModel ={
    id:number,
    addressType:string,
    addressLine:string,
    location: string,
=======
import { ContactType } from "../enum/ContactType";

export type AddressModel = {
    id: number;
    addressType: ContactType;
    addressLine: string;
    location: string;
>>>>>>> 87b7ced2f0868002abe940b5cc0175bb985a47ff
}