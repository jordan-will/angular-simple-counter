import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Button, ButtonType } from './button';
import { By } from '@angular/platform-browser'

import { Component } from '@angular/core';

@Component({
  standalone: true,
  imports: [Button],
  template: `<app-button 
                [type]="type"
                (action)="handleAction()"
              ></app-button>`
})
class TestHostComponent {
  type: 'increment' | 'decrement' | 'reset' = 'increment';
  actionTrigged = false
  handleAction() {
    this.actionTrigged = true
  }
}


describe('Button', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display correct label for each type', () => {
    const types = {
      increment: '+',
      decrement: '-',
      reset: '⭯'
    };

    for (const [type, expectedLabel] of Object.entries(types)) {
      component.type = (type as ButtonType)
      fixture.detectChanges()
      const button = fixture.debugElement.query(
        By.css('button')
      ).nativeElement
      expect(button.textContent.trim()).toBe(expectedLabel)
    }
  })

  it('should set correct background color based on type', () => {
    const typeColors = {
      increment: 'green',
      decrement: 'crimson',
      reset: 'gray'
    };

    for (const [type, expectColor] of Object.entries(typeColors)) {
      component.type = (type as any)
      fixture.detectChanges()
      const button = fixture.debugElement.query(
        By.css('button')
      ).nativeElement
      expect(button.style.backgroundColor).toBe(expectColor)
    }
  })

  it('should emit action when button clicked', () => {
    const button = fixture.debugElement.query(
      By.css('button')
    ).nativeElement
    button.click()
    fixture.detectChanges()
    expect(component.actionTrigged).toBeTrue()
  })

});
