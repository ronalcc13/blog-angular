import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosYHabilidades } from './cursos-y-habilidades';

describe('CursosYHabilidades', () => {
  let component: CursosYHabilidades;
  let fixture: ComponentFixture<CursosYHabilidades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CursosYHabilidades]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosYHabilidades);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
