import { Component, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { PORTFOLIO_DATA } from './main-page-data';

@Component({
  selector: 'app-portfolio-main-page',
  templateUrl: './portfolio-main-page.component.html',
  styleUrl: './portfolio-main-page.component.sass'
})
export class PortfolioMainPageComponent {
  @ViewChildren('scrollTarget') elements!: QueryList<ElementRef>
  private elementMap: Record<string, ElementRef> = {}
  // This should be equal to the pixel height of the navbar
  private readonly scrollOffset = 60
  data: any = PORTFOLIO_DATA
  relativeImagePath: string = '../../../../assets/'

  ngAfterViewInit() {
    this.elements.forEach((element: ElementRef) => {
      this.elementMap[element.nativeElement.id] = element
    })
  }

  scrollToElementWithOffset(targetElement: string): void {
    const elementRef = this.elementMap[targetElement]
    if(elementRef) {
      const elementRect = elementRef.nativeElement.getBoundingClientRect()
      const absoluteElementTop = elementRect.top + window.scrollY
      const scrollTop = absoluteElementTop - this.scrollOffset
      window.scrollTo({top: scrollTop, behavior: 'smooth'})
    }
  }
}
