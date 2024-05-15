import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { JackService } from 'src/app/services/jack.service';
import { Message } from 'src/types';

@Component({
  selector: 'app-jack-card',
  templateUrl: './jack-card.component.html',
  styleUrls: ['./jack-card.component.scss'],
})
export class JackCardComponent {
  @Input() isDisplayed!: boolean;

  @ViewChild('container') containerRef!: ElementRef;
  @ViewChild('fixedElement') fixedElementRef!: ElementRef;

  conversationID: number = 1;
  private resizeObserver!: ResizeObserver;

  // Not waiting for Jack to reply
  jackReplied = true;

  constructor(
    private db: JackService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  messages!: Message[];

  ngOnInit() {
    this.db.fetchConversation(this.conversationID).subscribe((response) => {
      this.messages = response.data;
    });
  }

  ngAfterViewInit() {
    // RequestAnimationFrame and setTimeout for initial positioning
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.positionFixedElement();
      }, 0); // Execute immediately after the current event loop
    });

    // Observe changes in the container's size
    this.resizeObserver = new ResizeObserver(() => {
      this.positionFixedElement();
    });
    this.resizeObserver.observe(this.containerRef.nativeElement);

    // Add an event listener for window resize
    window.addEventListener('resize', () => this.positionFixedElement());
  }

  // Use ngAfterViewChecked to ensure all changes have been processed
  ngAfterViewChecked() {
    // Call positionFixedElement again after Angular has completed its change detection cycle
    this.positionFixedElement();
    this.changeDetectorRef.detectChanges(); // Trigger change detection explicitly
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect(); // Disconnect observer when the component is destroyed
    window.removeEventListener('resize', this.positionFixedElement); // Remove the resize event listener
  }

  positionFixedElement() {
    if (this.containerRef && this.fixedElementRef) {
      const containerRect =
        this.containerRef.nativeElement.getBoundingClientRect();
      const fixedElement = this.fixedElementRef.nativeElement;

      // Calculate and set the position
      fixedElement.style.bottom = `${
        window.innerHeight - containerRect.bottom
      }px`; // Adjust as needed
    }
  }

  newMessageHandler(msg: Message) {
    this.jackReplied = false;
    this.messages.push(msg);

    // TODO: Send message to Jack and wait for reply

    this.jackReplied = true;
    // if (this.jackReplied) {
    //   const response: Message = {
    //     role: 'jack',
    //     message: 'I am Jack, how can I help you?',
    //   };

    //   this.messages.push(response);
    // }
  }
}
