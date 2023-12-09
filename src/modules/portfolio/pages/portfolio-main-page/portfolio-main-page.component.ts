import { Component, ViewChildren, ViewChild, ElementRef, QueryList, AfterViewInit, Inject, HostListener } from '@angular/core';
import { PORTFOLIO_DATA } from './main-page-data';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-portfolio-main-page',
  templateUrl: './portfolio-main-page.component.html',
  styleUrl: './portfolio-main-page.component.sass'
})
export class PortfolioMainPageComponent {
  @ViewChildren('scrollTarget') elements!: QueryList<ElementRef>
  @ViewChild('sidebar') sidebar!: ElementRef
  private elementMap: Record<string, ElementRef> = {}
  // This should be equal to the pixel height of the navbar
  private readonly scrollOffset = 60
  private readonly largeBreakpoint = 992
  data: any = PORTFOLIO_DATA
  relativeImagePath: string = '../../../../assets/'
  githubWebAddress: string = 'https://github.com/heckmancareer'
  linkedInWebAddress: string = 'www.linkedin.com/in/nicholas-heckman-78094212a'

  constructor(@Inject(DOCUMENT) private document: Document){}

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
      this.closeSidebar()
    }
  }

  redirect(url: string): void {
    this.document.defaultView?.open(url, '_blank')
  }

  closeSidebar(): void {
    if(window.innerWidth <= this.largeBreakpoint) {
      this.sidebar.nativeElement.classList.add('fadeoutleft')
      setTimeout(() => {
        this.sidebar.nativeElement.classList.add('hidden')
        setTimeout(() => {
          this.sidebar.nativeElement.classList.remove('fadeoutleft')
        }, 300)
      }, 100)
    }
  }
}
