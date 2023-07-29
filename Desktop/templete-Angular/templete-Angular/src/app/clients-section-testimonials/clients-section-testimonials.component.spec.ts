import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSectionTestimonialsComponent } from './clients-section-testimonials.component';

describe('ClientsSectionTestimonialsComponent', () => {
  let component: ClientsSectionTestimonialsComponent;
  let fixture: ComponentFixture<ClientsSectionTestimonialsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsSectionTestimonialsComponent]
    });
    fixture = TestBed.createComponent(ClientsSectionTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
