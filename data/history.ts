// data/history.ts

export const history: {
  year: number;
  events: {
    slug: string;
    title: string;
    content: string;
  }[];
}[] = [
  {
    year: 2021,
    events: [
      {
        slug: 'new-project',
        title: '프로젝트 시작',
        content: '2021년에 새로운 프로젝트를 시작'
      },
      {
        slug: 'launched-website',
        title: '웹사이트 런칭',
        content: '2021년에 웹사이트를 런칭'
      }
    ]
  },
  {
    year: 2022,
    events: [
      {
        slug: 'reached-10k-users',
        title: '사용자 1만명 돌파',
        content: '2022년에 사용자 수가 1만명을 돌파'
      },
      {
        slug: 'opened-new-office',
        title: '새 사무실 개설',
        content: '2022년에 사무실을 개설'
      }
    ]
  }
];
