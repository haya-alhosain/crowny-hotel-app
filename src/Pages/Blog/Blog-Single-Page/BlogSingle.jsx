import React, { useEffect, useState } from "react";
import HeadTitle from "../../../components/HeadTitle/HeadTitle";
import { Link, useParams } from "react-router-dom";
import BlogData from "../BlogData";
import EmptyFile from "../../../components/EmptyFile";
import './BlogSingle.css'

const BlogSingle = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  useEffect(() => {
    let item = BlogData.find((item) => item.id === parseInt(id));
    if (item) {
      setItem(item);
    }
  }, [id]);
  return (
    <>
      <HeadTitle />
      {item ? (
        <section className="single-page top">
          <div className="container">
            <Link to="/blog" className="primary-btn back">
              Go Back
              <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
          <article className="content flex">
            <div className="main-content">
              <img src={item.cover} alt="" />
              <div className="category flex_space">
                <span>{item.date}</span>
                <label>{item.catgeory}</label>
              </div>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <p>{item.desc}</p>

              <h2>Two Column Text Sample</h2>
              <div className="para flex_space">
              <p>{item.para}</p>
              <p>{item.para}</p>
              </div>
            </div>

            <div className="side-content">
              <div className="category-list">
                <h2>Category</h2>
                <hr/>
                <ul>
                    {
                        BlogData.map((item)=>{
                            return(
                                <li>
                                    <i className="far fa-play-circle"></i>
                                    {item.catgeory}
                                </li>
                            )
                        })
                    }
                </ul>
              </div>
            </div>
          </article>
        </section>
      ) : (
        <EmptyFile />
      )}
    </>
  );
};

export default BlogSingle;
