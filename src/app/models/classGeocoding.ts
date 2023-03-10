/* It's a class that has a constructor that takes in 5 parameters. */
import { InterfaceGeocoding} from '../models';

export class ClassGeocoding {

  static geocodingFromJSON(obj: InterfaceGeocoding) {
    return new ClassGeocoding(
      obj.country,
      obj.lat,
      obj.lon,
      obj.name,
      obj.state
    );
  }

  constructor(
    public country: string,
    public lat: number,
    public lon: number,
    public name: string,
    public state: string
  ) {}

  get nameCountry() {
    return this.name + ' ' + this.country;
  }
}
