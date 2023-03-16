import React from 'react';
import { BlogImage } from "./BlogStyles";
import "./portfolio.css";
import { useTranslation } from 'react-i18next';

const lngs = {
  en : { nativeName: "English"},
  fr : {
    nativeName : "French"
  }
};
const Blogs = ({ data }) => {
  const { t } = useTranslation();
  return (
      <div>
        <ul>
          <BlogImage>
            <div className="General">
            {data && data.map((item, index) =>
            
            <div className={item.class}>
              <a href={item.blogId} > 
                        <article className="portfolio__item">
                          <div className="portfolio__item-image">
                            <img key={index} class="blogImages" src={item.imageUrl} alt={item.title}/>
                          </div>

                          <div className="portfolio__item-cta">
                            <div>
                              <a href={item.blogId} className="btn">
                                <p className="white">{t(item.title)}</p>
                              </a>
                            </div>
                          </div>
                          
          </article>
          </a>
            {/* <a href={item.blogId} className='Power'> 

                <img key={index} class="blogImages" src={item.imageUrl} alt={item.title}/>
                <p>{item.title}</p>
              </a> */}
              </div>
            )}
            </div>
          </BlogImage>
        </ul>
      </div>
  );
};
export default Blogs;