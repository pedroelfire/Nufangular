import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-jack-message-composer',
  templateUrl: './jack-message-composer.component.html',
  styleUrls: ['./jack-message-composer.component.scss'],
})
export class JackMessageComposerComponent {
  @Output() newMessageEvent = new EventEmitter<string>();

  messageForm: FormGroup;

  constructor() {
    this.messageForm = new FormGroup({
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  isRecording = false;

  startRecording() {
    this.isRecording = true;
  }

  submitMessage() {
    if (this.messageForm.valid) {
      const message = this.messageForm.get('message')?.value;
      console.log('submitMessage', message);

      this.newMessageEvent.emit(message);
      this.messageForm.reset();
    } else {
      console.log('Invalid form');
    }
  }
}
