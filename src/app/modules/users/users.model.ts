export const USERS_DATA: UserData[] = [
  {
    id: 1,
    name: 'Nguyễn Thông Phi Huỳnh',
    email: 'user@gmail.com',
    phone: '0944098342',
    address: 'Số 15 Trần Cao Vân, Thành phố Huế, Tỉnh Thừa Thiên Huế',
    status: 'active',
    img: 'https://i.pravatar.cc/231',
    permission: 'Google, Facebook, Zalo.',
  },
  {
    id: 2,
    name: 'Quảng Trọng Nhân',
    email: 'user1@gmail.com',
    phone: '0944098342',
    address: 'Số 4, Nguyễn Thái Học, P1, TP Trà Vinh, Tỉnh Trà Vinh',
    status: 'active',
    img: 'https://i.pravatar.cc/232',
    permission: 'Google. ',
  },
  {
    id: 3,
    name: 'Trần Nguyên Khôi',
    email: 'user2@gmail.com',
    phone: '0945458342',
    address: 'Phường Phan Thiết, TP Tuyên Quang, Tỉnh Tuyên Quang',
    status: 'active',
    img: 'https://i.pravatar.cc/233',
    permission: 'Google, Facebook, Zalo.',
  },
  {
    id: 4,
    name: 'Thân Minh Hiếu',
    email: 'user3@gmail.com',
    phone: '0944234342',
    address: '71/72A Phó Cơ Điều, P.3, TP. Vĩnh Long, T.Vĩnh Long',
    status: 'deactive',
    img: 'https://i.pravatar.cc/234',
    permission: 'Google, Zalo.',
  },
  {
    id: 5,
    name: 'Lại NguyễnTấn Tài',
    email: 'user4@gmail.com',
    phone: '089098342',
    address: 'Phường Liên Bảo, Thành Phố Vĩnh Yên, Vĩnh phúc',
    status: 'active',
    img: 'https://i.pravatar.cc/235',
    permission: 'Google, Facebook.',
  },
  {
    id: 6,
    name: 'Lê Nhưt Anh',
    email: 'user5@gmail.com',
    phone: '0942343342',
    address: 'Nguyễn Huệ, Phường 2, TP. Tuy Hòa, Phú Yên',
    status: 'active',
    img: 'https://i.pravatar.cc/236',
    permission: 'Facebook, Zalo.',
  },
];
export interface UserData {
  id: number;
  name: string;
  img: string;
  address: string;
  email: string;
  phone: string;
  status: string;
  permission: string;
}
