import { Component, DoCheck, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  /* A decorator that is used to inject an element into a component or directive. */
  @ViewChild('list', { static: false }) list!: ElementRef;
  @ViewChild('nofound', { static: false }) nofound!: ElementRef;
  /* Creating an event emitter that emits data to the parent component. */
  @Output() searchWeather = new EventEmitter<any>();
  form!: FormGroup;
  result: any;
  noResults: boolean = false;

  constructor(private fb: FormBuilder, private weatherservice: WeatherService, private renderer: Renderer2) { }

  /**
   * The function creates a form group with a single form control called city. The form control is
   * required
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      city: ['', Validators.required]
    });
  }

  /**
   * If the form is valid, then we call the searchWeather function in the weatherservice and subscribe to
   * the data that is returned
   */
  onSubmit(): void {
    if (this.form.valid) {
      this.weatherservice.searchWeather(this.form.value.city)
        .subscribe((data: any) => {
          this.validateSearch(data)
        });
    }
  }

  /**
   * If the search returns results, display them, otherwise, hide the list and display a message
   */
  validateSearch(data: any) {
    if (data.length) {
      this.result = data
      this.renderer.setStyle(this.list.nativeElement, 'display', 'block');
      this.renderer.setStyle(this.nofound.nativeElement, 'visibility', 'hidden');
    } else {
      this.renderer.setStyle(this.list.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.nofound.nativeElement, 'visibility', 'visible');
    }
  }

  /**
   * It takes a number, converts it to a string, and returns the string with only 3 decimal places
   */
  limitDecimals(data: number) {
    return data.toFixed(3);
  }

  /**
   * "When the user clicks outside of the list, hide the list."
   * 
   */
  hideList() {
    this.renderer.setStyle(this.list.nativeElement, 'display', 'none');
  }
  
  /**
   * It takes the data from the search input and emits it to the parent component
   */
  selectElement(data: any) {
    this.searchWeather.emit(data)
    /* Setting the display property of the list element to none. */
    this.renderer.setStyle(this.list.nativeElement, 'display', 'none');
  }

}