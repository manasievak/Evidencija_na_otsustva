export class Firmi {
    f_id?: number;
    f_ime?: string;
	f_grad?: string;
	f_email?: string;
	f_telefon?: string;
	f_edb?: string;
	f_kontakt?: string;
	f_username?: string;
	f_password?: string;
    f_valid?: number; //date

	constructor(id: number) {
		this.f_id=id;
	}
}
