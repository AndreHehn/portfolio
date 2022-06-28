import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadpictureComponent } from './headpicture.component';

describe('HeadpictureComponent', () => {
  let component: HeadpictureComponent;
  let fixture: ComponentFixture<HeadpictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadpictureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadpictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
