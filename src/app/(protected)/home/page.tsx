"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchWrapper from "@/components/wrappers/searchWrapper";
import { user } from "../../../../types";
import UserCard from "@/components/card/userCard";

export default function page() {
  const [numberOfAlbums, setNumberOfAlbums] = useState<any>([]);
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const usersResponse = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (usersResponse.status !== 200) {
          console.log("Error");
          return;
        }
        setUsers(usersResponse.data);

        // Fetch albums for each user
        const albumsPromises = usersResponse.data.map((user: user) =>
          axios.get(
            `https://jsonplaceholder.typicode.com/albums?userId=${user.id}`
          )
        );
        const albumsResponses = await Promise.all(albumsPromises);
        const albumsData = albumsResponses.map((response) => response.data);
        setNumberOfAlbums(albumsData);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (users) {
      const fetchAlbums = async () => {
        try {
          const albumsPromises = users.map(async (user: user) => {
            const { data: albums } = await useGetAlbumsByUserIdQuery(
              user.id
            ).unwrap();
            return { userId: user.id, albumCount: albums.length };
          });

          const albumsData = await Promise.all(albumsPromises);
          const albumsCount = albumsData.reduce(
            (acc, { userId, albumCount }) => {
              acc[userId] = albumCount;
              return acc;
            },
            {} as { [key: number]: number }
          );

          setNumberOfAlbums(albumsCount);
        } catch (error) {
          console.error(error);
        }
      };

      fetchAlbums();
    }
  }, [users]);

  return (
    <div>
      <SearchWrapper
        category="Users"
        text="Below are the users in the system. You can choose to search through them by name, email or username. You can click on any of these users to view their albums"
      />

      <div className="grid grid-cols-5 gap-7 px-10 py-20 max-[600px]:grid-cols-2 max-[600px]:px-3 max-[600px]:gap-3 max-[930px]:grid-cols-3">
        {users &&
          users.map((user: user, index: number) => (
            <UserCard
              key={user.id}
              userData={user}
              albums={numberOfAlbums[user.id]}
            />
          ))}
      </div>
    </div>
  );
}
