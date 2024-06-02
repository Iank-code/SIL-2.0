"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchWrapper from "@/components/wrappers/searchWrapper";
import ProductCard from "@/components/card/productCard";
import { album } from "../../../../../types";

export default function UserPage({ params }: { params: { id: string } }) {
  const [albums, setAlbums] = useState<album[]>([]);
  const [newAlbums, setNewAlbums] = useState<album[]>([]);
  const [search, setSearch] = useState<string>("");
  const [numberOfPhotosInAlbums, setNumberOfPhotosInAlbums] = useState<{
    [key: number]: number;
  }>({});
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      try {
        const userResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${params.id}`
        );
        if (userResponse.status !== 200) {
          console.log("Error fetching user");
          return;
        }
        setUser(userResponse.data);

        const albumsResponse = await axios.get(
          `https://jsonplaceholder.typicode.com/albums?userId=${params.id}`
        );
        if (albumsResponse.status !== 200) {
          console.log("Error fetching albums");
          return;
        }
        setAlbums(albumsResponse.data);
        setNewAlbums(albumsResponse.data);

        // Getting number of photos in each album
        const albumsPhotosPromises = albumsResponse.data.map((album: album) =>
          axios.get(
            `https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`
          )
        );
        const albumsPhotosResponses = await Promise.all(albumsPhotosPromises);

        const albumsPhotosCount = albumsPhotosResponses.reduce(
          (acc, response, index) => {
            acc[albumsResponse.data[index].id] = response.data.length;
            return acc;
          },
          {} as { [key: number]: number }
        );

        setNumberOfPhotosInAlbums(albumsPhotosCount);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [params.id]);

  useEffect(() => {
    if (search !== "") {
      let filteredData = albums.filter((album) => {
        return album.title.toLowerCase().includes(search.toLowerCase());
      });
      setNewAlbums(filteredData);
    } else {
      setNewAlbums(albums);
    }
  }, [search, albums]);

  return (
    <div>
      <SearchWrapper
        category={user && user.name}
        text={user && user.email}
        avatarName={user && user.name}
        placeholder="Type any album name"
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-5 gap-7 px-10 py-20 max-[600px]:grid-cols-2 max-[600px]:px-3 max-[600px]:gap-3 max-[930px]:grid-cols-3">
        {newAlbums &&
          newAlbums.map((album: album) => (
            <ProductCard
              key={album.id}
              id={album.id}
              name="album"
              title={album.title}
              noOfPhotos={numberOfPhotosInAlbums[album.id] || 0}
            />
          ))}
      </div>
    </div>
  );
}
