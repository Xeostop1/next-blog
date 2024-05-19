import { notFound } from 'next/navigation';
import Link from 'next/link';
import { history } from '../../../../data/history';

// 모든 가능한 연도와 슬러그 조합을 생성(지금 한게 =>Catch-all Segments) 캐치 올 세그먼트
//배열로 	/shop/a/b/c	{ slug: ['a', 'b', 'c']  계속 url이 붙는 형식 
//Optional Catch-all Segments 그런데 이거랑 어떻게 확실한 차이가 있는지는 모르겠다. 만들어 봐야 알듯 

export async function generateStaticParams() {
  const params: { params: string[] }[] = [];

  history.forEach((yearData) => {
    // 연도별 페이지 경로 추가
    params.push({
      params: [yearData.year.toString()],
    });
    // 이벤트별 페이지 경로 추가
    yearData.events.forEach((event) => {
      params.push({
        params: [yearData.year.toString(), event.slug],
      });
    });
  });

  return params;
}

// 연도와 슬러그를 기반으로 이벤트 가져오기
type Params = {
  params: {
    params: string[];
  };
};

export default function AboutPage({ params }: Params) {
  const { params: [year, slug] } = params;

  const yearData = history.find((yearData) => yearData.year.toString() === year);

  if (!yearData) {
    notFound();
  }

  if (slug) {
    // 이벤트 상세 페이지
    const event = yearData.events.find((event) => event.slug === slug);

    if (!event) {
      notFound();
    }

    return (
      <div>
        <h1>{event.title}</h1>
        <p>{event.content}</p>
      </div>
    );
  } else {
    // 연도별 페이지
    return (
      <div>
        <h1>{year} Events</h1>
        <ul>
          {yearData.events.map((event) => (
            <li key={event.slug}>
              <Link href={`/about/${year}/${event.slug}`}>
                {event.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
