import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import authorFilter from "../../../data/user_defined/article_authors.json"
import { SectionTitleOne } from "../../elements/sectionTitle/SectionTitle";
import { HoverActiveClass, slugify } from "../../utils";

const filters = authorFilter.slice(0,10);

const defaultActiveCat = slugify(filters[0].author_name);

const PostSectionSix = ({ postData }) => {
  const defaultData = postData.filter(
    (post) => slugify(post.author_name) === defaultActiveCat
  );

  const [activeNav, setActiveNav] = useState(defaultActiveCat);
  const [tabPostData, setTabPostData] = useState(defaultData);

  const handleChange = (e) => {
    let filterText = slugify(e.target.textContent);
    setActiveNav(filterText);

    let tempData = [];

    for (let i = 0; i < postData.length; i++) {
      const element = postData[i];
      let categories = element["author_name"];

      if (slugify(categories).includes(filterText)) {
        tempData.push(element);
      }
    }

    setTabPostData(tempData);
  };

  const hoverRef = useRef();
  HoverActiveClass(hoverRef);

  return (
    <div className="axil-trending-post-area axil-section-gap bg-color-white">
      <div className="container">
        <SectionTitleOne title="Popular Authors" />
        <div className="row">
          <div className="col-lg-12">
            <Tab.Container id="axilTab" defaultActiveKey={activeNav}>
              <Nav className="axil-tab-button nav nav-tabs mt--20">
                {filters.map((data) => (
                  <Nav.Item key={data.id}>
                    <Nav.Link
                      onClick={handleChange}
                      eventKey={slugify(data.author_name)}
                    >
                      {data.author_name}
                    </Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>

              <Tab.Content>
                <Tab.Pane
                  className="row trend-tab-content"
                  eventKey={activeNav} 
                >
                  <div className="col-lg-8">
					<div className="row" ref={hoverRef}>
                    {tabPostData.slice(0, 3).map((data, index) => (
						<div className="col-12" key={data.slug}>
							<div className={`content-block trend-post post-order-list ${index === 0 ? "is-active" : "axil-control"}`}>
								<div className="post-inner">
								<span className="post-order-list">{index + 1}</span>
								<div className="post-content">
									<div className="post-cat">
									<div className="post-cat-list">
										<Link href={`/author/${slugify(data.author_name)}`}>
										<a className="hover-flip-item-wrapper">
											<span className="hover-flip-item">
											<span data-text={data.author_name}>
												{data.author_name}
											</span>
											</span>
										</a>
                  						</Link>
									</div>
									</div>
									<h3 className="title">
										<a href={data.link} target={"_blank"}>{data.title}</a>
									</h3>
									<div className="post-meta-wrapper">
									<div className="post-meta">
										<div className="content">
										<h6 className="post-author-name">
											<Link href={`/author/${slugify(data.author_name)}`}>
											<a className="hover-flip-item-wrapper">
												<span className="hover-flip-item">
												<span data-text={data.author_name}>
													{data.author_name}
												</span>
												</span>
											</a>
											</Link>
										</h6>
										<ul className="post-meta-list">
											<li>{data.date}</li>
											<li>{data.read_time}</li>
										</ul>
										</div>
									</div>
									<ul className="social-share-transparent justify-content-end">
										{data.author_social.map((data) => (
											<li key={data.url}>
											<a href={data.url}>
											<i className={data.icon} />
											</a>
										</li>
										))}
									</ul>
									</div>
								</div>
								</div>
								{data.featureImg ? 
								<div className="post-thumbnail">
										<a href={data.link} target={"_blank"}>
											<Image
												src={data.featureImg}
												alt={data.title}
												height={410}
												width={410}
												priority={true}
											/>
										</a>
								</div>
								:""}
							</div>
						</div>
                    ))}
                  </div>
				  </div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostSectionSix;
