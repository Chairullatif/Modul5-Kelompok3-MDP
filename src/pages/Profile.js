import { Fragment } from "react";
import CardProfile from "../component/CardProfile";
import "./Profile.css";

export default function Profile() {

  const biodata = [
    {
      id: 1,
      nama: "Alberto Mathew Christopher",
      nim: 21120118170002,
      univ: "Diponegoro University",
      photo_url: "https://avatars.githubusercontent.com/u/64156853?v=4",
      github_link: "https://github.com/AlbertoMathew"
    },
    {
      id: 2,
      nama: "Chairullatif Aji Sadewa",
      nim: 21120119120015,
      univ: "Diponegoro University",
      photo_url: "https://avatars.githubusercontent.com/u/63132465?v=4",
      github_link: "https://github.com/Chairullatif"
    },
    {
      id: 3,
      nama: "Erlin Sofia Sitohang",
      nim: 21120119120014,
      univ: "Diponegoro University",
      photo_url: "https://avatars.githubusercontent.com/u/64193144?v=4",
      github_link: "https://github.com/ErlinSofi18"
    },
    {
      id: 4,
      nama: "Mohammad Rifqi Satriamas",
      nim: 21120119130115,
      univ: "Diponegoro University",
      photo_url: "https://avatars.githubusercontent.com/u/57549269?v=4",
      github_link: "https://github.com/iamghost19"
    },
  ]

  return (
    <>
      <p id="profile">Group Members</p>
      {biodata.map((item, index) => (
        <Fragment key={item.id}>
          <CardProfile
            nama={item.nama}
            photo_url={item.photo_url}
            nim={item.nim}
            univ={item.univ}
            github_link={item.github_link}
            onClick={() => alert(item.nama)}
          />
          {biodata.length === index + 1 && <div style={{ marginBottom: 80 }} />}
        </Fragment>
      ))}
    </>
  );
}
