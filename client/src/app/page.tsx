"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import HomePages from "./home/pages";
import { useRouter } from "next/navigation";
const { BACKEND_URL } = process.env

export default function Landing() {
  const [user, setUser] = useState(null);
  // console.log("USER:", user)
  const getUser = async () => {
		try {
			const url = `${BACKEND_URL}/auth/login/success`;
			// const { data } = await axios.get(url, { withCredentials: true });
			const res = await fetch(url);
      console.log("DATA:", res)
      const data = await res.json();
      // console.log("DATA:", data)
			// setUser(data.user._json);
			setUser(data.user);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getUser();
	}, []);
  const router = useRouter();

  return (
    <main>
      <Link href={'/games'} >
        <button>Ver los Video Juegos</button>
      </Link>
      {/* {
        user ? <HomePages user={user} /> : (
          <Link href={"/login"} >
            <button>login</button>
          </Link>
        )
      } */}
          <Link href={"/login"} >
            <button>INGRESAR</button>
          </Link>
    </main>
  )
}
