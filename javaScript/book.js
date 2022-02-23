/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

    // -------- Authors and books --------- //

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];
    // ------- Get total books ------- //

totalOfBooks = () => {
    let bAuthors = [];
    for (let bCategory of booksByCategory) {
        for (let cBook of bCategory.books) {
            if (bAuthors.indexOf(cBook.author) == -1) {
                bAuthors.push(cBook.author)
            }
        }
    }
    console.log(`Total de autores: ${bAuthors.length}`)
};

    // ------ Get author's books ------- //

booksOfAuthor = (author) => {
    let aBook = []
    for (let nCategor of booksByCategory) {
        for (let nBook of nCategor.books) {
            if (nBook.author == author) {
                aBook.push(nBook.title)
            }
        }
    }
    console.log(`livros du ${author}: ${aBook.join(", ")}`) 
};

totalOfBooks();
booksOfAuthor('Augusto Cury');