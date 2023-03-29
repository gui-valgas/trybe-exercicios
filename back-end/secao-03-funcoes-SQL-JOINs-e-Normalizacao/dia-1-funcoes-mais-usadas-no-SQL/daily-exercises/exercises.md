# Resolução dos exercícios propostos no README.md

## Respostas:

## Exercício 1:
> Escreva uma query que exiba o maior salário da tabela.

```SQL
SELECT 
    MAX(salary)
FROM
    hr.employees;
```

## Exercício 2:
> Escreva uma query que exiba a diferença entre o maior e o menor salário.
```SQL
SELECT 
    MAX(salary) - MIN(salary)
FROM
    hr.employees;
```

## Exercício 3:
> Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.
```SQL
SELECT 
    job_id, AVG(salary) AS media_salarial
FROM
    hr.employees
GROUP BY
	job_id
ORDER BY
	media_salarial DESC;
```

## Exercício 4:
> Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
```SQL
SELECT 
    SUM(salary)
FROM
    hr.employees;
```

## Exercício 5:
> Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
```SQL
SELECT 
    ROUND(MAX(salary), 2) AS Maior_salario,
    ROUND(MIN(salary), 2) AS Menor_salario,
    ROUND(SUM(salary), 2) AS Soma_dos_salarios,
    ROUND(AVG(salary), 2) AS Media_dos_salarios
FROM
    hr.employees;
```

## Exercício 6:
> Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).
```SQL
SELECT 
    job_id, COUNT(job_id) AS total
FROM
    hr.employees
WHERE
    job_id = 'it_prog';
```

## Exercício 7:
> Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).
```SQL
SELECT 
    job_id, SUM(salary) AS total
FROM
    hr.employees
GROUP BY 
	job_id;   
```

## Exercício 8:
> Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).
```SQL
SELECT 
    job_id, SUM(salary) AS total
FROM
    hr.employees
GROUP BY 
	job_id
HAVING 
	job_id = 'it_prog';
```

## Exercício 9:
> Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (`it_prog`).
```SQL
SELECT 
    job_id, AVG(salary) AS average_salary
FROM
    hr.employees
GROUP BY 
	job_id
HAVING 
	job_id <> 'it_prog'
ORDER BY
	average_salary DESC;
```

## Exercício 10:
> Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários. Dica: agrupe pelo `department_id`.
```SQL
SELECT 
    AVG(salary) AS average_salary,
    COUNT(*) AS numero_de_funcionarios
FROM
    hr.employees
GROUP BY
	department_id
HAVING
	numero_de_funcionarios > 10;
```

## Exercício 11:
> Escreva uma query que atualize a coluna `phone_number`, de modo que todos os telefones iniciados por `515` agora devem iniciar com `777`.
```SQL
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';
```

## Exercício 12:
> Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
```SQL
SELECT 
    *
FROM
    hr.employees
WHERE
    LENGTH(first_name) >= 8;
```

## Exercício 13:
> Escreva uma query que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `ano no qual foi contratado` (exiba somente o ano).
```SQL
SELECT 
    employee_id,
    first_name,
    YEAR(hire_date) AS hire_year
FROM
    hr.employees;
```

## Exercício 14:
> Escreva uma query que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `dia do mês no qual foi contratado` (exiba somente o dia).
```SQL
SELECT 
    employee_id,
    first_name,
    DAY(hire_date) AS hire_day
FROM
    hr.employees;
```

## Exercício 15:
> Escreva uma query que exiba as seguintes informações de cada funcionário: `id`, `primeiro nome` e `mês no qual foi contratado` (exiba somente o mês).
```SQL
SELECT 
    employee_id,
    first_name,
    MONTH(hire_date) AS hire_month
FROM
    hr.employees;
```

## Exercício 16:
> Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
```SQL
SELECT 
    UCASE(CONCAT(first_name, ' ', last_name))
FROM
    hr.employees;
```

## Exercício 17:
> Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

```SQL
SELECT last_name
FROM hr.employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';
```

## Exercício 18:
> Escreva uma query que exiba as seguintes informações de cada funcionário: `nome`, `sobrenome`, `tempo que trabalha na empresa` (em dias).
```SQL
SELECT 
	CONCAT(first_name, ' ', last_name) AS full_name,
	DATEDIFF('2023-03-29', hire_date) AS days_worked
FROM
	  hr.employees;

-- OU

SELECT
	first_name,
    last_name,
    DATEDIFF(CURRENT_DATE() , hire_date) AS days_worked
FROM 
	  hr.employees;
```