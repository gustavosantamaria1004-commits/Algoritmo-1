// Datos de ejemplo (Escalable a un JSON externo)
const elementos = [
    { n: 1, sym: "H", name: "Hidrógeno", desc: "Gas inflamable, el más abundante del universo.", cat: "No metal" },
    { n: 2, sym: "He", name: "Helio", desc: "Gas noble, usado en globos y láseres.", cat: "Gas Noble" },
    { n: 3, sym: "Li", name: "Litio", desc: "Metal blando, usado en baterías.", cat: "Alcalino" },
    // Se pueden agregar todos los elementos aquí
];

// 1. Navegación entre pestañas
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(btn.dataset.target).classList.add('active');
    });
});

// 2. Renderizar Tabla Periódica
const tableContainer = document.getElementById('periodic-table-container');
const detailCard = document.getElementById('element-detail');

elementos.forEach(el => {
    const div = document.createElement('div');
    div.className = 'element';
    div.innerHTML = `<strong>${el.sym}</strong><small>${el.n}</small>`;
    div.onclick = () => {
        detailCard.innerHTML = `
            <h3>${el.name} (${el.sym})</h3>
            <p><strong>Categoría:</strong> ${el.cat}</p>
            <p>${el.desc}</p>
        `;
    };
    tableContainer.appendChild(div);
});

// 3. Quiz de Gamificación
const quizData = [
    { q: "¿Cuál es el símbolo del Hidrógeno?", a: ["H", "He", "Li"], correct: 0 },
    { q: "¿Qué gas se usa para inflar globos?", a: ["O", "He", "N"], correct: 1 }
];

let currentScore = 0;
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');

function loadQuiz() {
    const q = quizData[0]; // Simplificado para el ejemplo
    questionEl.innerText = q.q;
    optionsEl.innerHTML = '';
    q.a.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if(index === q.correct) {
                currentScore += 10;
                alert("¡Correcto! +10 puntos");
            } else {
                alert("Sigue intentándolo.");
            }
            document.getElementById('score').innerText = currentScore;
        };
        optionsEl.appendChild(btn);
    });
}

loadQuiz();