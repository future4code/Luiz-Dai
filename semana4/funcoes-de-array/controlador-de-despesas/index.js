let divida=[]

function adicionarValor() {
  event.preventDefault()   
    let valor = document.getElementById("valor").value;
    let tipo = document.getElementById("tipo").value;
    let descricao = document.getElementById("descricao").value;
    
    const despesas ={
      valores:valor,
      tipos:tipo,
      descricoes:descricao
     }
     divida.push(despesas)
     
     console.log(despesas)
     inserir(divida)
     limpa() 
    }
    function inserir(despesas) {
        const gastos = despesas.map((despesa,index, array)=>{
            return despesa.valores
        }) 
      document.getElementById("extrato").innerHTML +=`<p> ${despesas.valores} 
      </p>  <p>${despesas.descricoes}</p>`
      document.getElementById("extrato")`<p> ${despesas.tipos}</p>`
    }
const limpa =()=>{
    let a = document.getElementById("valor").value=""
    let b = document.getElementById("tipo").value=""
    let c = document.getElementById("descricao").value=""

}
