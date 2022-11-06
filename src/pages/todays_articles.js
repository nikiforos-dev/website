import { getAllPosts } from '../../lib/api';
import InstagramOne from '../common/components/instagram/InstagramOne';
import BreadcrumbOne from '../common/elements/breadcrumb/breadcrumbOne';
import FooterOne from '../common/elements/footer/FooterOne';
import HeadTitle from "../common/elements/head/HeadTitle";
import HeaderOne from '../common/elements/header/HeaderOne';
import { slugify } from '../common/utils';
import Link from "next/link";
import Image from "next/image";
import AdBanner from '../common/components/ad-banner/AdBanner';


const TodaysArticles = ({ allPosts }) => {
	
	return (
		<>
		<HeadTitle pageTitle="All Articles"/>
		<HeaderOne postData={allPosts} />
		<BreadcrumbOne title="All of Today's Articles" />


		<>
		<div className="axil-post-grid-area axil-section-gap bg-color-white ml--90 mr--90">
			<div
				style= {{
					margin: '0 auto !important',
					width: '50vw !important'
				}}
			>	
				<AdBanner
						img="/images/add-banner/banner-03.webp"
						pClass="mb--30"
					/>
			</div>
			<div className='row'>
				{allPosts.map((data) => (
					<div
					className="col-lg-4 col-xl-4 col-md-8 col-8 mt--30"
					key={data.slug}>
					<div className="content-block content-direction-column post-horizontal thumb-border-rounded">
						<div className="post-content">
						<div className="post-cat">
							<div className="post-cat-list">
							<Link href={`/category/${slugify(data.cate)}`}>
								<a className="hover-flip-item-wrapper">
								<span className="hover-flip-item">
									<span data-text={data.cate}>{data.cate}</span>
								</span>
								</a>
							</Link>
							</div>
						</div>
						<h4 className="title">
							<a href={data.link} target="_blank">{data.title}</a>
						</h4>
						<div className="post-meta">
							<div className="post-author-avatar border-rounded">
							<Image
								src={data.author_img}
								alt={data.author_name}
								height={50}
								width={50}
							/>
							</div>
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
								<li>{data.post_views}</li>
							</ul>
							</div>
						</div>
						</div>
						{data.featureImg ? 
						<div className="post-thumbnail">
							<a href={data.link} target="_blank">
							<Image
								src={data.featureImg}
								alt={data.title}
								height={250}
								width={250}
								priority={true}
							/>
							</a>
						</div>
						: "" }
					</div>
					</div>
				))}
			</div>
		</div>
		</>
		

		<InstagramOne parentClass="bg-color-grey" />
		<FooterOne />

		</>
	);
}

export default TodaysArticles;

export async function getStaticProps({ params }) {

	const allPosts = getAllPosts([
		'id',
		'title',
		'featureImg',
		'postFormat',
		'featured',
		'slidePost',
		'date',
		'slug',
		'cate',
		'link',
		'cate_img',
		'author_img',
		'author_name',
		'post_views',
		'read_time',
		'author_social',
	]);
	
	// sort posts by date
	allPosts.sort(function(a,b){
		return new Date(b.date) - new Date(a.date);
	});
	
	return {
		props: {
			allPosts
		}
	}
}

