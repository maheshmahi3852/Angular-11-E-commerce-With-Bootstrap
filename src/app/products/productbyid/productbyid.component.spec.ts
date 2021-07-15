import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ProductbyidComponent } from './productbyid.component';
import { RouterTestingModule } from "@angular/router/testing";

describe('ProductbyidComponent', () => {
  let component: ProductbyidComponent;
  let fixture: ComponentFixture<ProductbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductbyidComponent],
      imports: [NgModule, ActivatedRoute, RouterTestingModule]

    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
