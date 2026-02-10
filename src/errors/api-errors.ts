export class ApiErrors extends Error {
  constructor(
    public messege: string,
    public status: number,
  ) {
    super(messege);
    this.status = status;
  }
}
