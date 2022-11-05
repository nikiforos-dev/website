// import InstagramOne from '../common/components/instagram/InstagramOne';
import FooterOne from '../common/elements/footer/FooterOne';
import HeadTitle from '../common/elements/head/HeadTitle';
import HeaderOne from '../common/elements/header/HeaderOne';
import { getAllPosts } from '../../lib/api';
import PostSectionOne from '../common/components/post/PostSectionOne';
import PostSectionTwo from '../common/components/post/PostSectionTwo';
import PostSectionThree from '../common/components/post/PostSectionThree';
import CategoryList from '../common/components/category/CategoryList';
// import PostSectionFour from '../common/components/post/PostSectionFour';
import SocialOne from '../common/components/social/SocialOne';
// import PostSectionFive from '../common/components/post/PostSectionFive';
import PostSectionSix from '../common/components/post/PostSectionSix';
import SliderOne from '../common/components/slider/SliderOne';
import FooterTwo from '../common/elements/footer/FooterThree';


const HomeDefault = ({allPosts}) => {

  const videoPost = allPosts.filter(post => post.postFormat === "video");
 
  return ( 
    <>
      <HeadTitle pageTitle="Orthodox Homepage" />
      <HeaderOne postData={allPosts}/>
      <SliderOne postData={allPosts} />
      <PostSectionThree postData={allPosts} adBanner={true} bgColor="bg-color-grey" heading="Most Popular"/>
      <PostSectionOne postData={allPosts}/>
      <PostSectionTwo postData={allPosts} adBanner={true} />
      <CategoryList cateData={allPosts}/>
      <PostSectionSix postData={allPosts} />
      <SocialOne />
      <FooterTwo />
      
    </>
   );
}
 
export default HomeDefault;


export async function getStaticProps() {
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
  ])

  return {
    props: { allPosts }
  }
}



