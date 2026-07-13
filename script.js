const questions = [
  { q: "주말에 갑작스러운 자유 시간이 생겼을 때 나의 행동은?", a: "기다렸다는 듯 연락처를 뒤져 친구들과 모임을 잡는다.", b: "밀린 OTT를 보거나 침대 위에서 혼자만의 충전을 즐긴다.", type: "EI" },
  { q: "새로운 사람들과 가득 찬 낯선 모임에 참석했을 때 나는?", a: "먼저 인사를 건네며 주도적으로 대화를 이끌어 나간다.", b: "말을 걸어올 때까지 조용히 자리를 지키며 타이밍을 본다.", type: "EI" },
  { q: "아무 생각 없이 길을 걷던 중 문득 떠오르는 생각은?", a: "오늘 저녁 메뉴나 당장 눈앞에 보이는 독특한 건물 풍경", b: "만약 인공지능이 세계를 지배하면 인류는 어떻게 생존할까?", type: "NS" },
  { q: "SF 영화나 몰입감 넘치는 소설을 감상할 때 내 시선은?", a: "스토리의 개연성이나 화려한 컴퓨터 그래픽 연출에 집중한다.", b: "세계관에 담긴 은유나 감독이 숨겨놓은 철학적 메시지를 상상한다.", type: "NS" },
  { q: "친구가 '너무 우울해서 충동적으로 빵을 샀어'라고 말한다면?", a: "무슨 일이 있었는지, 왜 우울한지 감정에 공감하며 토닥인다.", b: "맛있는 빵을 먹고 기분 풀라며 무슨 빵을 샀는지 물어본다.", type: "TF" },
  { q: "인생의 큰 고민을 털어놓는 지인에게 내가 주로 주는 것은?", a: "진심 어린 위로와 '네 잘못이 아니야'라는 정서적 지지", b: "상황을 냉철하게 분석한 뒤 도출해낸 현실적인 해결 대안", type: "TF" },
  { q: "며칠 뒤 떠날 해외 여행을 앞두고 내 캐리어와 일정은?", a: "엑셀이나 플래너에 시간 단위로 꼼꼼하게 동선을 정리해 두었다.", b: "필수 짐만 챙겨두고 현지 기분과 날씨에 따라 유연하게 움직인다.", type: "JP" },
  { q: "마감 시한이 정해진 중요한 과제나 프로젝트를 대할 때?", a: "여유를 두고 매일 일정량씩 미리 끝내놓아야 마음이 편하다.", b: "직전까지 미루다가 마감 임박 스릴 속에 초인적인 집중력을 발휘한다.", type: "JP" },
  { q: "타인이 평가하는 나의 전반적인 커뮤니케이션 에너지는?", a: "감정 표현이 솔직하고 활기찬 에너지가 돋보이는 편이다.", b: "신중하고 차분하며 절제된 톤앤매너를 유지하는 편이다.", type: "EI" },
  { q: "예상치 못한 위기나 고난이 발생했을 때 내 뇌리에 먼저 스치는 생각은?", a: "이 문제를 정확히 타개할 프로세스와 논리적 인과관계 분석", b: "함께 얽힌 사람들의 심리적 타격과 감정적인 수습 방안", type: "TF" },
  { q: "나의 작업 공간, 방 안 물건들의 전반적인 배치 상태는?", a: "목적에 맞춰 도구들이 일목요연하게 정돈된 시스템화된 상태", b: "자유분방하게 흐트러져 있지만 나름대로 다 찾을 수 있는 상태", type: "JP" },
  { q: "평소 가치관이나 아이디어를 설명할 때 나의 서술 방식은?", a: "실제 경험한 가시적인 지표와 정확한 팩트를 기반으로 말한다.", b: "직관적 느낌이나 비유, '만약에~'라는 가상의 개념을 섞어 설명한다.", type: "NS" }
];

const results = {
  ISTJ: { title: "청렴결백한 논리주의자", desc: "매우 현실적이고 철두철미한 성격입니다. 규칙과 신뢰를 우직하게 지키며 무거운 책임감으로 조직의 뼈대를 지탱하는 든든한 타입입니다." },
  ISFJ: { title: "용감한 수호자", desc: "주변 사람들을 소중히 챙기는 헌신적인 수호자입니다. 조용하고 차분하지만 내면엔 깊은 다정함과 타인을 향한 따뜻한 이타심이 자리 잡고 있습니다." },
  INFJ: { title: "선의의 옹호자", desc: "전 세계에서 가장 보기 드문 유형으로, 깊은 통찰력과 강한 이상주의를 지녔습니다. 자신만의 확고한 신념을 바탕으로 세상을 더 가치 있게 바꾸고자 조용히 움직입니다." },
  INTJ: { title: "용의주도한 전략가", desc: "지적 호기심이 매우 높으며 이성적이고 분석적입니다. 모든 구조에 의문을 던지고, 자신만의 완벽한 장기 전략 시스템을 설계해 목표를 달성해 냅니다." },
  ISTP: { title: "만능 재주꾼", desc: "냉철한 이성과 왕성한 호기심을 가진 관찰자입니다. 상황 변화에 대단히 유연하게 대처하며, 정밀한 분석력과 뛰어난 순간 순발력으로 난관을 극복합니다." },
  ISFP: { title: "호기심 많은 예술가", desc: "말없이 따뜻하고 온화한 매력을 풍기는 예술가입니다. 현재 순간의 시각적, 감각적 즐거움을 소중히 여기며 갈등을 지양하고 자유를 사랑합니다." },
  INFP: { title: "열정적인 중재자", desc: "마음이 따뜻하고 깊은 공감 능력을 지닌 이상주의자입니다. 자신만의 내적 도덕성과 가치를 극도로 중요시하며 온 세상이 평화롭고 진정성 있기를 꿈꿉니다." },
  INTP: { title: "논리적인 사색가", desc: "끝없는 아이디어와 지적 탐구를 추구하는 사색가입니다. 비논리적인 관습을 거부하며 원리와 법칙을 파고들어 본질을 밝혀내는 지적 고독을 즐깁니다." },
  ESTP: { title: "수완 좋은 활동가", desc: "에너지가 넘치고 직관적 감각이 매우 뛰어납니다. 이론에 얽매이기보다 몸으로 직접 부딪히며 현실의 복잡한 난제를 파괴적으로 해결해 나가는 해결사입니다." },
  ESFP: { title: "자유로운 영혼의 연예인", desc: "인생을 한 편의 흥겨운 축제처럼 즐기는 분위기 메이커입니다. 타인의 감정에 기민하게 반응하며 주변 공간을 즉각적인 기쁨과 활력으로 가득 채워줍니다." },
  ENFP: { title: "재기발랄한 활동가", desc: "독창적인 아이디어와 자유로운 영혼을 가진 에너자이저입니다. 사람 간의 관계를 깊이 탐색하며, 어떤 장소에서든 특유의 열정과 긍정적 영감을 퍼뜨립니다." },
  ENTP: { title: "뜨거운 논쟁을 즐기는 변론가", desc: "지적인 도전을 절대 두려워하지 않는 혁신가입니다. 기존의 고정관념이나 관습을 유쾌하게 깨부수며, 톡톡 튀는 아이디어로 새로운 패러다임을 제안합니다." },
  ESTJ: { title: "엄격한 관리자", desc: "조직과 비즈니스를 정교하게 이끄는 효율적인 리더입니다. 명확한 사실과 데이터에 근거해 판단하며 불확실성을 배제하고 결과를 완벽하게 산출해 냅니다." },
  ESFJ: { title: "사교적인 외교관", desc: "사람들을 극진히 보살피는 사교계의 중심축입니다. 집단의 조화와 연대감을 소중히 생각하며 타인의 필요를 예민하게 파악해 든든하게 서포트해 줍니다." },
  ENFJ: { title: "정의로운 사회운동가", desc: "넘치는 카리스마와 흡인력 있는 매력을 가진 리더입니다. 주변 사람들의 잠재력을 알아보고 격려하며 더 나은 공동체를 위해 헌신적인 리더십을 보입니다." },
  ENTJ: { title: "대담한 통치자", desc: "강력한 리더십과 거침없는 추진력을 갖춘 타고난 사령관입니다. 장기적인 비전을 현실적인 비즈니스로 정렬하고 냉철하고 효율적인 판단으로 정상으로 이끕니다." }
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
  
  const pct = (currentIdx / questions.length) * 100;
  document.getElementById('progress-line').style.width = pct + '%';
  
  const curNum = String(currentIdx + 1).padStart(2, '0');
  const totalNum = String(questions.length).padStart(2, '0');
  document.getElementById('progress-text').textContent = curNum + " / " + totalNum;
}

function selectAnswer(choice) {
  const q = questions[currentIdx];
  const type = q.type; 
  
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
  
  const pipeline = ["선택 데이터 가중치 분석 중...", "심리 기능 아키텍처 매핑 중...", "최종 인지 패턴 도출 완료"];
  let step = 0;
  
  const interval = setInterval(() => {
    if (step < pipeline.length) {
      document.getElementById('loading-text').textContent = pipeline[step];
      step++;
    } else {
      clearInterval(interval);
      showResult(mbti);
    }
  }, 700);
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
