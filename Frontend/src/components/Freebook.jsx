import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json";
import Cards from "./Cards";
function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        <div className="max-w-full text:black dark:text-white container md:px-24">
          <h1  className="font-semibold text-xl pb-3">Free Offered Courses</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad dolor
            magni porro perferendis ex aperiam velit voluptate esse tenetur. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, commodi.
          </p>
        </div>

        <div className="mx-10  p-6 ">
          <Slider {...settings}>
           {filterData.map((item) => (
                        <div className="gap-7 w-4">
 
              <Cards item={item} key={item.id}/>
              </div>
            ))}
            
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook
