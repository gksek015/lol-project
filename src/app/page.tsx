import Link from "next/link";

export default function Home() {
  return (
    <div className="relative h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center space-y-6 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide drop-shadow-lg mb-10">
          리그 오브 레전드 앱에 오신 것을 환영합니다!
        </h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-20">
          <Link
            href="/champions"
            className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            챔피언 목록
          </Link>
          <Link
            href="/items"
            className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            아이템
          </Link>
          <Link
            href="/rotation"
            className="bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-lg shadow-lg text-lg font-semibold transition-transform transform hover:scale-105"
          >
            Free Champions
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 text-center w-full">
        <p className="text-gray-400 text-sm">
          © 2024 리그 오브 레전드 앱 | 제작: 한다영
        </p>
      </div>
    </div>
  );
}

