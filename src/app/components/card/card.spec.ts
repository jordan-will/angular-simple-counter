import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from './card';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser'

@Component({
  selector: 'host-component',
  template: '<app-card [count]="count"></app-card>',
  standalone: true,
  imports: [Card]
})
class HostComponent{
  count = 0
}

describe('Card', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial count', () => {
    const h1 = fixture.debugElement.query(
      By.css('h1')
    ).nativeElement
    expect(h1.textContent.trim()).toBe('0')
  })

  it('should update count when input changes', () => {
    component.count = 42
    fixture.detectChanges()
    const h1 = fixture.debugElement.query(
      By.css('h1')
    ).nativeElement
    expect(h1.textContent.trim()).toBe('42')
  })

});
