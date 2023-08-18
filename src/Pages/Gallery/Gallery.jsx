import React from "react";
import "./Gallery.css";
import HeadTitle from "../../components/HeadTitle/HeadTitle";
import Card from "./Card";
import GalleryData from './GalleryData'

const Gallery = () => {
  return (
    <>
      <HeadTitle />
      <section className="gallery top">
        <div className="container grid">
          {GalleryData.map(({ img, title }) => {
            return <Card image={img} title={title} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Gallery;
