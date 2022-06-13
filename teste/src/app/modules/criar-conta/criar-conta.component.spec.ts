import { DebugElement } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';
import { CriarContaComponent } from './criar-conta.component';

describe('CriarContaComponent', () => {

    const mockedService = jasmine.createSpyObj('AuthService', ['criarUsuario']);

	let component: CriarContaComponent;
	let fixture: ComponentFixture<CriarContaComponent>;

    let inputNome: DebugElement;
    let inputEmail: DebugElement;
	let inputSenha: DebugElement;
    let createButton: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule, ReactiveFormsModule],
			declarations: [ CriarContaComponent ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true },
                { provide: AuthService, useValue: mockedService },
                { provide: ToastrService, useValue: true }
              ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(CriarContaComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

        inputNome = fixture.debugElement.query(By.css('#nome'));
        inputEmail = fixture.debugElement.query(By.css('#email'));
        inputSenha = fixture.debugElement.query(By.css('#senha'));
        createButton = fixture.debugElement.query(By.css('#createButton'));

        });


    function preecherUsuarioValido(): void {
        inputNome.nativeElement.value = '';
        inputNome.nativeElement.dispatchEvent(new Event('input'));
    
        inputEmail.nativeElement.value = '';
        inputEmail.nativeElement.dispatchEvent(new Event('input'));
    
        inputSenha.nativeElement.value = '';
        inputSenha.nativeElement.dispatchEvent(new Event('input'));

      }

	it('should create the component with book fields visible and disabled button', () => {
		expect(component).toBeTruthy();

        expect(inputNome).toBeTruthy();
        expect(inputEmail).toBeTruthy();
        expect(inputSenha).toBeTruthy();
        expect(createButton).toBeTruthy();

	});

    it('should accept valid inputs and bind to model', () => {
	
	preecherUsuarioValido()
    expect(component.formUser.value.nome).toBe('');
    expect(component.formUser.value.email).toBe('');
    expect(component.formUser.value.senha).toBe('');

    });
    
    it('should allow send book with valid info', () => {
        
    spyOn(component, 'salvarUsuario').and.callThrough();
    mockedService.criarUsuario.and.returnValue(of([]))

    preecherUsuarioValido();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', {});
    fixture.detectChanges();

  });

});
