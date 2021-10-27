
import { SUPPLIER_DATA } from 'src/app/modules/suppliers/suppliers.model';
export class Accessories {
  id: number;
  name: string;
  category: string;
  price: string;
  supplier: string;
  status: string;
  discription: string;
  public constructor() {}
}
function choose() {
  const supplierRandom: string[] = [];
  SUPPLIER_DATA.forEach((supplier) => {
    supplierRandom.push(supplier.name);
  });
  var index = Math.floor(Math.random() * supplierRandom.length);
  return supplierRandom[index];
}
export const ACCESSORIES_DATA: Accessories[] = [
  {
    id: 1123145234,
    name: 'Case Cooler Master MasterCase SL600M',
    supplier: choose(),
    category: 'Hộp PC',
    price: '5,000,000',
    status: 'active',
    discription: 'SSD tốc độ 550MB/giây',
  },
  {
    id: 4234232,
    name: 'Màn hình Cong Samsung Odyssey G9',
    supplier: choose(),
    category: 'Màn hình',
    price: '4,500,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 480x854',
  },
  {
    id: 323423234,
    name: 'Ổ cứng SSD PNY XLR8 CS3030 250GB M.2 2280',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '5,000,000',
    status: 'active',
    discription: 'SDD tốc độ đọc là 600MB/s',
  },
  {
    id: 4453457323323,
    name: 'Ram Gigabyte AORUS RGB 16GB (2x8GB) DDR4 3200Mhz',
    supplier: choose(),
    category: 'RAM',
    price: '1,200,000',
    status: 'active',
    discription: 'SSD tốc độ 700MB/s',
  },
  {
    id: 5453457323323,
    name: 'Case Cooler Master MasterCase SL600M',
    supplier: choose(),
    category: 'Hộp PC',
    price: '2,000,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 960x540',
  },
  {
    id: 6453457323323,
    name: 'Tản nhiệt nước CPU Cooler Master MASTERLIQUID',
      supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '3,300,000',
    status: 'active',
    discription: choose(),
  },
  {
    id: 7453457323323,
    name: 'Ổ cứng SSD Gigabyte AORUS Gen4 7000s 1TB',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '500,000',
    status: 'active',
    discription: 'SSD tốc độ 3500Mb/s',
  },
  {
    id: 8453457323323,
    name: 'Nguồn máy tính Cooler Master MWE 650 Bronze V2',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '1,300,000',
    status: 'active',
    discription: 'SSD tốc độ 1000MB/s',
  },
  {
    id: 9453457323323,
    name: 'Nguồn Antec Neo Eco 650C 650W -80 Plus Bronze',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '930,000',
    status: 'active',
    discription: 'SSD tốc độ 600Mb/s',
  },
  {
    id: 14534573233230,
    name: 'Màn hình Asus ProArt PA248QV',
    supplier: choose(),
    category: 'Màn hình',
    price: '5,930,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 1280x720',
  },
  {
    id: 14534573233231,
    name: 'Case NZXT H1 MATTE WHITE',
    supplier: choose(),
    category: 'Hộp PC',
    price: '330,000',
    status: 'active',
    discription: 'SSD tốc độ 600MB/s',
  },
  {
    id: 14534573233232,
    name: 'Case NZXT H1 MATTE BLACK',
    supplier: choose(),
    category: 'Hộp PC',
    price: '500,000',
    status: 'active',
    discription: 'SSD tốc độ 900MB/s',
  },
  {
    id: 14534573233233,
    name: 'Case Sama L03',
    supplier: choose(),
    category: 'Hộp PC',
    price: '330,000',
    status: 'active',
    discription: 'SSD tốc độ 600MB/s',
  },
  {
    id: 14534573233234,
    name: 'Case XIGMATEK XA-22 (ATX)',
    supplier: choose(),
    category: 'Hộp PC',
    price: '200,000',
    status: 'active',
    discription: 'SSD tốc độ 550MB/s',
  },
  {
    id: 14534573233235,
    name: 'Case Sama L1',
    supplier: choose(),
    category: 'Hộp PC',
    price: '400,000',
    status: 'active',
    discription: 'SSD tốc độ 3500Mb/s',
  },
  {
    id: 14534573233236,
    name: 'Case XIGMATEK XA-20 (ATX)',
    supplier: choose(),
    category: 'Hộp PC',
    price: '350,000',
    status: 'active',
    discription: 'SSD tốc độ 1000MB/s',
  },
  {
    id: 14534573233237,
    name: 'Case XIGMATEK AERO',
    supplier: choose(),
    category: 'Hộp PC',
    price: '590,000',
    status: 'active',
    discription: 'SSD tốc độ 900MB/s',
  },
  {
    id: 14534573233238,
    name: 'Case Golden Field N17Plus',
    supplier: choose(),
    category: 'Hộp PC',
    price: '590,000',
    status: 'active',
    discription: 'SSD tốc độ 550MB/s',
  },
  {
    id: 14534573233239,
    name: 'Case XIGMATEK NYX 3F RGB',
    supplier: choose(),
    category: 'Hộp PC',
    price: '650,000',
    status: 'active',
    discription: 'SSD tốc độ 800MB/s',
  },
  {
    id: 24534573233230,
    name: 'Case Deepcool MATREXX 40',
    supplier: choose(),
    category: 'Hộp PC',
    price: '690,000',
    status: 'active',
    discription: 'SSD tốc độ 700MB/s',
  },
  {
    id: 24534573233231,
    name: 'Màn hình LG 27MP89HM',
    supplier: choose(),
    category: 'Màn hình',
    price: '1,400,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 2560x1440',
  },
  {
    id: 24534573233232,
    name: 'màn hình pc LCD 15.6 inch',
    supplier: choose(),
    category: 'Màn hình',
    price: '699,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 960x540',
  },
  {
    id: 24534573233233,
    name: 'Màn hình Dell S2721HN',
    supplier: choose(),
    category: 'Màn hình',
    price: '1,400,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 1920x1080',
  },
  {
    id: 24534573233234,
    name: 'Màn Hình LG 29 UltraWide 24534573233239WN600-W Full HD',
    supplier: choose(),
    category: 'Màn hình',
    price: '6,500,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 2560x1080',
  },
  {
    id: 24534573233235,
    name: 'Màn hình LCD Dell E2417H 24 inch Wide',
    supplier: choose(),
    category: 'Màn hình',
    price: '3,200,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 1920x1080',
  },
  {
    id: 24534573233236,
    name: 'Asus LCD ProArt PA278CV 27 inch 2K 75Hz',
    supplier: choose(),
    category: 'Màn hình',
    price: '1,089,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 1280x720',
  },
  {
    id: 24534573233237,
    name: 'Màn Hình cong Samsung 27',
    supplier: choose(),
    category: 'Màn hình',
    price: '1,490,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 1366x768',
  },
  {
    id: 24534573233238,
    name: 'Màn hình máy tính Xiaomi 1C 23.8',
    supplier: choose(),
    category: 'Màn hình',
    price: '3,390,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 1920x1080',
  },
  {
    id: 24534573233239,
    name: 'Màn Hình 22 Inch Fujitsu',
    supplier: choose(),
    category: 'Màn hình',
    price: '1,390,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 1080x2160',
  },
  {
    id: 34534573233230,
    name: 'Màn hình Dell P2418HZ 23.8” IPS',
    supplier: choose(),
    category: 'Màn hình',
    price: '1,100,000',
    status: 'active',
    discription: 'Card màn hình có độ phân giải 1920x1080',
  },
  {
    id: 34534573233231,
    name: 'RAM DDR4 16GB RGB',
    supplier: choose(),
    category: 'RAM',
    price: '1,500,000',
    status: 'active',
    discription: 'RAM có Tốc dộ cao',
  },
  {
    id: 34534573233232,
    name: 'RAM DDR4 16GB white',
    supplier: choose(),
    category: 'RAM',
    price: '1,300,000',
    status: 'active',
    discription: 'RAM có Tốc dộ cao',
  },
  {
    id: 34534573233233,
    name: 'RAM DDR3 32GB RGB',
    supplier: choose(),
    category: 'RAM',
    price: '1,400,000',
    status: 'active',
    discription: 'RAM được sản xuất ở Đài Loan',
  },
  {
    id: 34534573233234,
    name: 'RAM DDR4 8GB black',
    supplier: choose(),
    category: 'RAM',
    price: '800,000',
    status: 'active',
    discription: 'RAM được sản xuất ở Đài Loan',
  },
  {
    id: 34534573233235,
    name: 'RAM DDR4 16GB white',
    supplier: choose(),
    category: 'RAM',
    price: '1,350,000',
    status: 'active',
    discription: 'RAM được sản xuất ở Nhật Bản',
  },
  {
    id: 34534573233236,
    name: 'RAM DDR4 32GB black',
    supplier: choose(),
    category: 'RAM',
    price: '2,450,000',
    status: 'active',
    discription: 'RAM được sản xuất ở Mỹ',
  },
  {
    id: 34534573233237,
    name: 'RAM DDR4 32GB RGB',
    supplier: choose(),
    category: 'RAM',
    price: '2,850,000',
    status: 'active',
    discription: 'RAM được sản xuất ở Mỹ',
  },
  {
    id: 34534573233238,
    name: 'RAM DDR4 16GB RGB black',
    supplier: choose(),
    category: 'RAM',
    price: '1,950,000',
    status: 'active',
    discription: 'RAM được sản xuất ở Mỹ',
  },
  {
    id: 34534573233239,
    name: 'RAM DDR4 16GB RGB white',
    supplier: choose(),
    category: 'RAM',
    price: '1,850,000',
    status: 'active',
    discription: 'RAM có tốc độ xử lí cao dành cho gamer',
  },
  {
    id: 44534573233230,
    name: 'RAM DDR4 16GB RGB black',
    supplier: choose(),
    category: 'RAM',
    price: '2,000,000',
    status: 'active',
    discription: 'RAM có tốc độ xử lí cao dành cho gamer',
  },
  {
    id: 44534573233231,
    name: 'FAN LED TẢN NHIỆT JONSBO FR-701',
    supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '500,000',
    status: 'active',
    discription: 'Chân 3 pin ARGB cho phép đồng bộ với các loại hub',
  },
  {
    id: 44534573233232,
    name: 'FAN CASE ID CO453457323323OLING DF-12025-ARGB TRIO SNOW 3PCS PACK',
    supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '600,000',
    status: 'active',
    discription: 'Phiên bản màu trắng mang lại phong cách mới cho bạn',
  },
  {
    id: 44534573233233,
    name: 'FAN CASE XIGMATEK GALAXY III ROYAL - BR120 ARGB (EN46119)',
    supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '900,000',
    status: 'active',
    discription: 'Có thể điều chỉnh màu qua app để đồng bộ với main',
  },
  {
    id: 44534573233234,
    name: 'FAN CASE CORSAIR LL120 RGB 120MM DUAL LIGHT LOOP RGB',
    supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '1,400,000',
    status: 'active',
    discription: 'Thiết kế phù hợp với mọi loại case',
  },
  {
    id: 44534573233235,
    name: 'FAN CASE ID CO453457323323OLING DF-12025-ARGB TRIO 3PCS PACK',
    supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '800,000',
    status: 'active',
    discription: 'Tốc độ quạt lớn, tối ưu với mọi loại case',
  },
  {
    id: 44534573233236,
    name: 'QUẠT MÁY TÍNH 140MM CORSAIR QL140 PRO RGB LED',
    supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '950,000',
    status: 'active',
    discription: 'Tốc độ quạt lớn, tối ưu với mọi loại case trên thị trường',
  },
  {
    id: 44534573233237,
    name: 'EK-VARDAR X3M 120ER D-RGB',
    supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '750,000',
    status: 'active',
    discription: 'Phiên bản mới cho trải nghiệm tốt hơn',
  },
  {
    id: 44534573233238,
    name: 'FAN CASE COOLERMASTER SICKLEFLOW 120 ARGB 3 IN1',
    supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '790,000',
    status: 'active',
    discription: 'Phiên bản mới cho trải nghiệm tốt hơn, khung quạt cải tiến',
  },
  {
    id: 44534573233239,
    name: 'FAN CASE FAN VITRA SNOW RGB',
    supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '990,000',
    status: 'active',
    discription: 'Phiên bản mới, khung quạt cải tiến',
  },
  {
    id: 54534573233230,
    name: 'EK-VARDAR EVO 120ER D-RGB',
    supplier: choose(),
    category: 'Quạt Tản nhiệt',
    price: '990,000',
    status: 'active',
    discription: 'Phiên bản mới, điều khiển đèn qua phần mềm',
  },
  {
    id: 54534573233231,
    name: 'NGUỒN FSP POWER SUPPLY AX SERIES AX400ATX  ACTIVE PFC',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '559,000',
    status: 'active',
    discription: 'Phiên bản mới, đem lại sự ổn định',
  },
  {
    id: 54534573233232,
    name: 'NGUỒN FSP POWER SUPPLY AX SERIES 350ATX MODEL AX270-50WPN',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '459,000',
    status: 'active',
    discription: 'Giá thành hợp lí thích hợp cho các máy văn phòng',
  },
  {
    id: 54534573233233,
    name: 'NGUỒN MÁY TÍNH COOLER MASTER MWE V2 230V',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '1,459,000',
    status: 'active',
    discription: 'Bèn bỉ, an toàn, kháng nhiệt độ cao',
  },
  {
    id: 54534573233234,
    name: 'NGUỒN CORSAIR HX1000 1000W (80 PLATINUM/MÀU ĐEN/FULL MODUL)',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '5,459,000',
    status: 'active',
    discription: 'Công suất 850W, phù hợp với các máy cao cấp hiện nay',
  },
  {
    id: 54534573233235,
    name: 'NGUỒN JETEK M500 500W (MÀU ĐEN/LED RGB )',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '959,000',
    status: 'active',
    discription: 'Đem lại sự yên tĩnh khi hoạt động',
  },
  {
    id: 54534573233236,
    name: 'NGUỒN MÁY TÍNH COOLER MASTER ELITE V3 230V PC500 500W',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '889,000',
    status: 'active',
    discription: 'Công suất 500W phù hợp với các máy văn phòng',
  },
  {
    id: 54534573233237,
    name: 'NGUỒN MÁY TÍNH GIGABYTE GP-P550B- 550W',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '1,089,000',
    status: 'active',
    discription: 'Công suất 550W phù hợp với các máy văn phòng',
  },
  {
    id: 54534573233238,
    name: 'NGUỒN MÁY TÍNH COOLER MASTER ELITE V3 230V PC700 700W',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '1,089,000',
    status: 'active',
    discription: 'Công suất 700W phù hợp với các máy văn phòng, coder',
  },
  {
    id: 54534573233239,
    name: 'NGUỒN FSP POWER SUPPLY HYN SERIES HYN550ATX  ACTIVE PFC',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '789,000',
    status: 'active',
    discription: 'Công nghệ quạt thông minh, cho hiệu suất cao',
  },
  {
    id: 64534573233230,
    name: 'NGUỒN AERO COOL LUX RGB 550W',
    supplier: choose(),
    category: 'Nguồn máy tính',
    price: '1,789,000',
    status: 'active',
    discription: 'Đem lại sự yên tĩnh khi hoạt động, cho hiệu suất cao',
  },
  {
    id: 64534573233231,
    name: 'Ổ cứng SSD WD Green 120 GB SATA 2.5 inch',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '670,000',
    status: 'active',
    discription: 'SSD tốc độ đọc là 600MB/s',
  },
  {
    id: 64534573233232,
    name: 'Ổ cứng SSD WD Green 240 GB SATA 2.5 inch',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '890,000',
    status: 'active',
    discription: 'SSD tốc độ đọc là 800MB/s',
  },
  {
    id: 64534573233233,
    name: 'Ổ cứng SSD WD Green 480GB SATA 2.5 inch',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '1,390,000',
    status: 'active',
    discription: 'SSD tốc độ đọc là 900MB/s',
  },
  {
    id: 64534573233234,
    name: 'Ổ cứng SSD WD Green 240 GB M2 2280',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '890,000',
    status: 'active',
    discription: 'SsD tốc độ đọc là 1000MB/s',
  },
  {
    id: 64534573233235,
    name: 'Ổ cứng SSD WD Green 480GB M2 2280',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '3,190,000',
    status: 'active',
    discription: 'SsD tốc độ đọc là 3500Mb/s',
  },
  {
    id: 64534573233236,
    name: 'Ổ cứng HDD WD Blue 1TB WD10EZEX',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '4,850,000',
    status: 'active',
    discription: 'HDD tốc độ đọc là 700MB/s',
  },
  {
    id: 64534573233237,
    name: 'Ổ Cứng HDD WD Blue 2TB WD20EZAZ',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '6,550,000',
    status: 'active',
    discription: 'HDD tốc độ đọc là 600MB/s',
  },
  {
    id: 64534573233238,
    name: 'Ổ Cứng HDD WD Blue 3TB WD30EZRZ',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '2,350,000',
    status: 'active',
    discription: 'HDD tốc độ đọc là 1000MB/s',
  },
  {
    id: 64534573233239,
    name: 'Ổ Cứng HDD WD Blue 4TB WD40EZAZ',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '1,890,000',
    status: 'active',
    discription: 'HDD tốc độ đọc là 600MB/s',
  },
  {
    id: 74534573233230,
    name: 'Ổ Cứng HDD WD Blue 6TB WD60EZAZ',
    supplier: choose(),
    category: 'Ổ cứng',
    price: '4,150,000',
    status: 'active',
    discription: 'HDD tốc độ đọc là 3500Mb/s',
  },
];
