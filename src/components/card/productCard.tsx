"use client";
import Image from "next/image";
import Link from "next/link";

interface albumData {
  id: number;
  title: string;
  name?: string;
  image?: string;
  noOfPhotos?: number | string;
}

export default function ProductCard({
  id,
  title,
  name,
  image,
  noOfPhotos,
}: albumData) {
  return (
    <Link
      href={name ? `/${name}/${id}` : "#"}
      className="flex flex-col gap-2 justify-flex-start bg-[#DAE7FF4D] rounded-md py-8 px-6 max-[600px]:text-sm flex-nowrap"
      data-testid="product-link"
    >
      <div className="flex flex-col items-start">
        {image ? (
          <Image src={image} alt="img.png" width={60} height={60} />
        ) : (
          <div>
            <h1 className="font-bold text-lg">{noOfPhotos}</h1>
            <span>Photos in this album</span>
          </div>
        )}
        <span className="flex p-2 bg-[#DAE7FF4D]">{title}</span>
      </div>
    </Link>
  );
}
