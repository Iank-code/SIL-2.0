"use client";

import SearchWrapper from "@/components/wrappers/searchWrapper";
import axios from "axios";
import { useEffect, useState } from "react";
import { album, photoInterface } from "../../../../../types";
import ProductCard from "@/components/card/productCard";

export default function AlbumPage({ params }: { params: { id: string } }) {
  const [albumData, setAlbums] = useState<album>();
  const [photos, setPhotos] = useState<photoInterface[]>([]);
  const [newPhotos, setNewPhotos] = useState<photoInterface[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetching the album
        const albumResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${params.id}`
        );

        if (albumResponse.status !== 200) {
          console.log("Error fetching album");
          return;
        }

        setAlbums(albumResponse.data);

        // Fetching images associated with album
        const photosResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?albumId=${params.id}`
        );

        if (photosResponse.status !== 200) {
          console.log("Error fetching album");
          return;
        }

        setPhotos(photosResponse.data);
        setNewPhotos(photosResponse.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [params.id]);

  useEffect(() => {
    if (search !== "") {
      let filteredData = photos.filter((photo) => {
        return (
          photo.title.toLowerCase().includes(search.toLowerCase())
        );
      });
      setNewPhotos(filteredData);
    } else {
      setNewPhotos(photos);
    }
  }, [search]);
  return (
    <div>
      <SearchWrapper
        category={albumData && albumData.title}
        text={photos && `There are ${photos.length} in this album`}
        placeholder="Type any Photo name"
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-5 gap-7 px-10 py-20 max-[600px]:grid-cols-2 max-[600px]:px-3 max-[600px]:gap-3 max-[930px]:grid-cols-3">
        {newPhotos &&
          newPhotos.map((pic: photoInterface) => (
            <ProductCard
              key={pic.id}
              id={pic.id}
              name="photo"
              title={pic.title}
              image={pic.thumbnailUrl}
            />
          ))}
      </div>
    </div>
  );
}
