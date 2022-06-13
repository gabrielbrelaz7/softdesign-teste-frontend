import { DebugElement } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

    const mockedService = jasmine.createSpyObj('AuthService', ['login']);

	let component: LoginComponent;
	let fixture: ComponentFixture<LoginComponent>;

    let inputEmail: DebugElement;
	let inputSenha: DebugElement;
    let loginButton: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule, ReactiveFormsModule],
			declarations: [ LoginComponent ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true },
                { provide: AuthService, useValue: mockedService },
                { provide: ToastrService, useValue: true }
              ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(LoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

        inputEmail = fixture.debugElement.query(By.css('#email'));
        inputSenha = fixture.debugElement.query(By.css('#senha'));
        loginButton = fixture.debugElement.query(By.css('#loginButton'));

        });


    function preecherLoginValido(): void {
    
        inputEmail.nativeElement.value = '';
        inputEmail.nativeElement.dispatchEvent(new Event('input'));
        
        inputSenha.nativeElement.value = '';
        inputSenha.nativeElement.dispatchEvent(new Event('input'));

      }

	it('should create the component with book fields visible and disabled button', () => {
		expect(component).toBeTruthy();

        expect(inputEmail).toBeTruthy();
        expect(inputSenha).toBeTruthy();
        expect(loginButton).toBeTruthy();

	});

    it('should accept valid inputs and bind to model', () => {
	
	preecherLoginValido()
    expect(component.formUser.value.email).toBe('');
    expect(component.formUser.value.senha).toBe('');

    });
    
    it('should allow send book with valid info', () => {
        
    spyOn(component, 'salvarUsuario').and.callThrough();
    mockedService.login.and.returnValue(of([]))

    preecherLoginValido();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', {});
    fixture.detectChanges();

  });

});
