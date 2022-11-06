import { useState } from 'react';
import Link from 'next/link'
import Image from "next/image";
import { slugify } from "../../utils";
import categoryFilter from "../../../data/user_defined/article_categories.json";
import authorFilter from "../../../data/user_defined/article_authors.json";

// category filtering for mega menu
const cateFilters = categoryFilter;
const defaultActiveCat = slugify(cateFilters[0].cate);

// author filtering for mega menu
const authFilters = authorFilter;
const defaultActiveAuthor = slugify(authFilters[0].author_name);

const Nav = ({posts}) => {

    // category filtering
    const defaultCatData = posts.filter(
        (post) => slugify(post.cate) === defaultActiveCat
      );
    
      const [activeCatNav, setActiveCatNav] = useState(defaultActiveCat);
      const [tabPostCatData, setTabCatPostData] = useState(defaultCatData);
    
      const handleCatChange = (e) => {
        let filterCatText = slugify(e.target.textContent);
        setActiveCatNav(filterCatText);
        
        let tempCatData = [];
    
        for (let i = 0; i < posts.length; i++) {
          const element = posts[i];
          let categories = element["cate"];
    
          if (slugify(categories).includes(filterCatText)) {
            tempCatData.push(element);
          }
        }
        setTabCatPostData(tempCatData);
      };


    // author filtering 
    const defaultAuthData = posts.filter(
        (post) => slugify(post.cate) === defaultActiveAuthor
      );
    
      const [activeAuthNav, setActiveAuthNav] = useState(defaultActiveAuthor);
      const [tabPostAuthData, setTabAuthPostData] = useState(defaultAuthData);
    
      const handleAuthChange = (e) => {
        let filterAuthText = slugify(e.target.textContent);
        setActiveAuthNav(filterAuthText);
        
        let tempAuthData = [];
    
        for (let i = 0; i < posts.length; i++) {
          const element = posts[i];
          let authorName = element["author_name"];
    
          if (slugify(authorName).includes(filterAuthText)) {
            tempAuthData.push(element);
          }
        }
        setTabAuthPostData(tempAuthData);
      };


    return (
        <ul className="mainmenu">
            <li>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </li>
            <li className="menu-item-has-children megamenu-wrapper">
                <Link href="#">
                    <a>Categories</a>
                </Link>
                <ul className="megamenu-sub-menu">
                    <li className="megamenu-item">
                        {/* Start Verticle Nav  */}
                        <div className="axil-vertical-nav">
                            <ul className="vertical-nav-menu">
                                {cateFilters.map((data) => (
                                    <li className={`vertical-nav-item ${slugify(data.cate) === activeCatNav ? "active" : ""}`} key={data.id}>
                                        <a className="hover-flip-item-wrapper" href="#" onMouseOver={handleCatChange}>
                                            <span className="hover-flip-item">
                                                <span data-text={data.cate}>{data.cate}</span>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Start Verticle Nav  */}
                        {/* Start Verticle Menu  */}
                        <div className="axil-vertical-nav-content">
                            {/* Start One Item  */}
                            <div className="axil-vertical-inner tab-content">
                                <div className="axil-vertical-single">
                                    <div className="row">
                                        {tabPostCatData.slice(0, 24).map((data) => (
                                            <div className="col-lg-3" key={data.slug}>
                                                <div className="content-block image-rounded">
                                                    <div className="post-thumbnail mb--20">
                                                        <a a href={data.link} target={"_blank"}>
                                                        <Image
                                                            src={data.featureImg}
                                                            alt={data.title}
                                                            height={130}
                                                            width={200}
                                                            priority={true}
                                                        />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <div className="post-cat">
                                                            <div className="post-cat-list">
                                                            <Link href={`/category/${slugify(data.cate)}`}>
                                                                <a className="hover-flip-item-wrapper">
                                                                <span className="hover-flip-item">
                                                                    <span data-text={data.cate}>
                                                                    {data.cate}
                                                                    </span>
                                                                </span>
                                                                </a>
                                                            </Link>
                                                            </div>
                                                        </div>
                                                        <h5 className="title">
                                                            <a a href={data.link} target={"_blank"}>{data.title}</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* End One Item  */}
                        </div>
                        {/* End Verticle Menu  */}
                    </li>
                </ul>
            </li>
            <li className="menu-item-has-children megamenu-wrapper">
                <Link href="#">
                    <a>Authors</a>
                </Link>
                <ul className="megamenu-sub-menu">
                    <li className="megamenu-item">
                        {/* Start Verticle Nav  */}
                        <div className="axil-vertical-nav">
                            <ul className="vertical-nav-menu">
                                {authFilters.map((data) => (
                                    <li className={`vertical-nav-item ${slugify(data.author_name) === activeAuthNav ? "active" : ""}`} key={data.id}>
                                        <a className="hover-flip-item-wrapper" href="#" onMouseOver={handleAuthChange}>
                                            <span className="hover-flip-item">
                                                <span data-text={data.author_name}>{data.author_name}</span>
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Start Verticle Nav  */}
                        {/* Start Verticle Menu  */}
                        <div className="axil-vertical-nav-content">
                            {/* Start One Item  */}
                            <div className="axil-vertical-inner tab-content">
                                <div className="axil-vertical-single">
                                    <div className="row">
                                        {tabPostAuthData.slice(0, 24).map((data) => (
                                            <div className="col-lg-3" key={data.slug}>
                                                <div className="content-block image-rounded">
                                                    <div className="post-thumbnail mb--20">
                                                        <a href={data.link} target={"_blank"}>
                                                        <Image
                                                            src={data.featureImg}
                                                            alt={data.title}
                                                            height={130}
                                                            width={200}
                                                            priority={true}
                                                        />
                                                        </a>
                                                    </div>
                                                    <div className="post-content">
                                                        <div className="post-cat">
                                                            <div className="post-cat-list">
                                                            <Link href={`/category/${slugify(data.cate)}`}>
                                                                <a className="hover-flip-item-wrapper">
                                                                <span className="hover-flip-item">
                                                                    <span data-text={data.cate}>
                                                                    {data.cate}
                                                                    </span>
                                                                </span>
                                                                </a>
                                                            </Link>
                                                            </div>
                                                        </div>
                                                        <h5 className="title">
                                                            <a href={data.link} target={"_blank"}>{data.title}</a>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* End One Item  */}
                        </div>
                        {/* End Verticle Menu  */}
                    </li>
                </ul>
            </li>
            <li className="menu-item-has-children">
                <Link href="/">
                    <a>Pages</a>
                </Link>
                <ul className="axil-submenu">
                    <li>
                        <Link href="/category/news">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="News Articles">News Articles</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/category/theology">
                            <a className="hover-flip-item-wrapper">
                                <span className="hover-flip-item">
                                    <span data-text="Theology Articles">Theology Articles</span>
                                </span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default Nav;
