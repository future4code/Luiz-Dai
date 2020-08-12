### Exercício 1

a)VARCHAR(255) para strings de até 255 caracteres
PRIMARYKEY é uma chave primaria que pode ser qualquer valor desde que não se repita
NOT_NULL Valor não pode ser nulo

b) SHOW_DATA_BASES funcionou e mostrou a data base já o SHOW TABLES mostrou a tabela de ator.

c) Com SHOW Actor da erro

### Exercício 2

a. Escreva uma query que crie a atriz Glória Pires, com o id 002, salário R\$1.200.000 e data de nascimento 23 de Agosto de 1963

```SQL
INSERT INTO Actor (id, name, salary, birth_date, gender )
VALUES(
  "002",
  "Glória Pires",
  1200000,
  "1963-08-23",
  "female"
);
```

INSERT INTO Actor (id, name, salary) VALUES( "003", "Fernanda Montenegro", 300000, "1929-10-19", "female" ) Error Code: 1136. Column count doesn't match value count at row 1 0,015 sec

00:13:35 INSERT INTO Actor (id, salary, birth_date, gender) VALUES( "004", 400000, "1949-04-18", "male" ) Error Code: 1364. Field 'name' doesn't have a default value 0,031 sec

00:16:41 INSERT INTO Actor (id, name, salary, birth_date, gender) VALUES( "005", "Juliana Paes", 719333.33, 1979-03-26, "female" ) Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1 0,031 sec

### Exercício 3

a)

SELECT \* from Actor WHERE gender = "female"
b)

SELECT salary FROM Actor WHERE name = "Tony ramos"
c)

SELECT \* FROM Actor WHERE gender = "invalid"
Aqui o retorno é uma tabela com todas as colunas null. Isso acontece pois o resultado é que não existe nenhuma linha que possua o gender = "invalid".

d)

SELECT id, name, salary FROM Actor WHERE salary <= 500000
e)

SELECT id, nome from Actor WHERE id = "002"
Error Code: 1054. Unknown column 'nome' in 'field list' 0.015 sec
"Código de erro: 1054. Coluna desconhecida 'nome' na 'lista de campos'" OU SEJA: Não existe a coluna 'nome', o correto é 'name'.

### Exercício 4

a)

SELECT \* FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
name "começado por A" OU name "começado com J" E salario maior que 300000

b)

SELECT \* FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000
c)

SELECT \* FROM Actor
WHERE name LIKE "%G%" OR "%g%"
d)

SELECT \* FROM Actor
WHERE (name LIKE "%a%" OR "%A%" OR "%G%") AND salary BETWEEN 350000 AND 900000

### Exercício 5

a)

```SQL
CREATE TABLE Movies(
id INT PRIMARY KEY,
name VARCHAR(255) NOT NULL UNIQUE,
synopsis TEXT NOT NULL,
release_Date DATE NOT NULL,
rating INT NOT NULL
)
```

b)

```SQL
INSERT INTO Movies2 (id, title, synopsis, release_Date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
"7"
);
```

c)

```SQL
INSERT INTO Movies2 (id, title, synopsis, release_Date, rating)
VALUES(
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
"10"
);
```

d)

```SQL
INSERT INTO Movies2 (id, title, synopsis, release_Date, rating)
VALUES(
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
"2017-11-02",
"8"
);
```

e)

```SQL
INSERT INTO Movies2 (id, title, synopsis, release_Date, rating)
VALUES(
"004",
"Deus é Brasileiro",
"Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo",
"2003-01-31",
"9"
);
```

### Exercício 6

```SQL
a)

SELECT id, title, rating FROM Movies2
WHERE id = "9"
b)

SELECT \* FROM Movies2
WHERE title = "Deus é Brasileiro";
c)

SELECT id, title, synopsis FROM Movies2
WHERE rating >= "7"
Exercício 7
a)

SELECT \* FROM Movies2
WHERE title LIKE "%vida%"
b)

SELECT \* FROM Movies2
WHERE title LIKE "%Deus%" OR synopsis LIKE "%sedutora%";
c)

SELECT \* FROM Movies2
WHERE release_date < "2020-10-08";
d)

SELECT \* FROM Movies2
WHERE release_date < "2020-10-08" AND (title LIKE "%Deus%" OR synopsis LIKE "%sedutora%") AND rating > "7";
Para que a data seja sempre atualizada automaticamente usa-se o CURDATE():

SELECT \* FROM MOVIE
WHERE release_date < CURDATE() AND (title LIKE "%TERMO DE BUSCA%" OR synopsis LIKE "%TERMO DE BUSCA%");
```
