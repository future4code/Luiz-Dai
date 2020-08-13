### Exercício 1

a) Remove a coluna salary
b) Renomeia a coluna e renova suas definições
c) Renova a definição da coluna

```SQL
d)
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercício 2

a)

```SQL
UPDATE Actor SET name = "Chuck Norris", birth_date = "1940-03-10" WHERE id = 003;
UPDATE Actor SET gender = "male" WHERE id = 003
```

b)

```SQL
UPDATE Actor SET name = "Juliana Pães" WHERE id = 005;
UPDATE Actor SET name = "Juliana Paes" WHERE id = 005;
```

c)

```SQL
UPDATE Actor SET name = "Arnold Schwarzenegger", salary = "500000", birth_date = "1947-07-30", gender = "male" WHERE id = 005;
```

d) Quando altera uma coluna existente com ID inexistente não dá erro e diz que nenhuma linha foi alterada. Quando altera uma coluna inexistente ai dá erro, "unknown column".

### Exercício 3

a)

```SQL
DELETE FROM Actor WHERE name = "Chuck Norris";
```

b)

```SQL
DELETE FROM Actor WHERE salary > 1000000 AND gender = "male";
```

### Exercício 4

a)

```SQL
SELECT MAX(salary) FROM Actor;
```

b)

```SQL
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)

```SQL
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)

```SQL
SELECT SUM(salary) FROM Actor;
```

### Exercício 5

a) Fez uma contagem de cada genero e apresentou pra nós. Agrupa dados em relação a outros campos da tabela.
b)

```SQL
SELECT name, id FROM Actor ORDER BY name DESC;
```

c)

```SQL
SELECT * FROM Actor ORDER BY salary ASC;
```

d)

```SQL
SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
```

e)

```SQL
SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;
```

### Exercício 6

a)

```SQL
ALTER TABLE Movie ADD limit_date DATE;
```

b)

```SQL
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)

```SQL
UPDATE Movie
SET
	playing_limit_date = "2020-12-31"
WHERE id = "001"
```

d)

```SQL
DELETE FROM Movie WHERE id = "001"
```

### Exercício 7

```SQL
a)

SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b)
SELECT AVG(rating) FROM Movie;

c)
SELECT COUNT(*) FROM Movie WHERE playing_limit_date > CURDATE();

d)
SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();

e)
SELECT MAX(rating) FROM Movie;

f)
SELECT MIN(rating) FROM Movie;
```

### Exercício 8

```SQL
a)

SELECT * FROM Movie ORDER BY title;

b)
SELECT * FROM Movie ORDER BY title LIMIT 5;

c)
SELECT * FROM Movie
WHERE release_date < CURDATE()
ORDER BY release_date DESC
LIMIT 3;

d)
SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;
```
