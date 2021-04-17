import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilaPeliculaComponent } from './fila-pelicula.component';

describe('FilaPeliculaComponent', () => {
  let component: FilaPeliculaComponent;
  let fixture: ComponentFixture<FilaPeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilaPeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
