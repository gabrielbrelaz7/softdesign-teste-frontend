import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

	let httpClient = HttpClient;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [HttpClient],
			declarations: [ LoginComponent ],
			providers: [
                { provide: HttpClient, useValue: true }
              ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});


	// it('should create', () => {
	// 	expect(component).toBeTruthy();
	// });
});
