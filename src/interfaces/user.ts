export interface IUser {
  id: number;
  name: string;
  gender: string;
  email: string;
  dateBirth: string;
  address: string;
  phone: string;
}

export interface IUserData {
  name: string;
  email: string;
  gender: string;
  dateBirth: string;
  address: string;
  phone: string;
}

export interface IUserEditForm {
  isEdit: boolean;
  id: number;
}
