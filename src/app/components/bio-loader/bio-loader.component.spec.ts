import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioLoaderComponent } from './bio-loader.component';

describe('BioLoaderComponent', () => {
  let component: BioLoaderComponent;
  let fixture: ComponentFixture<BioLoaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BioLoaderComponent]
    });
    fixture = TestBed.createComponent(BioLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
