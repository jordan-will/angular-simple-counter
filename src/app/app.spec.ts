import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { By } from '@angular/platform-browser'

describe('App', () => {

  let fixture: ComponentFixture<App>
  let componet: App

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
    fixture = TestBed.createComponent(App)
    componet = fixture.componentInstance
    fixture.detectChanges()
  });

  it('should create the app', () => {
    expect(true).toBeTrue();
  });

  it('should display initial count 0', () => {
    const cardCount = fixture.debugElement.query(
      By.css('app-card h1')
    ).nativeElement
    expect(cardCount.textContent.trim()).toBe('0')
  })

  it('should increment the count when increment button is clicked', () => {
    const incrementBtn = fixture.debugElement.queryAll(
      By.css('app-button button')
    ).find(btn => btn.nativeElement.textContent.trim() === '+')

    incrementBtn?.nativeElement.click()
    fixture.detectChanges()

    const cardCount = fixture.debugElement.query(
      By.css('app-card h1')
    ).nativeElement
    expect(cardCount.textContent.trim()).toBe('1')
  })

  it('should decrement the count when decrement button is clicked', () => {
    componet.count.set(1)
    fixture.detectChanges()

    const decrementBtn = fixture.debugElement.queryAll(
      By.css('app-button button')
    ).find(btn => btn.nativeElement.textContent.trim() === '-')

    decrementBtn?.nativeElement.click()
    fixture.detectChanges()

    const cardCount = fixture.debugElement.query(
      By.css('app-card h1')
    ).nativeElement
    expect(cardCount.textContent.trim()).toBe('0')
  })

  it('should reset the count when reset button is clicked', () => {
    componet.count.set(10)
    fixture.detectChanges()

    const resetBtn = fixture.debugElement.queryAll(
      By.css('app-button button')
    ).find(btn => btn.nativeElement.textContent.trim() === '⭯')

    resetBtn?.nativeElement.click()
    fixture.detectChanges()

    const cardBtn = fixture.debugElement.query(
      By.css('app-card h1')
    ).nativeElement
    expect(cardBtn.textContent.trim()).toBe('0')
  })

});
