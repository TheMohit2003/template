import Image from "next/image";
import image from "/public/image.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" w-full flex flex-col justify-between ">
      <div className=" w-full flex flex-row text-[#763504]  items-center px-8 py-2">
        <div className=" basis-1/6 flex justify-center ">
          <Image src={image} width={120} alt="Logo" />
        </div>
        <div className=" basis-5/6">
          <h1 className=" text-3xl font-bold tracking-normal ">
            Government Dental College
          </h1>
          <p>
            Dental College and Hospital, Chhatrapati Sambhajinagar, Maharashtra
          </p>
        </div>
      </div>
      <div>
        <div className="w-full bg-[#FFF1CF] text-[#8C3504] flex justify-end gap-6 text-lg font-medium py-2 pr-24">
          <Link href={"/"}>Home</Link>
          <Link href={"/departments"}>Departments</Link>
          <Link href={"/departments"}>Departments</Link>
          <Link href={"/departments"}>Departments</Link>
          <Link href={"/"}>Contact</Link>
          <Link href={"/about"}>About us</Link>
        </div>
      </div>
    </div>
  );
}
