import { Injectable } from '@angular/core';

declare const YT: any;

@Injectable({
  providedIn: 'root',
})
export class YoutubePlayerService {
  private player!: YT.Player;
  private playlist!: string[];
  private isPlaying: boolean = false;

  getPlayer(): YT.Player {
    return this.player;
  }

  createPlayer(container: HTMLElement, playlistId: string): void {
    this.player = new YT.Player(container, {
      height: '360',
      width: '640',
      playerVars: {
        listType: 'playlist',
        list: playlistId,
      },
      events: {
        onReady: () => {
          this.playlist = this.player.getPlaylist();
          this.player.setShuffle(true);
          this.player.playVideoAt(0);
          this.player.playVideo();
          this.player.setLoop(true);
        },
      },
    });
  }
  destroy(): void {
    // Clean up the player instance when leaving the component
    if (this.player) {
      this.player.destroy();
    }
  }

  togglePlayback(): void {
    this.isPlaying = !this.isPlaying;
    // Add logic to control the playback based on this.isPlaying
  }

  isMusicPlaying(): boolean {
    return this.isPlaying;
  }
}
