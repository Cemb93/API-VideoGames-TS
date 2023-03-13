import Link from "next/link";

export default function Landing() {
  return (
    <main>
      {/* <Games/> */}
      <Link href={'/games'} >
        <button>Ver los Video Juegos</button>
      </Link>
    </main>
  )
}
