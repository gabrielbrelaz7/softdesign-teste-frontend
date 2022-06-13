import { DebugElement } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { LivroService } from '../livro.service';
import { LivroCreateComponent } from './livro-create.component';

describe('LivroCreateComponent', () => {

    const mockedService = jasmine.createSpyObj('LivroService', ['create']);

	let component: LivroCreateComponent;
	let fixture: ComponentFixture<LivroCreateComponent>;

    let inputNome: DebugElement;
    let inputAutor: DebugElement;
    let inputPaginas: DebugElement;
    let inputSinopse: DebugElement;
    let buttonSubmit: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule, ReactiveFormsModule],
			declarations: [ LivroCreateComponent ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true },
                { provide: LivroService, useValue: mockedService },
                { provide: ToastrService, useValue: true }
              ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(LivroCreateComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

        inputNome = fixture.debugElement.query(By.css('#nome'));
        inputAutor = fixture.debugElement.query(By.css('#autor'));
        inputPaginas = fixture.debugElement.query(By.css('#paginas'));
        inputSinopse = fixture.debugElement.query(By.css('#sinopse'));
        buttonSubmit = fixture.debugElement.query(By.css('#submit'));

        });


    function preecherLivroValido(): void {
        inputNome.nativeElement.value = 'Livro Teste';
        inputNome.nativeElement.dispatchEvent(new Event('input'));
    
        inputAutor.nativeElement.value = 'Autor Teste';
        inputAutor.nativeElement.dispatchEvent(new Event('input'));
    
        inputPaginas.nativeElement.value = '123';
        inputPaginas.nativeElement.dispatchEvent(new Event('input'));
    
        inputSinopse.nativeElement.value = 'Sinopse Teste';
        inputSinopse.nativeElement.dispatchEvent(new Event('input'));
      }

	it('should create the component with book fields visible and disabled button', () => {
		expect(component).toBeTruthy();

        expect(inputNome).toBeTruthy();
        expect(inputAutor).toBeTruthy();
        expect(inputPaginas).toBeTruthy();
        expect(inputSinopse).toBeTruthy();

        expect(buttonSubmit).toBeTruthy();

        expect(buttonSubmit.properties.disabled).toBe(true);
	});

    it('should accept valid inputs and bind to model', () => {
    preecherLivroValido();

    expect(component.livro.nome).toBe('');
    expect(component.livro.autor).toBe('');
    expect(component.livro.paginas).toBe(123);
    expect(component.livro.sinopse).toEqual([]);
    expect(component.livro.alugado).toBe(false);

    });
    
    it('should allow create book with valid info', () => {
        
    spyOn(component, 'createLivro').and.callThrough();
    mockedService.create.and.returnValue(of([]))

    preecherLivroValido();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', {});
    fixture.detectChanges();

  });

});
