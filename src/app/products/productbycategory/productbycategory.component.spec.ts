import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { ProductbycategoryComponent } from './productbycategory.component';

describe('ProductbycategoryComponent', () => {
  let component: ProductbycategoryComponent;
  let fixture: ComponentFixture<ProductbycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductbycategoryComponent ],
      imports: [HttpClientModule,ActivatedRoute] 

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
