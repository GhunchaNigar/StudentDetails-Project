
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormBuilder } from '@angular/forms';
import { DashboardService } from '../dashboard.service';

@Component({
	selector: 'students-details-landing',
	templateUrl: './landing.component.html',
	styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
	filter: FormControl;
	students: Array<any>=[
		{
			"name": "Paul Spencer",
			"city": "Fort Freidafield",
			"studentImage": "./assets/1.jpg",
			"state": "VT",
			"country": "Kazakhstan",
			"physics": 11,
			"chemistry": 21,
			"maths": 6,
			"computer": 5
		}
		,
		{
			"name": "Joseph Bergnaum",
			"city": "Cartwrightworth",
			"studentImage": "./assets/2.jpg",
			"state": "VA",
			"country": "Jordan",
			"physics": 25,
			"chemistry": 2,
			"maths": 4,
			"computer": 9
		}
		,
		{
			"name": "Miss Arnold Kris",
			"city": "Goldnerfort",
			"studentImage": "./assets/3.jpg",
			"state": "VT",
			"country": "Rwanda",
			"physics": 7,
			"chemistry": 18,
			"maths": 13,
			"computer": 9
		}
		,
		{
			"name": "Wendell Labadie",
			"city": "Karellechester",
			"studentImage": "./assets/4.jpg",
			"state": "CO",
			"country": "Namibia",
			"physics": 14,
			"chemistry": 19,
			"maths": 12,
			"computer": 15
		}
		,
		{
			"name": "Faye Raynor",
			"city": "Lake Darienfort",
			"studentImage": "./assets/5.jpg",
			"state": "FL",
			"country": "Mauritania",
			"physics": 15,
			"chemistry": 15,
			"maths": 8,
			"computer": 25
		}
		,
		{
			"name": "Mrs. Michael Haley",
			"city": "Fort Spencerview",
			"studentImage": "./assets/6.jpg",
			"state": "ND",
			"country": "Niue",
			"physics": 13,
			"chemistry": 8,
			"maths": 6,
			"computer": 18
		}
		,
		{
			"name": "Salvatore Senger",
			"city": "Lake Hesterburgh",
			"studentImage": "./assets/7.jpg",
			"state": "AL",
			"country": "Libyan Arab Jamahiriya",
			"physics": 18,
			"chemistry": 19,
			"maths": 15,
			"computer": 13
		}
		,
		{
			"name": "Monique Windler",
			"city": "West Wava",
			"studentImage": "./assets/8.jpg",
			"state": "RI",
			"country": "Liberia",
			"physics": 12,
			"chemistry": 19,
			"maths": 21,
			"computer": 12
		}
		,
		{
			"name": "Melissa Mertz",
			"city": "Medhurstville",
			"studentImage": "./assets/9.jpg",
			"state": "NM",
			"country": "Egypt",
			"physics": 25,
			"chemistry": 21,
			"maths": 23,
			"computer": 1
		}
		,
		{
			"name": "Darin Leuschke",
			"city": "Hoover",
			"studentImage": "./assets/10.jpg",
			"state": "IL",
			"country": "South Georgia and the South Sandwich Islands",
			"physics": 5,
			"chemistry": 21,
			"maths": 1,
			"computer": 7
		}
		,
		{
			"name": "Rosalie Lindgren",
			"city": "Kozeyland",
			"studentImage": "./assets/11.jpg",
			"state": "IA",
			"country": "Republic of Korea",
			"physics": 23,
			"chemistry": 13,
			"maths": 25,
			"computer": 16
		}
		,
		{
			"name": "Micheal Streich",
			"city": "Lydaworth",
			"studentImage": "./assets/12.jpg",
			"state": "ID",
			"country": "Taiwan",
			"physics": 14,
			"chemistry": 19,
			"maths": 6,
			"computer": 4
		}
		,
		{
			"name": "Dana McGlynn",
			"city": "Alannacester",
			"studentImage": "./assets/13.jpg",
			"state": "NJ",
			"country": "Senegal",
			"physics": 19,
			"chemistry": 17,
			"maths": 0,
			"computer": 25
		}
		,
		{
			"name": "Christy Hessel",
			"city": "East Zander",
			"studentImage": "./assets/1.jpg",
			"state": "ME",
			"country": "Guernsey",
			"physics": 19,
			"chemistry": 3,
			"maths": 21,
			"computer": 1
		}
		,
		{
			"name": "Stewart Hoppe",
			"city": "East Hayleeton",
			"studentImage": "./assets/2.jpg",
			"state": "CO",
			"country": "Northern Mariana Islands",
			"physics": 2,
			"chemistry": 8,
			"maths": 20,
			"computer": 11
		}
		,
		{
			"name": "Olga Schmeler",
			"city": "Bechtelarside",
			"studentImage": "./assets/3.jpg",
			"state": "WI",
			"country": "French Southern Territories",
			"physics": 9,
			"chemistry": 10,
			"maths": 9,
			"computer": 13
		}
		,
		{
			"name": "Marco Brakus",
			"city": "South Hill",
			"studentImage": "./assets/4.jpg",
			"state": "MD",
			"country": "Sao Tome and Principe",
			"physics": 0,
			"chemistry": 23,
			"maths": 23,
			"computer": 23
		}
		,
		{
			"name": "Peter Zulauf",
			"city": "Chicago",
			"studentImage": "./assets/5.jpg",
			"state": "MA",
			"country": "Netherlands",
			"physics": 2,
			"chemistry": 17,
			"maths": 19,
			"computer": 0
		}
		,
		{
			"name": "Sally McKenzie",
			"city": "Boca Raton",
			"studentImage": "./assets/6.jpg",
			"state": "VT",
			"country": "Mexico",
			"physics": 21,
			"chemistry": 5,
			"maths": 25,
			"computer": 13
		}
		,
		{
			"name": "Gregg Paucek",
			"city": "Cristopherview",
			"studentImage": "./assets/7.jpg",
			"state": "NJ",
			"country": "Bhutan",
			"physics": 21,
			"chemistry": 14,
			"maths": 2,
			"computer": 10
		}
	];
	
	constructor(
		private fb: FormBuilder,
		private dashboardServic: DashboardService
	) {
        this.filter = this.fb.control("", { nonNullable: true });
	}

	ngOnInit(): void {
		this.dashboardServic.callGetStudentsRecord().subscribe(
			(res: any) => {
				this.students = res;
			}
		);
	}
}
