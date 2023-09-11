from flask import Flask, render_template, request, redirect
from models.student_model import StudentModel
from controllers.filme_controller import FilmeController

app = Flask(__name__)
filme_controller = FilmeController()

# Exercícios 3 (filmes):


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        titulo = request.form.get("titulo")
        filmes = filme_controller.buscar_filmes_por_titulo(titulo)
    else:
        filmes = filme_controller.buscar_filmes_por_titulo()
        # Exemplo de busca inicial
    return render_template("index.html", filmes=filmes)


@app.route("/filmes/<id>")
def filme(id):
    print(id)
    filme = filme_controller.buscar_filme_por_id(id)
    return render_template("filme.html", filme=filme)


# Exercícios 1 e 2 (students):
# Rota para exibir a lista de alunos
@app.route("/")
@app.route("/alunos")
def listar_alunos():
    alunos = StudentModel.find()
    dict_alunos = [aluno.to_dict() for aluno in alunos]
    return render_template("alunos.html", alunos=dict_alunos)


# Rota para adicionar um novo aluno
@app.route("/alunos/adicionar", methods=["GET", "POST"])
def adicionar_aluno():
    if request.method == "POST":
        nome = request.form["nome"]
        matricula = request.form["matricula"]
        novo_aluno = {"nome": nome, "matricula": matricula}
        StudentModel(novo_aluno).save()
        return redirect("/")
    return render_template("adicionar_aluno.html")


# Rota para editar as informações de um aluno
@app.route("/alunos/editar/<int:index>", methods=["GET", "POST"])
def editar_aluno(index):
    print(index)
    aluno = StudentModel.find_one({"matricula": str(index)})
    print(f'aluno: {aluno}')

    if not aluno:
        return redirect("/")

    if request.method == "POST":
        nome = request.form["nome"]
        matricula = request.form["matricula"]
        aluno_para_atualizar = {"nome": nome, "matricula": matricula}
        aluno.update(aluno_para_atualizar)
        return redirect("/")

    return render_template(
        "editar_aluno.html",
        aluno=aluno.to_dict(),
        aluno_index=index
      )


# Rota para excluir um aluno
@app.route("/alunos/excluir/<int:index>", methods=["GET", "POST"])
def excluir_aluno(index):
    aluno = StudentModel.find_one({"matricula": str(index)})
    if request.method == "GET":
        return render_template("excluir_aluno.html", aluno=aluno, index=index)

    if not aluno:
        return redirect("/")

    aluno.delete()
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)
