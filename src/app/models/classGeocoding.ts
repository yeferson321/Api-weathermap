// It's a class that has a constructor that takes in 5 parameters.
import { InterfaceGeocoding} from '../models';

export class ClassGeocoding {

  /* The `geocodingFromJSON` function is a static method that converts an object that conforms to the InterfaceGeocoding interface to an 
  instance of the ClassGeocoding class. This is used to convert response data from an API to an instance of the ClassGeocoding class. */
  static geocodingFromJSON(obj: InterfaceGeocoding) {
    return new ClassGeocoding(
      obj.country,
      obj.lat,
      obj.lon,
      obj.name,
      obj.state
    );
  }

  // The ClassGeocoding class constructor takes the input parameters and assigns them to the corresponding public properties of the class.
  constructor(
    public country: string,
    public lat: number,
    public lon: number,
    public name: string,
    public state: string
  ) {}

  // The `nameCountry` method is a getter that concatenates the name and the country and returns them as a string.
  get nameCountry() {
    return this.name + ' ' + this.country;
  }
}
