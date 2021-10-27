export class Supllier {
  id: number;
  name: string;
  email: string;
  phone: string;
  link: string;
  date: Date;
  status: string;
  public constructor() {}
}

export const SUPPLIER_DATA: Supllier[] = [
  {
    id: 1,
    name: 'Phong Vũ',
    email: 'phongvu@gmail.com',
    phone: '1280000434',
    link: 'https://phongvu.vn/',
    date: new Date('11/10/2021'),
    status: 'active',
  },
  {
    id: 2,
    name: 'Gear VN',
    email: 'gearvn@gmail.com',
    phone: '03899001021',
    link: 'https://gearvn.com/',
    date: new Date('1/10/2021'),
    status: 'active',
  },
  {
    id: 3,
    name: 'Tin Học Ngôi Sao',
    email: 'tinhocngoisao@gmail.com',
    phone: '09099999122',
    link: 'https://tinhocngoisao.com/',
    date: new Date('3/10/2021'),
    status: 'active',
  },
  {
    id: 4,
    name: 'TNC',
    email: 'tnc@gmail.com',
    phone: '0128000939',
    link: 'https://www.tncstore.vn/',
    date: new Date('4/10/2021'),
    status: 'active',
  },
  {
    id: 5,
    name: 'Khôi Computer',
    email: 'khoicomputer@gmail.com',
    phone: '0128977766',
    link: 'https://minhkhoicomputer.com/',
    date: new Date('10/10/2021'),
    status: 'active',
  },
  {
    id: 6,
    name: 'Tài PC',
    email: 'taiPC@gmail.com',
    phone: '00293020200',
    link: 'https://taicomputer.com/',
    date: new Date('12/10/2021'),
    status: 'active',
  },
  {
    id: 7,
    name: 'Game Master',
    email: 'gamemaster@gmail.com',
    phone: '09992323223',
    link: 'https://gamemaster.vn/',
    date: new Date('9/10/2021'),
    status: 'active',
  },
  {
    id: 8,
    name: 'Sài Gòn Computer',
    email: 'saigoncomputer@gmail.com',
    phone: '00293020200',
    link: 'https://saigoncomputer.vn/',
    date: new Date('9/10/2021'),
    status: 'deactive',
  },
];
