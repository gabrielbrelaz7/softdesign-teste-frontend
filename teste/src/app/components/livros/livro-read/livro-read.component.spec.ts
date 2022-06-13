import { DebugElement } from '@angular/core';
import { ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { LivroService } from '../livro.service';
import { LivroReadComponent } from './livro-read.component';

describe('LivroReadComponent', () => {

	let component: LivroReadComponent;
	let fixture: ComponentFixture<LivroReadComponent>;

    let table: DebugElement;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
            imports: [FormsModule, RouterTestingModule],
        
			declarations: [ LivroReadComponent ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true },
                { provide: LivroService, useValue: true },
                { provide: ToastrService, useValue: true }
            ]
		})
			.compileComponents();

		fixture = TestBed.createComponent(LivroReadComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();

        table = fixture.debugElement.query(By.css('tbody'));

        });


	it('should update the component with table visible', () => {
		expect(component).toBeTruthy();
        expect(table).toBeTruthy();

	});

    it('should accept valid inputs and bind to model', () => {
        expect(component.livros).toBeTruthy();
        expect(component.livros).toEqual([]);
    });
    
    it('should allow read book with valid info', () => {
        
    spyOn(component, 'showLivros').and.callThrough();
    spyOn(component, 'alugarLivro').and.callThrough();

    });

});


