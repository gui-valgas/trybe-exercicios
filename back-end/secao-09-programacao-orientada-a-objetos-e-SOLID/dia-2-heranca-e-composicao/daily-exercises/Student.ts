import Person from "./Person";

export default class Student extends Person {
  private _matricula = String();
  private _provas: number[] = [];
  private _trabalhos: number[] = [];
  
  constructor(name: string, birthDate: Date) {
    super(name, birthDate);
    this._matricula = this.geraMatricula();
  }

  public get matricula(): string {
    return this._matricula;
  }
  public set matricula(value: string) {
    if (value.length < 16) throw new Error('A matrícula deve possuir no mínimo 16 caracteres.')
    this._matricula = value;
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

  geraMatricula(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
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

// const student1 = new Student('25', 'Guilherme', [10, 12, 5, 6], [7, 9]);
// const student2 = new Student('70', 'Pedro', [8, 2, 4, 6], [9, 15]);
// console.log(student1);
// console.log(student2);
// console.log('Soma das notas estudante 1', student1.somaDasNotas());
// console.log('Media das notas do estudante 1', student1.mediaDasNotas());
// console.log('Soma das notas estudante 2', student2.somaDasNotas());
// console.log('Media das notas do estudante 2', student2.mediaDasNotas());

