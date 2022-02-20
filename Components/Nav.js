import Link from "next/link"

export default function Nav() {
  return (
    <header class="border-b sticky top-0 bg-white">
      <div class="flex items-center justify-between max-w-6xl pt-4 px-4 pb-2 mx-auto lg:max-w-screen-xl">
        <Link href={'/'} passHref>
          <a class="cursor-pointer"><span class="text-lg pt-1 font-bold">Home</span></a>
        </Link>
        <Link href={'/'} passHref>
          <a class="cursor-pointer"><span class="text-md font-bold">Cart</span></a>
        </Link>
      </div>
    </header>
  )
}
