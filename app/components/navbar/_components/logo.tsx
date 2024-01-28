import Link from "next/link"

const Logo = () => {
  return (
    <>
      <Link href="/">
        <img 
          src="images/logos/logo1.svg"
          alt="logo"
          width={50}
          height={50}
          className="w-24"
        />
      </Link>
    </>
  );
}

export default Logo;