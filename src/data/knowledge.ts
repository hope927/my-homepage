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
    keywords: ['你是谁', '介绍一下自己', '你叫什么', '叫什么'],
    question: '你是谁？',
    answer:
      '我叫HOPE，在深圳。之前在亲戚的门窗店帮了三年忙，主要干销售找客户。2026年开始转行学AI，现在全职学，目标就是做出能赚钱的东西。',
  },
  {
    id: 'q2',
    keywords: ['哪里人', '在哪', '深圳', '城市', '住哪'],
    question: '你是哪里人？',
    answer: '在深圳，目前住这边。',
  },
  {
    id: 'q3',
    keywords: ['之前做什么', '工作经历', '以前', '职业背景', '干过什么'],
    question: '你之前做什么工作？',
    answer:
      '在亲戚的门窗店帮忙，主要是找客户。也干过工地，搬砖那种。都是体力活和跑腿居多，没什么技术含量，所以才想转行。',
  },
  {
    id: 'q4',
    keywords: ['为什么学AI', '为什么转行', '怎么想到', '动机', '为什么'],
    question: '你为什么要学AI？',
    answer:
      '说实话，在交流会看到别人能做出一个东西还能赚钱，我羡慕。我没技术没背景，但有时间，能吃苦，就想试试能不能靠AI做出点东西来。',
  },
  {
    id: 'q5',
    keywords: ['怎么学的', '学习方法', '教程', '跟着什么学', '怎么学'],
    question: '你怎么学的？',
    answer:
      '跟着VibeVibe教程一步步来的，用秒哒和Trae写代码。没有报班，全靠免费工具和自己摸索。学几天就开始上手操作了，边做边学。',
  },
  {
    id: 'q6',
    keywords: ['做过什么', '项目', '作品', '经历', '做了什么'],
    question: '你做过什么项目？',
    answer:
      '这个主页就是我做的第一个项目。从零开始，用AI辅助编程搭的，包括聊天功能。还在学，后面会做更多东西。',
  },
  {
    id: 'q7',
    keywords: ['学历', '学历是什么', '什么学历', '文化程度', '读书'],
    question: '你学历是什么？',
    answer:
      '初中。学历不高，但我觉得做事比学历重要。能做出东西才是真的，其他都是虚的。',
  },
  {
    id: 'q8',
    keywords: ['创收', '赚钱', '变现', '收入', '怎么赚钱', '钱'],
    question: '你有AI创收的方向吗？',
    answer:
      '有。计划是先学做作品，然后接单做网站和小工具，再往自动化服务和小程序走。现在还在第一步，先把能力攒起来。不急着赚快钱。',
  },
  {
    id: 'q9',
    keywords: ['联系', '联系方式', '微信', '怎么找你', '找你'],
    question: '能联系你吗？',
    answer:
      '可以在下面聊天区直接跟我聊。其他的联系方式暂时没放，等我做出更多东西再说。',
  },
  {
    id: 'q10',
    keywords: ['多久了', '学了多久', '接触AI', '时间', '多久'],
    question: '你接触AI多久了？',
    answer:
      '2026年中开始的，现在还在学基础。不算久，但我每天都在学，进步还行。',
  },
];

export const fallbackAnswer =
  '这个问题我暂时答不上来，我还在学习中。你可以在下面聊天区直接问我，或者换个问题试试。';

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
