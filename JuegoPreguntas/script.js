function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const questions = [
    {
        question: "¿Cuál es la capital de Francia?",
        options: ["París", "Londres", "Madrid"],
        correct: 0,
        comment: " París es la capital de Francia."
    },
    {
        question: "¿En qué año se fundó Google?",
        options: ["2000", "1995", "1998"],
        correct: 2,
        comment: " Google se fundó en 1998."
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Océano Atlántico", "Océano Pacífico", "Océano Índico"],
        correct: 1,
        comment: " El Océano Pacífico es el océano más grande del mundo."
    },
    {
        question: "¿Quién escribió 'Don Quijote de la Mancha'?",
        options: ["Miguel de Cervantes", "Garcilaso de la Vega", "Federico García Lorca"],
        correct: 0,
        comment: " 'Don Quijote de la Mancha' fue escrito por Miguel de Cervantes."
    },
    {
        question: "¿En qué año se llevó a cabo la Revolución Rusa?",
        options: ["1917", "1905", "1923"],
        correct: 0
    },
    {
        question: "¿Cuál es el elemento químico más abundante en la Tierra?",
        options: ["Carbono", "Oxígeno", "Hierro"],
        correct: 1
    },
    {
        question: "¿Cuál es el río más largo del mundo?",
        options: [ "Misisipi", "Nilo","Amazonas"],
        correct: 2
    },
    {
        question: "¿Cuál es el autor de la obra 'Hamlet'?",
        options: [ "Leo Tolstoy", "Charles Dickens", "William Shakespeare"],
        correct: 2
    },
    {
        question: "¿En qué año se firmó la Declaración de Independencia de los Estados Unidos?",
        options: ["1776", "1789", "1794"],
        correct: 0
    },
    {
        question: "¿Cuál es el número atómico del hidrógeno?",
        options: ["1", "2", "3"],
        correct: 0
    },
    {
        question: "¿Quién pintó 'La última cena'?",
        options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh"],
        correct: 1
    },
    {
        question: "¿Cuál es el componente principal del aire que respiramos?",
        options: ["Nitrógeno", "Oxígeno", "Dióxido de carbono"],
        correct: 1
    },
    {
        question: "¿Cuál es el segundo planeta más cercano al Sol?",
        options: ["Mercurio", "Venus", "Marte"],
        correct: 1
    },
    {
        question: "¿Cuál es la montaña más alta del mundo?",
        options: [ "Monte Kilimanjaro","Monte Everest", "Monte McKinley"],
        correct: 1
    },
    {
        question: "¿En qué año se celebró la primera Copa Mundial de la FIFA?",
        options: ["1930", "1932", "1935"],
        correct: 0
    },
    {
        question: "¿Quién escribió 'Cien años de soledad'?",
        options: [ "Mario Vargas Llosa","Gabriel García Márquez", "Julio Cortázar"],
        correct: 1
    },
    {
        question: "¿Cuál es el quinto planeta del sistema solar?",
        options: ["Júpiter", "Saturno", "Urano"],
        correct: 0
    },
    {
        question: "¿Cuál es el metal más abundante en la corteza terrestre?",
        options: [ "Cobre", "Oro","Aluminio"],
        correct: 2
    },
    {
        question: "¿Cuál es el elemento químico con el número atómico más alto?",
        options: ["Uranio", "Plutonio", "Osmio"],
        correct: 1
    },
    {
        question: "¿Cuál es el autor de 'Guerra y paz'?",
        options: ["Fyodor Dostoevsky", "Leo Tolstoy", "Anton Chekhov"],
        correct: 1
    },
    {
        question: "¿Cuál es el valor de la constante de Planck h?",
        options: ["6.626 x 10^(-34) Js", "9.81 m/s²", "3 x 10^8 m/s"],
        correct: 0
    },
    {
        question: "¿Cuál es el segundo elemento más abundante en la Tierra?",
        options: ["Hierro", "Silicio", "Aluminio"],
        correct: 1
    },
    {
        question: "¿En qué país se encuentra la Gran Pirámide de Giza?",
        options: ["Egipto", "Libia", "India"],
        correct: 0
    },
    {
        question: "¿Quién fue el primer presidente de los Estados Unidos?",
        options: [ "Thomas Jefferson","George Washington", "John Adams"],
        correct: 1
    },
    {
        question: "¿Qué famosa pintura fue creada por Leonardo da Vinci y se encuentra en el Louvre?",
        options: ["La Noche Estrellada", "El Grito", "La Mona Lisa"],
        correct: 2
    },
    {
        question: "¿Cuál es el metal más pesado en la tabla periódica?",
        options: ["Uranio", "Plomo", "Mercurio"],
        correct: 1
    },
    {
        question: "¿Qué famoso científico formuló la teoría de la relatividad?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei"],
        correct: 1
    },
    {
        question: "¿En qué año terminó la Segunda Guerra Mundial?",
        options: [ "1939","1945", "1941"],
        correct: 1
    },
    {
        question: "¿Cuál es la capital de Japón?",
        options: ["Pekín", "Seúl", "Tokio"],
        correct: 2
    },
    {
        question: "¿Qué río es conocido como el río de la vida en Egipto?",
        options: ["Nilo", "Amazonas", "Misisipi"],
        correct: 0
    },
    {
        question: "¿Cuál es la capital de Australia?",
        options: ["Sídney", "Melbourne", "Canberra"],
        correct: 2
    },
];

let currentRound = 0;
let questionsToAnswer = [];
let questionsAnswered = [];
const maxQuestionsToShow = 5; 

shuffleArray(questions); 

function startGame() {
    questionsToAnswer = questions.slice(0, maxQuestionsToShow);
    showQuestion();
}

function showQuestion() {
    if (questionsToAnswer.length > 0) {
        const questionElement = document.getElementById("question");
        const optionsElements = document.querySelectorAll(".option");
        const currentQuestion = questionsToAnswer[0];
        questionElement.textContent = currentQuestion.question;
        const options = currentQuestion.options;
        for (let i = 0; i < optionsElements.length; i++) {
            optionsElements[i].textContent = options[i];
        }
        
    }
}

function checkAnswer(option) {
    if (questionsToAnswer.length === 0) {
        return; 
    }

    const selectedAnswer = Array.from(option.parentNode.children).indexOf(option);
    const currentQuestion = questionsToAnswer[0];

    if (selectedAnswer === currentQuestion.correct) {
        document.getElementById("result").textContent = "¡Respuesta correcta!";
        questionsAnswered.push(questionsToAnswer.shift());

        if (questionsAnswered.length === maxQuestionsToShow) {
            displayCongratulations();
        } else {
            setTimeout(() => {
                showQuestion();
                document.getElementById("result").textContent = "";
                document.getElementById("comment").textContent = "";
            }, 1000);
        }
    } else {
        document.getElementById("comment").textContent = "Respuesta: " + currentQuestion.comment;
        gameOver();
    }
}



function displayCongratulations() {
    document.getElementById("question").textContent = "¡Felicidades! Has respondido a las cinco preguntas.";
    document.querySelector(".options").style.display = "none";
    document.getElementById("congratulations-overlay").style.display = "block";
}

function gameOver() {
    document.getElementById("result").style.display = "none";
    document.getElementById("game-over-overlay").style.display = "block";
}

function resetGame() {
    currentRound = 0;
    questionsToAnswer = questions.slice(0, maxQuestionsToShow);
    questionsAnswered = [];
    showQuestion();
    document.getElementById("result").textContent = "";
    document.getElementById("game-over-overlay").style.display = "none";
    document.getElementById("comment").textContent = ""; // Limpia el comentario
}


function redirectToRoulette() {
    window.location.href = "Ruleta_Esquitrix/index.html";
}

startGame();
