import { Component, OnInit, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from 'src/app/services/weather.service';
import { ClassGeocoding, InterfaceGeocoding } from 'src/app/models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  /* A decorator that is used to inject an element into a component or directive. */
  @ViewChild('list', { static: false }) list!: ElementRef;
  @ViewChild('nofound', { static: false }) nofound!: ElementRef;
  /* Creating an event emitter that emits data to the parent component. */
  @Output() searchWeather = new EventEmitter<InterfaceGeocoding>();
  /* Declaring the variables that will be used in the component. */
  form!: FormGroup;
  result: ClassGeocoding[] = []
  noResults: boolean = false;
  error: string = ""

  constructor(private fb: FormBuilder, private weatherservice: WeatherService, private renderer: Renderer2) { }

  /**
   * The function creates a form group with a single form control called city. The form control is
   * required
   */
  ngOnInit(): void {
    this.form = this.fb.group({
      city: ['', Validators.required],
    });
  }

  /**
   * The weatherservice function of the weather service is called, passing in the city name from the
   * form. If the form is valid, we're subscribing to the observable returned by the searchWeather
   * function. If the observable returns data, we're calling the validateSearch function. If the
   * observable returns an error, we're setting the error variable to the error message
   */
  onSubmit(): void {
    if (this.form.valid) {
      this.weatherservice.getDirectGeocoding(this.form.value.city).subscribe({
        /* Calling the validateSearch function and passing in the data from the observable. */
        next: (data) => {
          this.validateSearch(data);
        },
        /* Setting the error variable to the error message */
        error: (err) => {
          this.error = err.error.message;
        }
      });
    }
  }

  /**
   * If the search result is not empty, show the list of results and hide the "no results found" message.
   * If the search result is empty, hide the list of results and show the "no results found" message
   */
  validateSearch(data: ClassGeocoding[]): void {
    if (data.length) {
      /* Assigning the data to the result variable. */
      this.result = data;
      /* It sets the display style of the list to block. */
      this.renderer.setStyle(this.list.nativeElement, 'display', 'block');
      /* It sets the visibility style of the nofound element to hidden. */
      this.renderer.setStyle(this.nofound.nativeElement, 'visibility', 'hidden');
    } else {
      /* Set the display style of the list to none. */
      this.displayNone()
      /* It sets the visibility style of the nofound element to visible. */
      this.renderer.setStyle(this.nofound.nativeElement, 'visibility', 'visible');
    }
  }

  /**
   * It takes a number, converts it to a string, and returns the string with only 3 decimal places
   */
  limitDecimals(data: number) {
    /* It takes a number, converts it to a string, and returns the string with only 3 decimal places */
    return data.toFixed(3);
  }

  /**
   * "When the user clicks outside of the list, hide the list."
   */
  hideList(): void {
    /* Set the display style of the list to none. */
    this.displayNone()
  }

  /**
   * It takes the data from the search input and emits it to the parent component
   */
  selectElement(data: InterfaceGeocoding): void {
    /* It takes the data from the search input and emits it to the parent component */
    this.searchWeather.emit(data);
    /* Set the display style of the list to none. */
    this.displayNone()
  }

  /**
   * "Set the display style of the list to none."
   */
  displayNone(): void {
    /* It sets the display style of the list to none. */
    this.renderer.setStyle(this.list.nativeElement, 'display', 'none');
  }

}