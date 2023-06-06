const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  const chave = (arrai) => {
    let valorDasChaves = Object.entries(arrai.lessons)
    return valorDasChaves
  }
  console.log(chave(school))

  const somaDosNumeros = (soma) => {
    let totalDeEstudantes = 0 
    for (let index = 0; index <soma.lessons.length; index +=1){
    let valor = soma.lessons[index].students
    totalDeEstudantes = totalDeEstudantes + valor
    }
    return totalDeEstudantes
  }
  console.log(somaDosNumeros(school))
