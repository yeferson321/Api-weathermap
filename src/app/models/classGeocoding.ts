export class ClassGeocoding {

  static geocodingFromJSON(obj: any){
    return new ClassGeocoding(
        obj['country'],
        obj['lat'],
        obj['lon'], 
        obj['name'],
        obj['state'],
    )
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