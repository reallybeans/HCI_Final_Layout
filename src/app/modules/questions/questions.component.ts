import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA: PeriodicElements[] = [
  {
    id: 1,
    question: 'Bạn chơi game với mục đích gì?',
    type: 'gaming',
    answer1: 'Giải trí thông thường',
    answer2: 'Stream Game',
    answer3: 'Cày thuê',
  },
  {
    id: 2,
    question:
      'Bạn cần máy tính để bàn làm việc văn phòng, thiết kế nhỏ gọn, hình thức bắt mắt ?',
    type: 'văn phòng',
    answer1: 'Cần, vì thiết kế nhỏ gọn giúp đem đi dễ hơn',
    answer2: 'Không, vì không máy nhỏ quá khó làm việc.',
    answer3: '',
  },
  {
    id: 3,
    question: 'Bạn mua máy vì mục đích Thiết kế Animation hay 3D?',
    type: 'Thiết kế',
    answer1: 'Animation.',
    answer2: '3D.',
    answer3: '',
  },
  {
    id: 4,
    question: 'Bạn cần cấu hình cao để code không?',
    type: 'Coding',
    answer1: 'Không, vì code không cần cấu hình cao quá.',
    answer2: 'Cần, mình code những chương trình nặng.',
    answer3: '',
  },
  {
    id: 5,
    question: 'Bạn cần mua xây dựng PC vào mục đính gì?',
    type: 'Khác',
    answer1: 'Mình chỉ lướt web xem phim.',
    answer2: 'Mình mua để học.',
    answer3: '',
  },
];

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class QuestionsComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['id', 'type', 'question'];
  expandedElement: PeriodicElements | null | undefined;
  constructor() {}

  ngOnInit(): void {}
}

export interface PeriodicElements {
  id: number;
  question: string;
  type: string;
  answer1: string;
  answer2: string;
  answer3: string;
}
