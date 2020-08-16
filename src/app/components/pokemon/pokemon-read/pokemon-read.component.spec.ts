import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonReadComponent } from './pokemon-read.component';

describe('PokemonReadComponent', () => {
  let component: PokemonReadComponent;
  let fixture: ComponentFixture<PokemonReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
