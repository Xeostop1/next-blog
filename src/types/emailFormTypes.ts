export interface ContactFormData {
    name: string;
    email: string;
    message: string;
    success?: boolean; // 메일 전송 성공 여부 (선택적)
    responseMessage?: string; // 전송 결과 메시지 (선택적)
  }
  