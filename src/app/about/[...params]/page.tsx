
import { notFound } from 'next/navigation';
import { history } from '../../../../data/history';
  

//모든 연도과 슬러그 조합으로 생성 => 다중동적경로로 변경 배열로 사용 
  export async function generateStaticParams() {
    //스트링 배열로만 선언 
    const params: { params: string[] }[] = [];

    history.forEach((yearData) => {
      yearData.events.forEach((event) => {
        params.push({
          year: yearData.year.toString(),
          slug: event.slug
        });
      });
    });
  
    return params;
  }

  // 연도와 슬러그를 기반으로 이벤트 가져오기 
    type Params = {
        params: {
        year: string;
        slug: string;
        };
    };
    
    export default function AboutEvent({ params }: Params) {
        const yearData = history.find((yearData) => yearData.year.toString() === params.year);
      
        if (!yearData) {
          notFound();
        }
      
        const event = yearData.events.find((event) => event.slug === params.slug);
      
        if (!event) {
          notFound();
        }
      
        return (
          <div>
            <h1>{event.title}</h1>
            <p>{event.content}</p>
          </div>
        );
      }
  