import { Component, ViewChild } from '@angular/core';
import { SectionComponent } from '../section/section.component';
import { InterfaceGeocoding } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild(SectionComponent) sectionComponent!: SectionComponent;

  handleSearchWeather(data: InterfaceGeocoding): void {
    this.sectionComponent.onChange(data); // Call onChange in SectionComponent
  }
}
