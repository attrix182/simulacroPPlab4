import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeliculasActorComponent } from './listado-peliculas-actor.component';

describe('ListadoPeliculasActorComponent', () => {
  let component: ListadoPeliculasActorComponent;
  let fixture: ComponentFixture<ListadoPeliculasActorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPeliculasActorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPeliculasActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
