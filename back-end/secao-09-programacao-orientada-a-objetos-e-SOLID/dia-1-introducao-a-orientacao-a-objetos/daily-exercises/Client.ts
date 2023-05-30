export default class Client {
  private _nome = String();

  constructor(nome: string) {
    this._nome = nome;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.')
    }
    
    this._nome = value;
  }
}