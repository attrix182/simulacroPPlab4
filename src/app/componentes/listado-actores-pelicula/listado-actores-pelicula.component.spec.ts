import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoActoresPeliculaComponent } from './listado-actores-pelicula.component';

describe('ListadoActoresPeliculaComponent', () => {
  let component: ListadoActoresPeliculaComponent;
  let fixture: ComponentFixture<ListadoActoresPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoActoresPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoActoresPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
