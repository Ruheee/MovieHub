"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
const axios = require("axios");

export default function Home() {
  const [backendData, setBackendData] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:3001/api/movies").then((res) => {
      setBackendData(res.data.users)
    });
  }, []);
  return (
    <main className={styles.main}>
      {backendData.map((user, index) => {
        return (
          <p key={index}>{user}</p>
        )
      })}
    </main>
  );
}
