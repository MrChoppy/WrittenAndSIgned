import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirestoreService } from 'src/app/firestore.service';

@Component({
  selector: 'app-poem',
  templateUrl: './poem.component.html',
  styleUrls: ['./poem.component.css'],
})
export class PoemComponent implements OnInit {
  @ViewChild('colorPickerInput')
  colorPickerInput!: ElementRef<HTMLInputElement>;

  poem: any = {};

  firstPageLines: string[] = [];
  secondPageLines: string[] = [];
  isSecondPageVisible = false;
  selectedColor: string = '#000000'; // Default color is black
  isColorPickerOpen: boolean = false;
  loading: boolean = true;
  isMobile: boolean = false;

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit() {
    //this.firestoreService.addPoemsToCollection();
    this.firestoreService.getRandomPoem().subscribe(
      (poem: any) => {
        this.poem = poem;
        this.loading = false;
        const maxLinesPerPage = 17;

        if (this.poem.lines.length > maxLinesPerPage) {
          this.firstPageLines = this.poem.lines.slice(0, maxLinesPerPage);
          this.secondPageLines = this.poem.lines.slice(maxLinesPerPage);
          this.isSecondPageVisible = true;
        } else {
          this.firstPageLines = this.poem.lines;
          this.secondPageLines = [];
          this.isSecondPageVisible = false;
        }
      },
      (error: any) => {
        console.error('Failed to fetch poem:', error);
      }
    );

    this.isMobile = window.innerWidth <= 767;
  }
}
