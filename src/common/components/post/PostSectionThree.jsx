import Image from "next/image";
import { slugify } from "../../utils";
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import AddBanner from "../ad-banner/AddBanner";

const PostSectionThree = ({ postData, adBanner, bgColor, heading }) => {

  const firstPost = postData.filter(post => post.featured === true)[0];

  return (
    <div className={`axil-video-post-area axil-section-gap ${bgColor || "bg-color-black"}`}>
      <div className="container">
      {adBanner === true ?  
			<div className="row">
            <div className="col-lg-12">
              <AddBanner
                img="/images/add-banner/banner-03.webp"
                pClass="mb--30"
              />
            </div>
          </div> : ""}
        {heading ? <SectionTitleOne title={heading} /> : ""}
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
            <div className="content-block post-default image-rounded mt--30">
            {firstPost.featureImg ? 
              <div className="post-thumbnail">
                  <a href={firstPost.link} target="_blank">
                    <Image
                      src={firstPost.featureImg}
                      alt={firstPost.title}
                      height={500}
                      width={600}
                      priority={true}
                    />
                  </a>
                {firstPost.postFormat === 'video' ? 
                  <a href={firstPost.link} target="_blank" className="video-popup position-top-center">
                    <span className="play-icon" />
                  </a>
                 : ""}
               
              </div>:""}
              <div className="post-content">
                <div className="post-cat">
                  <div className="post-cat-list">
                      <a href={firstPost.link} target="_blank" className="hover-flip-item-wrapper">
                        <span className="hover-flip-item">
                          <span data-text={firstPost.cate}>
                            {firstPost.cate}
                          </span>
                        </span>
                      </a>
                  </div>
                </div>
                <h3 className="title">
                    <a href={firstPost.link} target="_blank">
                      {firstPost.title}
                    </a>
                </h3>
                <div className="post-meta-wrapper">
                  <div className="post-meta">
                    <div className="content">
                      <h6 className="post-author-name">
                          <a href={firstPost.link} target="_blank" className="hover-flip-item-wrapper">
                            <span className="hover-flip-item">
                              <span data-text={firstPost.author_name}>
                                {firstPost.author_name}
                              </span>
                            </span>
                          </a>
                      </h6>
                      <ul className="post-meta-list">
                        <li>{firstPost.date}</li>
                        <li>{firstPost.read_time}</li>
                      </ul>
                    </div>
                  </div>
                  <ul className="social-share-transparent justify-content-end">
                    {firstPost.author_social.map((social) =>(
                      <li key={social.url}>
                        <a href={social.url}>
                          <i className={social.icon} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-md-6 col-12">
            <div className="row">
              {postData
              .filter(post => post.featured === true)
              .slice(1, 5).map((data) => (
                <div className="col-lg-6 col-md-6 col-sm-6 col-12" key={data.slug}>
                  <div className="content-block post-default image-rounded mt--30">
                  {data.featureImg ? 
                    <div className="post-thumbnail">
                      <a href={data.link} target="_blank">
                        <Image
                          src={data.featureImg}
                          alt={data.title}
                          height={190}
                          width={285}
                          priority={true}
                        />
                      </a>
                    {data.postFormat === 'video' ?
                      <a  href={data.link} target="_blank" className="video-popup size-medium position-top-center">
                        <span className="play-icon" />
                      </a>
                       : ""}
                    
                    </div>
                    :""}
                    <div className="post-content">
                      <div className="post-cat">
                        <div className="post-cat-list">
                          <a href={data.link} target="_blank" className="hover-flip-item-wrapper">
                            <span className="hover-flip-item">
                              <span data-text={data.cate}>
                                {data.cate}
                              </span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <h5 className="title">
                        <a href={data.link} target="_blank">
                          {data.title}
                        </a>
                      </h5>
                    </div>
                  </div>
                </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionThree;
