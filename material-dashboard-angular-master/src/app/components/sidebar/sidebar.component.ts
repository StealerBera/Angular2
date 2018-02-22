import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: '성장지원',  icon: 'dashboard', class: '' },
    { path: 'subscription', title: '서비스가입',  icon:'info', class: '' },
    { path: 'table-list', title: '과목등록',  icon:'content_paste', class: '' },
    { path: 'typography', title: '강사등록',  icon:'library_books', class: '' },
    { path: 'icons', title: '학교등록',  icon:'bubble_chart', class: '' },
    { path: 'maps', title: '성적등록',  icon:'location_on', class: '' },
    { path: 'notifications', title: '학생정보',  icon:'person', class: '' },
    { path: 'user-profile', title: '개인별 학업 현황',  icon:'assessment', class: '' },
    { path: '2', title: '전체 학업 현황',  icon:'assignment', class: '' },
    { path: '3', title: '전체출결/보강현황',  icon:'content_paste', class: '' },
    { path: '4', title: '상담',  icon:'face', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
