"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchWrapper from "@/components/wrappers/searchWrapper";
import { album, user } from "../../../../types";
import UserCard from "@/components/card/userCard";

export default function Users() {
  const [albums, setAlbums] = useState<album[]>([]);
  const [users, setUsers] = useState<user[]>([]);
  const [newUsers, setNewUsers] = useState<user[]>([]);
  const [search, setSearch] = useState<string>("");

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
        setNewUsers(usersResponse.data);

        // Fetch albums for each user
        const albumsPromises = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        setAlbums(albumsPromises.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (search !== "") {
      let filteredData = users.filter((user) => {
        return (
          user.name.toLowerCase().includes(search.toLowerCase()) ||
          user.email.toLowerCase().includes(search.toLowerCase())
        );
      });
      setNewUsers(filteredData);
    }else{
      setNewUsers(users);
    }
  }, [search]);
  return (
    <div>
      <SearchWrapper
        category="Users"
        text="Below are the users in the system. You can choose to search through them by name, email or username. You can click on any of these users to view their albums"
        search={search}
        setSearch={setSearch}
      />

      <div className="grid grid-cols-5 gap-7 px-10 py-20 max-[600px]:grid-cols-2 max-[600px]:px-3 max-[600px]:gap-3 max-[930px]:grid-cols-3">
        {newUsers &&
          newUsers.map((user: user, index: number) => {
            const numberOfAlbums =
              albums && albums.filter((data: album) => data.userId === user.id);
            return (
              <UserCard
                key={user.id}
                userData={user}
                albums={numberOfAlbums.length}
              />
            );
          })}
      </div>
    </div>
  );
}
