import { notFound } from 'next/navigation';
import Link from 'next/link';
import { history } from '../../../../data/history';

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


//모든 로직은 서비스->에서 정의해서 각 페이지 에서는 불러서 쓸 수 있게 
// history.find((yearData)  이렇것 들도 모두 다시 수정해야 한다! ->데이터 처리는 따로 있어야 한다 
// 데이터 처리는 서비스에서만 여기서는 페이지를 보여주는 것만을 목표로 한다! 