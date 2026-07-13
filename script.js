const questions = [
  { q: "주말에 시간이 생겼을 때 나는?", a: "친구들과 만나서 신나게 논다", b: "집에서 혼자 침대와 물아일체가 된다", type: "EI" },
  { q: "새로운 사람들과의 모임에서 나는?", a: "먼저 말을 걸며 분위기를 주도한다", b: "조용히 경청하며 기가 빨려온다", type: "EI" },
  { q: "길을 걷다가 든 생각은?", a: "아무 생각 없이 걷는다", b: "갑자기 좀비 사태가 터지면 어떻게 도망치지?", type: "NS" },
  { q: "영화나 소설을 볼 때 나는?", a: "현실적인 스토리나 교훈에 집중한다", b: "독특한 세계관이나 은유적 의미를 상상한다", type: "NS" },
  { q: "친구가 '나 슬퍼서 빵 샀어'라고 한다면?", a: "왜 슬픈지 묻고 공감해 준다", b: "무슨 빵 샀는지 물어본다", type: "TF" },
  { q: "고민을 상담하는 친구에게 나는?", a: "따뜻한 위로와 응원을 건넨다", b: "문제를 해결할 수 있는 현실적 대안을 준다", type: "TF" },
  { q: "여행을 갈 때 나의 스타일은?", a: "시간 단위로 꼼꼼하게 계획을 짠다", b: "비행기 표만 끊고 발길 닿는 대로 간다", type: "JP" },
  { q: "과제를 하거나 업무를 처리할 때?", a: "마감일 전에 미리 여유롭게 끝낸다", b: "벼락치기로 마감 직전에 초인적인 힘을 낸다", type: "JP" },
  { q: "주변 사람들이 말하는 나는?", a: "활동적이고 사교성이 좋은 편이다", b: "차분하고 조용한 편이다", type: "EI" },
  { q: "문제 상황이 닥쳤을 때 먼저 드는 생각은?", a: "이게 왜 일어났고 어떻게 해결해야 하지?", b: "아 큰일 났다... 감정적으로 먼저 동요한다", type: "TF" },
  { q: "내 방이나 책상의 상태는?", a: "물건들이 제자리에 잘 정리되어 있다", b: "나만의 규칙이 있는 어지러움 상태다", type: "JP" },
  { q: "평소에 나의 대화 방식은?", a: "눈에 보이는 팩트와 경험 위주로 말한다", b: "비유나 가정을 많이 섞어서 말한다", type: "NS" }
];

const results = {
  ISTJ: { title: "청렴결백한 논리주의자", desc: "매우 현실적이고 철두철미한 성격입니다. 규칙을 잘 지키며 책임감이 강해 조직에서 신뢰받는 타입입니다." },
  ISFJ: { title: "용감한 수호자", desc: "타인을 돕는 것에 보람을 느끼며 다정다감합니다. 조용하지만 내면이 단단하고 헌신적인 성격입니다." },
  INFJ: { title: "선의의 옹호자", desc: "이상주의적이면서도 깊은 통찰력을 가졌습니다. 자신만의 확고한 가치관이 있으며 조용히 세상을 이롭게 하려 합니다." },
  INTJ: { title: "용의주도한 전략가", desc: "지적 호기심이 많고 이성적입니다. 모든 일에 의문을 던지고 자신만의 시스템을 설계하는 것을 즐깁니다." },
  ISTP: { title: "만능 재주꾼", desc: "과묵하지만 상황을 객과적으로 관찰하는 능력이 탁월합니다. 도구 다루기를 좋아하고 필요할 때 순발력을 발휘합니다." },
  ISFP: { title: "호기심 많은 예술가", desc: "말없이 다정하고 온화합니다. 현재의 삶을 즐기며, 예술이나 미적 감각이 뛰어나고 갈등을 싫어합니다." },
  INFP: { title: "열정적인 중재자", desc: "공감 능력이 뛰어나고 마음이 따뜻합니다. 이상적인 세상을 꿈꾸며 나만의 의미와 자아를 찾는 것을 소중히 여깁니다." },
  INTP: { title: "논리적인 사색가", desc: "아이디어가 넘치며 분석적인 성향입니다. 비논리적인 것을 싫어하며 호기심을 해결하기 위해 깊게 몰두합니다." },
  ESTP: { title: "수완 좋은 활동가", desc: "스릴을 즐기며 에너지가 넘칩니다. 현실적인 문제를 해결하는 수완이 좋고 행동력이 매우 빠른 타입입니다." },
  ESFP: { title: "자유로운 영혼의 연예인", desc: "주변에 에너지를 전파하며 인생을 축제처럼 즐깁니다. 분위기 메이커 역할을 톡톡히 하는 성격입니다." },
  ENFP: { title: "재기발랄한 활동가", desc: "창의적이며 자유로운 영혼을 가졌습니다. 사람들과 깊은 소통을 좋아하며 긍정적이고 열정적입니다." },
  ENTP: { title: "뜨거운 논쟁을 즐기는 변론가", desc: "지적인 도전을 두려워하지 않고 아이디어가 풍부합니다. 고정관념을 깨부수는 것을 즐기는 혁신가 타입입니다." },
  ESTJ: { title: "엄격한 관리자", desc: "조직을 이끄는 효율적인 리더입니다. 현실적이고 명확한 규칙을 바탕으로 일 처리를 확실하게 해냅니다." },
  ESFJ: { title: "사교적인 외교관", desc: "사람들을 잘 챙기고 인기가 많습니다. 타인의 감정에 민감하며 협동적인 환경을 만들어 나가는 데 능숙합니다." },
  ENFJ: { title: "정의로운 사회운동가", desc: "카리스마와 대중을 사로잡는 매력이 있습니다. 타인의 성장을 돕고 선한 영향력을 널리 퍼뜨리는 리더입니다." },
  ENTJ: { title: "대담한 통치자", desc: "강한 의지와 추진력을 가진 타고난 리더입니다. 목표를 달성하기 위해 냉철하고 효율적으로 전략을 실행합니다." }
};

let currentIdx = 0;
let scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };

function startQuiz() {
  changeScreen('quiz-screen');
  showQuestion();
}

function showQuestion() {
  const current = questions[currentIdx];
  document.getElementById('question-text').textContent = current.q;
  document.getElementById('ans-a').textContent = current.a;
  document.getElementById('ans-b').textContent = current.b;
  
  const pct = ((currentIdx) / questions.length) * 100;
  document.getElementById('progress-line').style.width = pct + '%';
  document.getElementById('progress-text').textContent = `${currentIdx + 1} / ${questions.length}`;
}

function selectAnswer(choice) {
  const q = questions[currentIdx];
  const type = q.type; // "EI", "NS", "TF", "JP"
  
  if (choice === 'A') {
    scores[type[0]]++;
  } else {
    scores[type[1]]++;
  }
  
  currentIdx++;
  if (currentIdx < questions.length) {
    showQuestion();
  } else {
    calculateResult();
  }
}

function calculateResult() {
  changeScreen('loading-screen');
  
  let mbti = "";
  mbti += scores.E >= scores.I ? "E" : "I";
  mbti += scores.N >= scores.S ? "N" : "S";
  mbti += scores.T >= scores.F ? "T" : "F";
  mbti += scores.J >= scores.P ? "J" : "P";
  
  const pipeline = ["데이터 가중치 매핑 중...", "감정 분석 모델 가동 중...", "최종 성향 도출 완료!"];
  let step = 0;
  
  const interval = setInterval(() => {
    if (step < pipeline.length) {
      document.getElementById('loading-text').textContent = pipeline[step];
      step++;
    } else {
      clearInterval(interval);
      showResult(mbti);
    }
  }, 800);
}

function showResult(mbti) {
  changeScreen('result-screen');
  const data = results[mbti];
  document.getElementById('result-type').textContent = mbti;
  document.getElementById('result-title').textContent = data.title;
  document.getElementById('result-desc').textContent = data.desc;
}

function restartQuiz() {
  currentIdx = 0;
  scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };
  changeScreen('start-screen');
}

function changeScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(screenId).classList.add('active');
}
