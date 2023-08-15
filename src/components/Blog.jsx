import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { SectionWrapper } from '../hoc'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import styled from 'styled-components'

// creating query
const GET_USER_BLOG = `
  query GetUserAricle($page: Int!) {
    user(username: "NiranjanGkr") {
      publication{
        posts(page: $page){
          _id
          title
          brief
          slug
          dateAdded
          coverImage
          contentMarkdown
        }
      }
    }
  }
`

// defining fucntion to make api call 
async function gql(query, variables = {}) {
  const data = await fetch("https://api.hashnode.com/", {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  return data.json();
}

export const fetchBlogs = async () => {
  const articles = [];
  let page = 0;
  let allBlogFetched = false;

  while (!allBlogFetched) {
    let response = await gql(GET_USER_BLOG, { page: page })
    articles.push(...response.data.user.publication.posts);
    if (response.data.user.publication.posts.length === 0) {
      allBlogFetched = true;
    }
    page++;
  }
  return articles;
}

// making the BlogCard
const BlogCard = ({ data, index }) => {
  return (
     <div className="">
      <div className='w-full h-[230px] relative'>
        <img
          src={data.coverImage}
          alt={data.title}
          className='w-full h-full object-cover rounded-2xl'
        />
      </div>
      <div className='mt-5 max-w-md'>
        <h3 className='text-white font-bold sm:text-[20px] text-[17px]'>{data.title}</h3>
        <p className='mt-2 text-secondary sm:text-[14px] text-[12px]' >{data.brief }</p>
      </div>
      <button className='bg-tertiary  py-3 px-8 outline-none text-white font-bold w-fit shadow-md shadow-primary rounded-xl mt-3'><a href={`https://codewars.hashnode.dev//${data.slug}`} target='_blank'>Read more</a></button>
     </div>
  )
}


// displaying 
export const Blog = () => {
  const [Blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlog = async () => {
      const response = await fetchBlogs();
      setBlogs(response);
    };
    getBlog();
  }, []);

  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[100px]`}>
        <motion variants={textVariant()}>
          <p className={styles.sectionSubText}>read my</p>
          <h2 className={styles.sectionHeadText}>Blogs</h2>
        </motion>
      </div>

       <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className='m-9 pb-8'
      breakpoints={{
        769: {
          slidesPerView: 3,
          // slidesPerGroup: 2,
        },
      }}
    >
       <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {
          Blogs.map((blog, index) => {
            return <SwiperSlide key={blog._id}><BlogCard key={blog._id} index={index} data={blog} /></SwiperSlide>
          })
        }
      </div>  
    </Swiper>

    </div>
  )
}

export default SectionWrapper(Blog)