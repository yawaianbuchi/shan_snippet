export interface User {
  is2DAvailable: boolean;
  is3DAvailable: boolean;
  _id: string;
  userCode: string;
  password: string;
  secretCode: string;
  name: string;
  email: string;
  phone: string;
  status: boolean;
  receivingMail: string;
  liveDate: string;
  roleId: string;
  loginIpAddresses: string[];
  domainIpAddress: string;
  domainName: string;
  walletId: string;
}

export interface UserInfoData {
  user: User;
  token: string;
}

export interface LoginResponse {
  status: string;
  msg: string;
  data: UserInfoData;
}
