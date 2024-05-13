import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';

@Component({
  selector: 'app-jack-message-composer',
  templateUrl: './jack-message-composer.component.html',
  styleUrls: ['./jack-message-composer.component.scss'],
})
export class JackMessageComposerComponent {
  @Output() newMessageEvent = new EventEmitter<string>();

  messageForm: FormGroup;
  isRecording = false;
  audioBlob: Blob | null = null;
  audioUrl: string | null = null;
  private subscription!: Subscription;

  constructor(private audioRecordingService: AudioRecordingService) {
    this.messageForm = new FormGroup({
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
      ]),
    });
  }

  ngOnInit() {
    this.subscription = this.audioRecordingService.audioBlob$.subscribe(
      (blob) => {
        this.audioBlob = blob;
        this.audioUrl = URL.createObjectURL(blob); // Create URL for audio playback
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleMicClick() {
    if (this.isRecording) {
      this.stopRecording();
    } else {
      this.startRecording();
    }
  }

  startRecording() {
    this.isRecording = true;
    this.audioRecordingService.startRecording();
  }

  stopRecording() {
    this.isRecording = false;
    this.audioRecordingService.stopRecording();
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
