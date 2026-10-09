import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.jpg";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="Nixora home">
      <Image src={logo} alt="" className="logo__mark" width={36} height={36} priority />
      NIXORA
    </Link>
  );
}
