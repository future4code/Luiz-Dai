import { User, performPurchase } from "../src/exercicio1";

describe("testes do exercício 2", () => {
  test("Teste usuário com o saldo maior do que o valor de compra", async () => {
    const user: User = {
      name: "Luiz",
      balance: 100,
    };

    const result = performPurchase(user, 90);

    expect(result).toEqual({
      ...user,
      balance: 10,
    });
  });

  test("Teste com um usuário com o saldo igual ao valor de compra", async () => {
    const user: User = {
      name: "Luiz",
      balance: 100,
    };

    const result = performPurchase(user, 100);

    expect(result).toEqual({
      ...user,
      balance: 0,
    });
  });

  test("Teste com um usuário com o saldo menor do que o valor de compra", () => {
    const user: User = {
      name: "Astrodev",
      balance: 30,
    };

    const result = performPurchase(user, 50);

    expect(result).toEqual(undefined);
  });
});
