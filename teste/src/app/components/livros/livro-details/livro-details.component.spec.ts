import { DebugElement } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { LivroService } from '../livro.service';
import { LivroDetailsComponent } from './livro-details.component';

describe('LivroDetailsComponent', () => {

	let component: LivroDetailsComponent;
	let fixture: ComponentFixture<LivroDetailsComponent>;

    let inputNome: DebugElement;
    let inputAutor: DebugElement;
    let inputPaginas: DebugElement;
    let inputSinopse: DebugElement;
    let editButton: DebugElement;
    let deleteButton: DebugElement;
    let alugarButton: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule, ReactiveFormsModule],
        
			declarations: [ LivroDetailsComponent ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true },
                { provide: LivroService, useValue: true },
                { provide: ToastrService, useValue: true }
            ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(LivroDetailsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

        inputNome = fixture.debugElement.query(By.css('#nome'));
        inputAutor = fixture.debugElement.query(By.css('#autor'));
        inputPaginas = fixture.debugElement.query(By.css('#paginas'));
        inputSinopse = fixture.debugElement.query(By.css('#sinopse'));
        editButton = fixture.debugElement.query(By.css('#editButton'));
        deleteButton = fixture.debugElement.query(By.css('#deleteButton'));
        alugarButton = fixture.debugElement.query(By.css('#alugarButton'));

        });


    function preecherDetalhesValido(): void {
        inputNome.nativeElement.value = '';
        inputNome.nativeElement.dispatchEvent(new Event('input'));
    
        inputAutor.nativeElement.value = '';
        inputAutor.nativeElement.dispatchEvent(new Event('input'));
    
        inputPaginas.nativeElement.value = 123;
        inputPaginas.nativeElement.dispatchEvent(new Event('input'));
    
        inputSinopse.nativeElement.value = [];
        inputSinopse.nativeElement.dispatchEvent(new Event('input'));
      }

	it('should update the component with book fields visible', () => {
		expect(component).toBeTruthy();

        expect(inputNome).toBeTruthy();
        expect(inputAutor).toBeTruthy();
        expect(inputPaginas).toBeTruthy();
        expect(inputSinopse).toBeTruthy();

        expect(editButton).toBeTruthy();
        expect(deleteButton).toBeTruthy();
        expect(alugarButton).toBeTruthy();

	});

    it('should accept valid inputs and bind to model', () => {
    preecherDetalhesValido();

    expect(component.livro.nome).toBe('');
    expect(component.livro.autor).toBe('');
    expect(component.livro.sinopse).toEqual([]);
    expect(component.livro.alugado).toBe(false);

    });
    
    it('should allow update book with valid info', () => {
        
    spyOn(component, 'updateLivro').and.callThrough();
    spyOn(component, 'alugarLivro').and.callThrough();
    spyOn(component, 'deleteLivro').and.callThrough();

    preecherDetalhesValido();
    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('submit', {});
    fixture.detectChanges();


  });

});


