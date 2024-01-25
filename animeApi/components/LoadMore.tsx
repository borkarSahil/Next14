"use client"

import { fetchAnime } from "@/app/actions";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";


let page = 2;

function LoadMore() {

  // Inview is used : 
  // This can be particularly useful when you want to know if an element is currently in the viewport or if it intersects with another element.
  // Lazy Loading of Components or Images: You can use it for lazy loading of components or images. For example, you might have a long webpage, 
  // and you want to load certain images or components only when they come into the user's viewport.
  const {ref, inView} = useInView();
  const [data, setData] = useState<AnimeProp []>([])

  useEffect(() => {
    if (inView) {
      // alert("Loading more...");

      fetchAnime(page).then((res) => {
        // In this we used spread i=operator to get previous data also
          setData([...data, ...res]);
          page++;
        })
        // .catch( (err) => {
        //   console.log(err);
        // }) 
      }

    
  }, [inView, data])

  return (
    <>
     <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>

      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
