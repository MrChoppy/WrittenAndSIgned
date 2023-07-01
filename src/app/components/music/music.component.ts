import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

declare const YT: any;

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css'],
})
export class MusicComponent implements OnInit, AfterViewInit {
  @ViewChild('playerContainer') playerContainer!: ElementRef;

  private player!: YT.Player;
  private playlist!: string[];

  constructor() {}

  ngOnInit(): void {
    // Load the YouTube IFrame Player API script
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // Create the YouTube player when the API is ready
    (window as any).onYouTubeIframeAPIReady = () => {
      this.createPlayer();
    };
  }

  ngAfterViewInit(): void {
    // Check if the player is already created (e.g., when navigating back to the component)
    if (!this.player) {
      this.createPlayer();
    }
  }

  private createPlayer(): void {
    this.player = new YT.Player(this.playerContainer.nativeElement, {
      height: '100%',
      width: '100%',
      playerVars: {
        listType: 'playlist',
        list: 'PL0-CC0wnkO3LaIybeMKNqKYHblhzO-nst', // Replace with the YouTube playlist ID you want to play
      },
      events: {
        onReady: () => {
          // Get the playlist
          this.playlist = this.player.getPlaylist();

          // Start playing the playlist
          this.player.setShuffle(true);
          this.player.playVideoAt(0);
          this.player.playVideo();
          this.player.setLoop(true);
        },
      },
    });
  }
}
