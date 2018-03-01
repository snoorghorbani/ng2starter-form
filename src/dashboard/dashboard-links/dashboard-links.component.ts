import { Component, OnInit } from '@angular/core';
declare var particlesJS;
@Component({
        selector: 'user-dashboard-links',
        templateUrl: './dashboard-links.component.html',
        styleUrls: ['./dashboard-links.component.scss']
})
export class DashboardLinksComponent implements OnInit {
        links: any[];
        constructor() {
                this.links = [
                        {
                                title: "مشاهده حساب کاریری",
                                route: "/user/panel/profile",
                                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                                icon: "credit_card"

                        },
                        {
                                route: '/user/panel/password/change',
                                title: 'تغییر کلمه عبور',
                                description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم',
                                icon: 'security'
                        }
                ]
        }

        ngOnInit() {
        }
}