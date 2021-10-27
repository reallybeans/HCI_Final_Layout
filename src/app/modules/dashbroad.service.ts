import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashbroadService {
  constructor() {}
  bigChart() {
    return [
      {
        name: 'Hồ Chí Minh',
        data: [
          0, 32000000, 42000000, 52000000, 72000000, 82000000, 99000000, 122000000, 132000000,  142000000, 132000000, 89000000,
          0,
        ],
      },
      {
        name: 'Đà Nẳng',
        data: [
          0, 12000000, 22000000, 33000000, 22000000, 44000000, 55000000, 72000000, 77000000,  66000000, 82000000, 69000000,
          0,
        ],
      },
      {
        data: [
          0, 32000000, 22000000, 33000000, 44000000, 55000000, 99000000, 122000000, 132000000,  142000000, 132000000, 99000000,
          0,
        ],
      }
    ];
  }
  cardChart() {
    return [0, 78, 39, 66];
  }
  pieChart() {
    return [
      {
        name: 'gaming',
        y: 61.41,
        sliced: true,
        selected: true,
      },
      {
        name: 'Văn phòng',
        y: 11.84,
      },
      {
        name: 'Server',
        y: 10.85,
      },
      {
        name: 'Render video',
        y: 15.9,
      },
    ];
  }
}
