export class Food {
  public clicked:boolean;
  public edit:boolean;
  constructor(public name:string, public calories:string,public details:string) {
    this.clicked = false;
    this.edit = true;
  }
}
