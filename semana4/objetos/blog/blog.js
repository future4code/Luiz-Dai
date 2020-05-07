let array=[]

function criarTarefa() {
  event.preventDefault()   
    let titulo = document.getElementById("titulo").value;
    let autor = document.getElementById("autor").value;
    let conteudo = document.getElementById("conteudo").value;

    const blog ={
      tituloPostagem:titulo,
      escritor:autor,
      post:conteudo

     }
     array.push(blog)
     document.getElementById("titulo").value=""
     document.getElementById("autor").value=""
     document.getElementById("conteudo").value=""
     
     inserir(blog)
     
    }
    function inserir(blog) {
      document.getElementById("postagem").innerHTML +=`<p> ${blog.tituloPostagem} 
      </p> <p> ${blog.escritor}</p> <p>${blog.post}</p>`
    }




