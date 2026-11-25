// =====================================================================
// HELLO, FRIENDS! · 다국어 퀴즈 데이터 (기본: 세르비아어 ↔ 한국어)
// 추후 다른 국가 언어를 추가할 때는 LANGUAGE_PACKS 에 새 언어 키를 추가하세요.
// =====================================================================

const LANGUAGE_PACKS = {
  sr: {
    code: 'sr',
    name: '세르비아어 (Srpski)',
    flag: '🇷🇸',
    partnerFlag: '🇰🇷',
    speechLang: 'sr-RS',
    koSpeechLang: 'ko-KR',
    pronunciationNote: '※ 한글 발음 표기는 이해를 돕기 위한 근사 표기이며, 선생님 화면에서 직접 수정할 수 있습니다.',
    items: [
      {
        id: 1,
        group: 'greet_meet',
        ko: '안녕',
        en: 'Hello / Hi',
        latin: 'Zdravo',
        cyrillic: 'Здраво',
        pron: '즈드라보',
        situationKo: '낮에 친구를 반갑게 만났을 때 건네는 기본 인사는?',
        situationEn: 'How do you say "Hello" when meeting a friend?',
        scene: 'wave'
      },
      {
        id: 2,
        group: 'nice_meet',
        ko: '반가워',
        en: 'Nice to meet you',
        latin: 'Drago mi je',
        cyrillic: 'Драго ми је',
        pron: '드라고 미 예',
        situationKo: '처음 만난 친구에게 자기소개를 하며 반가움을 표현할 때는?',
        situationEn: 'What do you say when meeting someone for the first time?',
        scene: 'handshake'
      },
      {
        id: 3,
        group: 'thanks',
        ko: '고마워',
        en: 'Thank you',
        latin: 'Hvala',
        cyrillic: 'Хвала',
        pron: '흐발라',
        situationKo: '친구가 연필을 빌려주거나 도움을 주었을 때 하는 말은?',
        situationEn: 'What do you say when someone helps you?',
        scene: 'heart'
      },
      {
        id: 4,
        group: 'sorry',
        ko: '미안해',
        en: 'Sorry / Excuse me',
        latin: 'Izvini',
        cyrillic: 'Извини',
        pron: '이즈비니',
        situationKo: '실수로 친구의 발을 밟았거나 사과해야 할 때 하는 말은?',
        situationEn: 'What do you say when you accidentally bump into a friend?',
        scene: 'sorry'
      },
      {
        id: 5,
        group: 'food',
        ko: '맛있어',
        en: 'It is delicious',
        latin: 'Ukusno je',
        cyrillic: 'Укусно је',
        pron: '우쿠스노 예',
        situationKo: '세르비아 전통 음식 체바피(Ćevapi)를 먹고 감탄할 때는?',
        situationEn: 'What do you say after tasting delicious food?',
        scene: 'food'
      },
      {
        id: 6,
        group: 'bye_casual',
        ko: '잘 가',
        en: 'Bye / See you',
        latin: 'Ćao',
        cyrillic: 'Ћао',
        pron: '차오',
        situationKo: '수업이 끝나고 친구와 가볍게 손을 흔들며 헤어질 때는?',
        situationEn: 'What is a casual way to say "Bye" to a friend after school?',
        scene: 'bye'
      },
      {
        id: 7,
        group: 'morning',
        ko: '좋은 아침',
        en: 'Good morning',
        latin: 'Dobro jutro',
        cyrillic: 'Добро јутро',
        pron: '도브로 유트로',
        situationKo: '아침에 일어나 가족이나 선생님께 첫인사를 건넬 때는?',
        situationEn: 'What do you say to greet people in the morning?',
        scene: 'morning'
      },
      {
        id: 8,
        group: 'night',
        ko: '좋은 밤',
        en: 'Good night',
        latin: 'Laku noć',
        cyrillic: 'Лаку ноћ',
        pron: '라쿠 노치',
        situationKo: '밤에 잠자리에 들기 전 가족에게 인사를 건넬 때는?',
        situationEn: 'What do you say right before going to sleep at night?',
        scene: 'night'
      },
      {
        id: 9,
        group: 'ask_well',
        ko: '잘 지내?',
        en: 'How are you?',
        latin: 'Kako si?',
        cyrillic: 'Како си?',
        pron: '카코 시',
        situationKo: '오랜만에 만난 친구의 안부를 물어볼 때 하는 말은?',
        situationEn: 'How do you ask a friend "How are you?"',
        scene: 'ask'
      },
      {
        id: 10,
        group: 'ans_well',
        ko: '잘 지내',
        en: 'I am good / fine',
        latin: 'Dobro sam',
        cyrillic: 'Добро сам',
        pron: '도브로 삼',
        situationKo: '친구가 "Kako si?(잘 지내?)"라고 물었을 때 긍정적으로 대답하려면?',
        situationEn: 'How do you answer "I am good" when asked how you are?',
        scene: 'good'
      },
      {
        id: 11,
        group: 'yes',
        ko: '응 / 네',
        en: 'Yes',
        latin: 'Da',
        cyrillic: 'Да',
        pron: '다',
        situationKo: '친구의 제안에 찬성하거나 "응, 맞아"라고 대답할 때는?',
        situationEn: 'How do you say "Yes" in agreement?',
        scene: 'yes'
      },
      {
        id: 12,
        group: 'no',
        ko: '아니',
        en: 'No',
        latin: 'Ne',
        cyrillic: 'Не',
        pron: '네',
        situationKo: '정중하게 거절하거나 "아니요"라고 대답할 때는?',
        situationEn: 'How do you say "No"?',
        scene: 'no'
      },
      {
        id: 13,
        group: 'please',
        ko: '부탁해',
        en: 'Please',
        latin: 'Molim te',
        cyrillic: 'Молим те',
        pron: '몰림 테',
        situationKo: '친구에게 물 한 잔을 건네달라고 정중히 부탁할 때는?',
        situationEn: 'What word do you add when politely asking a friend for a favor?',
        scene: 'please'
      },
      {
        id: 14,
        group: 'congrats',
        ko: '축하해',
        en: 'Congratulations',
        latin: 'Čestitam',
        cyrillic: 'Честитам',
        pron: '체스티탐',
        situationKo: '친구가 대회에서 상을 받았거나 생일을 맞이했을 때 하는 말은?',
        situationEn: 'What do you say when a friend wins a prize or celebrates?',
        scene: 'party'
      },
      {
        id: 15,
        group: 'see_again',
        ko: '또 만나!',
        en: 'See you again!',
        latin: 'Vidimo se!',
        cyrillic: 'Видимо се!',
        pron: '비디모 세',
        situationKo: '다음에 다시 만날 것을 약속하며 헤어질 때 하는 말은?',
        situationEn: 'What do you say when promising to see each other again?',
        scene: 'again'
      }
    ]
  }
};

// 돼지 캐릭터 카드 이미지(images/*.png) 로더
function sceneSvg(scene) {
  const map = {
    wave: 'zdravo.png',
    handshake: 'drago_mi_je.png',
    heart: 'hvala.png',
    sorry: 'izvini.png',
    food: 'ukusno_je.png',
    bye: 'cao.png',
    morning: 'dobro_jutro.png',
    night: 'laku_noc.png',
    ask: 'kako_si.png',
    good: 'dobro_sam.png',
    yes: 'da.png',
    no: 'ne.png',
    please: 'molim_te.png',
    party: 'cestitam.png',
    again: 'vidimo_se.png'
  };
  const file = map[scene] || 'zdravo.png';
  return `<img src="images/${file}" alt="${scene}" style="width:180px;height:auto;border-radius:18px;box-shadow:0 6px 16px rgba(46,37,80,0.12);">`;
}

// Web Speech API 음성 읽기 도우미
function speakExpression(text, lang = 'sr-RS') {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang;
  utter.rate = 0.9;
  window.speechSynthesis.speak(utter);
}

// 퀴즈 문제 목록 생성기 (복수 정답 방지 로직 포함)
function buildQuizDeck({ packKey = 'sr', items, mode = 'learn_sr', types = ['match', 'listen', 'situation'], count = 10 }) {
  const pack = LANGUAGE_PACKS[packKey] || LANGUAGE_PACKS.sr;
  const pool = [...items];
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const selectedTargets = [];
  while (selectedTargets.length < count) {
    selectedTargets.push(...shuffle(pool));
  }
  const targets = selectedTargets.slice(0, count);

  return targets.map((item, idx) => {
    const qType = types[idx % types.length];
    // 방향 결정: 'to_ko' (세르비아어 제시 -> 한국어/영어 뜻 고르기) 또는 'to_sr' (한국어 제시 -> 세르비아어 고르기)
    let dir = 'to_ko';
    if (mode === 'learn_sr') dir = 'to_ko';
    else if (mode === 'learn_ko') dir = 'to_sr';
    else dir = idx % 2 === 0 ? 'to_ko' : 'to_sr';

    // 동일 group 제외하여 복수 정답 원천 차단
    const distractors = shuffle(pack.items.filter((x) => x.id !== item.id && x.group !== item.group)).slice(0, 3);
    const rawOptions = shuffle([item, ...distractors]);

    let label = '';
    let promptMain = '';
    let promptSub = '';
    let speechText = '';
    let speechLang = pack.speechLang;
    let showScene = false;

    if (qType === 'match') {
      label = 'Word Match · 단어 뜻 맞히기';
      if (dir === 'to_ko') {
        promptMain = `${item.latin} (${item.cyrillic})`;
        promptSub = '이 세르비아어 표현의 뜻은 무엇일까요?';
        speechText = item.latin;
        speechLang = pack.speechLang;
      } else {
        promptMain = `${item.ko} (${item.en})`;
        promptSub = '이 한국어 표현을 세르비아어로 어떻게 말할까요?';
        speechText = item.ko;
        speechLang = pack.koSpeechLang;
      }
    } else if (qType === 'listen') {
      label = 'Listen Up · 듣고 맞히기';
      if (dir === 'to_ko') {
        promptMain = '🔊 소리를 듣고 알맞은 뜻을 고르세요!';
        promptSub = '버튼을 눌러 발음을 다시 들을 수 있어요';
        speechText = item.latin;
        speechLang = pack.speechLang;
      } else {
        promptMain = '🔊 한국어 발음을 듣고 세르비아어 표현을 고르세요!';
        promptSub = '버튼을 눌러 발음을 다시 들을 수 있어요';
        speechText = item.ko;
        speechLang = pack.koSpeechLang;
      }
    } else {
      label = 'What to Say? · 상황 표현 고르기';
      showScene = true;
      if (dir === 'to_ko') {
        promptMain = item.situationKo;
        promptSub = item.situationEn;
        speechText = item.latin;
        speechLang = pack.speechLang;
      } else {
        promptMain = item.situationEn;
        promptSub = item.situationKo;
        speechText = item.ko;
        speechLang = pack.koSpeechLang;
      }
    }

    // What to Say 는 항상 대상 언어 표현을 고르도록 구성, 그 외는 dir 에 따름
    const optionLang = qType === 'situation' ? (dir === 'to_ko' ? 'sr' : 'ko') : (dir === 'to_ko' ? 'ko' : 'sr');

    const options = rawOptions.map((opt) => ({
      id: opt.id,
      main: optionLang === 'sr' ? opt.latin : opt.ko,
      sub: optionLang === 'sr' ? opt.cyrillic : opt.en
    }));

    return {
      index: idx,
      type: qType,
      dir,
      label,
      promptMain,
      promptSub,
      speechText,
      speechLang,
      showScene,
      scene: item.scene,
      options,
      answerId: item.id,
      reveal: {
        latin: item.latin,
        cyrillic: item.cyrillic,
        ko: item.ko,
        en: item.en,
        pron: item.pron,
        speechText: item.latin,
        speechLang: pack.speechLang
      }
    };
  });
}
