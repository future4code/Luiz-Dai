import * as fs from 'fs';
import moment, {Moment} from "moment";

export function readDatabase(): any {
  try {
    const fileData: string = fs.readFileSync('./data.json').toString()
    return JSON.parse(fileData)
  } catch (error) {
    console.log("Erro ao ler a base de dados: " + error.message)
    return []
  }
}

export function writeToDatabase(data: any): void {
  try {
    const dataAsString: string = JSON.stringify(data, null, 2)
    fs.writeFileSync('./data.json', dataAsString)
  } catch (error) {
    console.log("Erro ao salvar os dados: " + error.message)
  }
}

type Account = {
  name: string,
  cpf: string,
  birthDate: Moment,
  balance: number,
  transactions: Transaction[]
}

type Transaction = {
  type: string,
  value: number,
  date: Moment
}

function createAccount(name: string, cpf: string, birthDate: string, balance: number): void{

  const accounts = readDatabase() as any[];

    const newAccount = {
      name,
      cpf, 
      birthDate: moment(birthDate, "DD/MM/YYYY"),
      balance: 0,
      transactions: []
    }

    if(moment().diff(birthDate, "years") >= 18 ){
      accounts.push(newAccount);
      writeToDatabase(accounts);
    }else{
      console.log("\x1b[31m", "Invalid birth date");
    }

}

function getAllAccounts(): Account[]{

  const accounts = readDatabase() as any[];

  const mappedAccounts: Account[] = accounts.map((account)=>{
    return {
      name: account.name,
      cpf: account.cpf,
      birthDate: account.birthDate,
      balance: account.balance,
      transactions: account.transactions
    }
  })

  return mappedAccounts;

}


function main(action: string): void {
  switch(action){
    case "create":
      createAccount(process.argv[3], process.argv[4], process.argv[5], Number(process.argv[6]));
      break;
    case "get": 
    console.log(getAllAccounts());
    break;
    default:
      console.log("\x1b[31m", "Invalid call. Please use create or get");
  }

}

main(process.argv[2]);
