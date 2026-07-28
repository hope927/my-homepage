// 数字分身预设知识库 —— 基于关键词匹配的本地问答

export interface QARule {
  id: string;
  keywords: string[];
  question: string;
  answer: string;
}

export const qaRules: QARule[] = [
  {
    id: 'q1',
    keywords: ['接触', '多久', '学了', '入门', '开始', '多长'],
    question: '你接触ai多久了？',
    answer:
      '我之前做过销售，干过工地，现在沉下心来学习ai的知识，接触时间不算长，但正在全力投入。',
  },
  {
    id: 'q2',
    keywords: ['擅长', '干什么', '能做', '会什么', '用途', '用来', '会用'],
    question: '你擅长用ai干什么？',
    answer:
      '我擅长用ai进行创作，目前主要跟着ai学习制作网页作品，关注ai创作和创收方向。',
  },
  {
    id: 'q3',
    keywords: ['创收', '方向', '赚钱', '变现', '收入', '盈利', '钱'],
    question: '你有ai创收的方向吗？',
    answer:
      '我正在探索ai创收的方向，目前专注于用ai制作网页，希望未来能通过ai实现盈利。',
  },
];

export const fallbackAnswer =
  '感谢你的提问！这个问题我暂时没有准备答案，欢迎直接联系我深入交流。';

// 关键词命中匹配，命中最多者胜出，无命中则兜底
export function matchAnswer(input: string): string {
  const text = input.trim().toLowerCase();
  if (!text) return fallbackAnswer;

  let best: { score: number; answer: string } | null = null;
  for (const rule of qaRules) {
    let score = 0;
    for (const kw of rule.keywords) {
      if (text.includes(kw.toLowerCase())) score += 1;
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { score, answer: rule.answer };
    }
  }
  return best ? best.answer : fallbackAnswer;
}

export const suggestedQuestions: string[] = qaRules.map((r) => r.question);
