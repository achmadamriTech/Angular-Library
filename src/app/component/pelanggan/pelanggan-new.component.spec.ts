import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PelangganNewComponent } from './pelanggan-new.component';

describe('PelangganNewComponent', () => {
  let component: PelangganNewComponent;
  let fixture: ComponentFixture<PelangganNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PelangganNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PelangganNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
