import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FirestoreService } from '../../firestore.service';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit {
  @ViewChild('colorPickerInput')
  colorPickerInput!: ElementRef<HTMLInputElement>;

  quote: any;

  selectedColor: string = '#000000'; // Default color is black
  isColorPickerOpen: boolean = false;
  loading: boolean = true;
  isColorInputSupported: boolean = true;

  private checkColorInputSupport() {
    const input = document.createElement('input');
    input.setAttribute('type', 'color');
    this.isColorInputSupported = input.type === 'color';
  }

  openColorPicker() {
    this.isColorPickerOpen = true;
    setTimeout(() => {
      this.colorPickerInput.nativeElement.click();
    }, 0);
  }

  constructor(private firestoreService: FirestoreService) {}

  ngOnInit(): void {
    //this.firestoreService.addQuotesToCollection();
    this.checkColorInputSupport();
    this.firestoreService.getRandomQuote().subscribe(
      (quote: any) => {
        this.quote = quote;
        this.loading = false;
      },
      (error: any) => {
        console.error('Failed to fetch quote:', error);
      }
    );
  }
}
