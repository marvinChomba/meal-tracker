export class Food {
  public clicked:boolean;
  constructor(public name:string, public calories:string,public details:string) {
    this.clicked = false;
  }
}
