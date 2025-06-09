import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-6 justify-between min-h-screen">
      <div className="*: font-medium flex flex-col my-auto items-center gap-2">
        <span className="text-9xl">🥕</span>
        <h1 className="text-4xl">당근</h1>
        <h2 className="text-2xl">당근 마켓에 어서오세요!</h2>
      </div>
      <div className="w-full flex flex-col gap-3 items-center">
        <Link className="primary-btn py-2.5" href="/create-account">
          시작하기
        </Link>
        <div className="flex gap-2">
          <span>이미 계정이 있나요?</span>
          <Link className=" hover:underline;" href="/login">
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
}
