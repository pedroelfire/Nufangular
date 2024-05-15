import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { JackService } from 'src/app/services/jack.service';
import { Message } from 'src/types';
import { Subject, switchMap, startWith, takeUntil } from 'rxjs';

@Component({
  selector: 'app-jack-card',
  templateUrl: './jack-card.component.html',
  styleUrls: ['./jack-card.component.scss'],
})
export class JackCardComponent {
  @Input() isDisplayed!: boolean;

  @ViewChild('container') containerRef!: ElementRef;
  @ViewChild('fixedElement') fixedElementRef!: ElementRef;
  @ViewChild('chatBottom') chatBottomRef!: ElementRef;

  // How to fetch last conversation when the component is loaded
  conversationID: number = 1;
  private resizeObserver!: ResizeObserver;
  private destroy$ = new Subject<void>(); // For cleanup
  private conversationID$ = new Subject<number>(); // To trigger new conversation fetches

  // Not waiting for Jack to reply
  jackReplied = true;

  constructor(
    private db: JackService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  messages!: Message[];

  ngOnInit() {
    // Combine the initial conversation ID with the ID change stream
    this.conversationID$
      .pipe(
        startWith(this.conversationID), // Begin with the current conversation ID
        switchMap((id) => this.db.fetchConversation(id)), // Fetch data for new IDs
        takeUntil(this.destroy$) // Unsubscribe on component destruction
      )
      .subscribe((response) => {
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
    this.chatBottomRef.nativeElement.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    });
    this.changeDetectorRef.detectChanges(); // Trigger change detection explicitly
  }

  ngOnDestroy() {
    this.resizeObserver.disconnect(); // Disconnect observer when the component is destroyed
    window.removeEventListener('resize', this.positionFixedElement); // Remove the resize event listener

    this.destroy$.next(); // Signal to unsubscribe
    this.destroy$.complete(); // Complete the subject
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

  handleConversationIDChange(id: number) {
    this.conversationID$.next(id); // Trigger a new fetch
  }

  newMessageHandler(msg: Message) {
    this.jackReplied = false;
    this.messages.push(msg);

    this.db.sendUserMessage(msg).subscribe((response) => {
      console.log(response);
      this.messages[this.messages.length - 1].response = response.response;
      this.jackReplied = true;
    });
  }
}
