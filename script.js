// 질문 데이터 (총 20문항, 각 성향별 5문항씩 배치하여 정밀도 향상)
const questions = [
  // 1~5: EI (외향 vs 내향)
  { q: "주말에 갑작스러운 자유 시간이 생겼을 때 나의 행동은?", a: "기다렸다는 듯 연락처를 뒤져 친구들과 모임을 잡는다.", b: "밀린 OTT를 보거나 침대 위에서 혼자만의 충전을 즐긴다.", 입력: "EI", img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=500&auto=format&fit=crop" },
  { q: "새로운 사람들과 가득 찬 낯선 모임에 참석했을 때 나는?", a: "먼저 인사를 건네며 주도적으로 대화를 이끌어 나간다.", b: "말을 걸어올 때까지 조용히 자리를 지키며 타이밍을 본다.", 입력: "EI", img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=500&auto=format&fit=crop" },
  { q: "팀 프로젝트나 조별 과제를 할 때 내가 선호하는 역할은?", a: "의견을 취합하고 브리핑을 맡는 등 소통 중심의 역할", b: "자료를 조사하고 묵묵히 기획서를 다듬는 등 연구 중심의 역할", 입력: "EI", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=500&auto=format&fit=crop" },
  { q: "스트레스를 심하게 받은 날, 나를 더 위로해 주는 것은?", a: "마음 맞는 사람들과 시끌벅적하게 수다 떨며 털어내기", b: "방문을 닫고 내가 좋아하는 음악을 들으며 조용히 사색하기", 입력: "EI", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=500&auto=format&fit=crop" },
  { q: " 타인이 평가하는 나의 전반적인 커뮤니케이션 에너지는?", a: "감정 표현이 솔직하고 활기찬 에너지가 돋보이는 편이다.", b: "신중하고 차분하며 절제된 톤앤매너를 유지하는 편이다.", 입력: "EI", img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=500&auto=format&fit=crop" },

  // 6~10: NS (직관 vs 감각)
  { q: "아무 생각 없이 길을 걷던 중 문득 떠오르는 생각은?", a: "만약 인공지능이 세계를 지배하면 인류는 어떻게 생존할까?", b: "오늘 저녁 메뉴나 당장 눈앞에 보이는 독특한 건물 풍경", 입력: "NS", img: "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=500&auto=format&fit=crop" },
  { q: "SF 영화나 몰입감 넘치는 소설을 감상할 때 내 시선은?", a: "세계관에 담긴 은유나 감독이 숨겨놓은 철학적 메시지를 상상한다.", b: "스토리의 개연성이나 화려한 컴퓨터 그래픽 연출에 집중한다.", 입력: "NS", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=500&auto=format&fit=crop" },
  { q: "새로운 기술이나 가전제품을 구매했을 때 나는?", a: "설명서는 제쳐두고 일단 이것저것 만져보며 기능을 유추해 본다.", b: "기본 안내 책자나 퀵 가이드를 정독한 뒤 안전하게 켠다.", 입력: "NS", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=500&auto=format&fit=crop" },
  { q: "평소 가치관이나 아이디어를 설명할 때 나의 서술 방식은?", a: "직관적 느낌이나 비유, '만약에~'라는 가상의 개념을 섞어 설명한다.", b: "실제 경험한 가시적인 지표와 정확한 팩트를 기반으로 말한다.", 입력: "NS", img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=500&auto=format&fit=crop" },
  { q: "하늘에 떠 있는 독특한 모양의 구름을 보았을 때 나는?", a: "어떤 신비로운 동물이나 거대한 우주선 같다는 상상에 빠진다.", b: "날씨가 흐려지려나 보다 하고 직관적인 날씨 변화를 생각한다.", 입력: "NS", img: "https://images.unsplash.com/photo-1532178910-7815d6919875?q=80&w=500&auto=format&fit=crop" },

  // 11~15: TF (사고 vs 감정)
  { q: "친구가 '너무 우울해서 충동적으로 빵을 샀어'라고 말한다면?", a: "맛있는 빵을 먹고 기분 풀라며 무슨 빵을 샀는지 물어본다.", b: "무슨 일이 있었는지, 왜 우울한지 감정에 공감하며 토닥인다.", 입력: "TF", img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=500&auto=format&fit=crop" },
  { q: "인생의 큰 고민을 털어놓는 지인에게 내가 주로 주는 것은?", a: "상황을 냉철하게 분석한 뒤 도출해낸 현실적인 해결 대안", b: "진심 어린 위로와 '네 잘못이 아니야'라는 정서적 지지", 입력: "TF", img: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=500&auto=format&fit=crop" },
  { q: "예상치 못한 위기나 고난이 발생했을 때 내 뇌리에 먼저 스치는 생각은?", a: "이 문제를 정확히 타개할 프로세스와 논리적 인과관계 분석", b: "함께 얽힌 사람들의 심리적 타격과 감정적인 수습 방안", type: "TF", img: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=500&auto=format&fit=crop" },
  { q: "주변 사람이 큰 실수를 저질렀을 때 내가 속으로 드는 생각은?", a: "어쩌다 저런 실수가 발생했는지 시스템이나 절차적 원인 분석", b: "속상하겠다 혹은 주변 사람들의 눈치가 보여 얼마나 당황스러울까 하는 염려", type: "TF", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=500&auto=format&fit=crop" },
  { q: "친한 동료가 열심히 준비한 기획서에 오류가 가득할 때 나는?", a: "발표 전에 문제를 고쳐야 하므로 잘못된 데이터 리스트를 즉시 피드백한다.", b: "상처받지 않게 노력한 부분을 먼저 칭찬한 뒤 조심스럽게 의견을 건넨다.", type: "TF", img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=500&auto=format&fit=crop" },

  // 16~20: JP (판단 vs 인식)
  { q: "며칠 뒤 떠날 해외 여행을 앞두고 내 캐리어와 일정은?", a: "엑셀이나 플래너에 시간 단위로 꼼꼼하게 동선을 정리해 두었다.", b: "필수 짐만 챙겨두고 현지 기분과 날씨에 따라 유연하게 움직인다.", type: "JP", img: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=500&auto=format&fit=crop" },
  { q: "마감 시한이 정해진 중요한 과제나 프로젝트를 대할 때?", a: "여유를 두고 매일 일정량씩 미리 끝내놓아야 마음이 편하다.", b: "직전까지 미루다가 마감 임박 스릴 속에 초인적인 집중력을 발휘한다.", type: "JP", img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=500&auto=format&fit=crop" },
  { q: "나의 작업 공간, 방 안 물건들의 전반적인 배치 상태는?", a: "목적에 맞춰 도구들이 일목요연하게 정돈된 시스템화된 상태", b: "자유분방하게 흐트러져 있지만 나름대로 다 찾을 수 있는 상태", type: "JP", img: "https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?q=80&w=500&auto=format&fit=crop" },
  { q: "새집으로 이사하거나 가구를 전면 재배치할 때 나는?", a: "치수를 다 재어보고 머릿속으로 완벽한 도면 배치를 끝낸 후 움직인다.", b: "일단 가구를 옮겨가며 눈대중으로 더 어울리는 자리를 직흥적으로 찾는다.", type: "JP", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=500&auto=format&fit=crop" },
  { q: "약속 장소로 가던 중 친구가 갑작스럽게 '행선지를 바꾸자'고 한다면?", a: "이미 동선과 계획을 다 생각해 놨기 때문에 속으로 살짝 피곤해진다.", b: "그것도 재밌겠다며 새로운 장소를 빠르게 검색해 리프레시한다.", type: "JP", img: "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?q=80&w=500&auto=format&fit=crop" }
];

// 결과 데이터 및 성향 맞춤 비주얼 이미지 매핑
const results = {
  ISTJ: { title: "청렴결백한 논리주의자", desc: "매우 현실적이고 철두철미한 성격입니다. 규칙을 우직하게 지킵니다.", img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500&auto=format&fit=crop" },
  ISFJ: { title: "용감한 수호자", desc: "주변 사람들을 소중히 챙기는 헌신적인 수호자입니다. 깊은 다정함이 있습니다.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" },
  INFJ: { title: "선의의 옹호자", desc: "깊은 통찰력과 강한 이상주의를 지녔습니다. 세상을 더 가치 있게 바꾸고자 조용히 움직입니다.", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=500&auto=format&fit=crop" },
  INTJ: { title: "용의주도한 전략가", desc: "지적 호기심이 매우 높으며 이성적입니다. 완벽한 장기 전략 시스템을 설계해 냅니다.", img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=500&auto=format&fit=crop" },
  ISTP: { title: "만능 재주꾼", desc: "냉철한 이성과 왕성한 호기심을 가진 관찰자입니다. 정밀한 분석력과 순간 순발력이 뛰어납니다.", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop" },
  ISFP: { title: "호기심 많은 예술가", desc: "온화한 매력을 풍기는 예술가입니다. 현재 순간의 시각적, 감각적 즐거움을 소중히 여깁니다.", img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=500&auto=format&fit=crop" },
  INFP: { title: "열정적인 중재자", desc: "마음이 따뜻하고 깊은 공감 능력을 지닌 이상주의자입니다. 진정성 있는 세상을 꿈꿉니다.", img: "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=500&auto=format&fit=crop" },
  INTP: { title: "논리적인 사색가", desc: "끝없는 아이디어와 지적 탐구를 추구합니다. 원리와 법칙을 파고드는 고독을 즐깁니다.", img: "https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=500&auto=format&fit=crop" },
  ESTP: { title: "수완 좋은 활동가", desc: "에너지가 넘치고 직관적 감각이 뛰어납니다. 몸으로 직접 부딪히며 난제를 타개합니다.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=500&auto=format&fit=crop" },
  ESFP: { title: "자유로운 영혼의 연예인", desc: "인생을 축제처럼 즐기는 분위기 메이커입니다. 주변을 즉각적인 기쁨으로 가득 채워줍니다.", img: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=500&auto=format&fit=crop" },
  ENFP: { title: "재기발랄한 활동가", desc: "독창적인 아이디어를 가진 에너자이저입니다. 사람 간의 관계를 탐색하며 긍정을 전파합니다.", img: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=500&auto=format&fit=crop" },
  ENTP: { title: "뜨거운 논쟁을 즐기는 변론가", desc: "지적인 도전을 두려워하지 않는 혁신가입니다. 고정관념을 깨부수고 새 패러다임을 제안합니다.", img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=500&auto=format&fit=crop" },
  ESTJ: { title: "엄격한 관리자", desc: "조직을 정교하게 이끄는 효율적인 리더입니다. 명확한 사실과 데이터에 근거해 판단합니다.", img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=500&auto=format&fit=crop" },
  ESFJ: { title: "사교적인 외교관", desc: "사람들을 극진히 보살피는 사교계의 중심축입니다. 집단의 조화와 연대감을 소중히 생각합니다.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop" },
  ENFJ: { title: "정의로운 사회운동가", desc: "카리스마와 흡인력을 가진 리더입니다. 타인의 잠재력을 격려하며 공동체를 위해 헌신합니다.", img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?q=80&w=500&auto=format&fit=crop" },
  ENTJ: { title: "대담한 통치자", desc: "강력한 리더십과 거침없는 추진력을 갖추었습니다. 냉철하고 효율적인 판단으로 정상을 차지합니다.", img: "https://images.unsplash.com/photo-1455849318743-b2233059fcff?q=80&w=500&auto=format&fit=crop" }
};

let currentIdx = 0;
// 계산 편의를 위해 질문 매칭 알파벳 가중치 초기화
let scores = { E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0 };

function startQuiz() {
  changeScreen('quiz-screen');
  showQuestion();
}

function showQuestion() {
  const current = questions[currentIdx];
  
  // 텍스트 매핑
  document.getElementById('question-text').textContent = current.q;
  document.getElementById('ans-a').textContent = current.a;
  document.getElementById('ans-b').textContent = current.b;
  
  // 이미지 매핑 추가
  document.getElementById('question-img').src = current.img;
  
  // 프로그레스 바 계산
  const pct = (currentIdx / questions.length) * 100;
  document.getElementById('progress-line').style.width = pct + '%';
  
  const curNum = String(currentIdx + 1).padStart(2, '0');
  const totalNum = String(questions.length).padStart(2, '0');
  document.getElementById('progress-text').textContent = curNum + " / " + totalNum;
}

function selectAnswer(choice) {
  const q = questions[currentIdx];
  const type = q.type; // "EI", "NS", "TF", "JP"
  
  // A는 앞 글자(E, N, T, J), B는 뒷 글자(I, S, F, P)에 가중치 부여
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
  
  // 결과 데이터 매핑 (이미지 포함)
  document.getElementById('result-type').textContent = mbti;
  document.getElementById('result-title').textContent = data.title;
  document.getElementById('result-desc').textContent = data.desc;
  document.getElementById('result-img').src = data.img;
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
// 이미지가 깨졌을 때 자동으로 처리하는 로직
document.addEventListener('error', function (e) {
  if (e.target.tagName.toLowerCase() === 'img') {
    // 깨진 이미지 대신 투명한 임시 이미지로 대체하고 스타일 처리
    e.target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"/>';
    e.target.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    e.target.parentElement.style.display = 'flex';
    e.target.parentElement.style.alignItems = 'center';
    e.target.parentElement.style.justifyContent = 'center';
    e.target.parentElement.setAttribute('data-error', 'Visualizing...');
  }
}, true);
