class Student {
  private _matricula: string;
  private _nome: string;
  private _provas: number[] = Array();
  private _trabalhos: number[] = Array();
  
  constructor(
    matricula: string,
    nome: string,
    provas: number[],
    trabalhos: number[],
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this.provas = provas;
    this.trabalhos = trabalhos;
  }

  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    this._matricula = value;
  }

  public get nome(): string {
    return this._nome;
  }
  public set nome(value: string) {
    this._nome = value;
  }

  public get provas(): number[] {
    return this._provas;
  }
  public set provas(value: number[]) {
    if (value.length !== 4) {
      throw new Error('A pessoa precisa ter 4 notas de prova.');
    }
    this._provas = value;
  }

  public get trabalhos(): number[] {
    return this._trabalhos;
  }
  public set trabalhos(value: number[]) {
    if (value.length !== 2) {
      throw new Error('A pessoa precisa ter 2 notas de trabalho.');
    }
    this._trabalhos = value;
  }

  somaDasNotas(): number {
    return [...this.provas, ...this.trabalhos]
      .reduce((prevGrade, grade) => {
        grade += prevGrade;
        return grade;
      }, 0);
  }

  mediaDasNotas(): number {
    const sumGrades = this.somaDasNotas();
    const divisor = this.provas.length + this.trabalhos.length;
    const media = sumGrades / divisor;
    return Math.round(media);
  }
}

const student1 = new Student('25', 'Guilherme', [10, 12, 5, 6], [7, 9]);
const student2 = new Student('70', 'Pedro', [8, 2, 4, 6], [9, 15]);
console.log(student1);
console.log(student2);
console.log('Soma das notas estudante 1', student1.somaDasNotas());
console.log('Media das notas do estudante 1', student1.mediaDasNotas());
console.log('Soma das notas estudante 2', student2.somaDasNotas());
console.log('Media das notas do estudante 2', student2.mediaDasNotas());

