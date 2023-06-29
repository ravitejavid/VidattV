// import { useState, useEffect, useRef } from "react";
// import "./Style.css";
// import img1 from '../imgs/caros2.svg'
// import img2 from '../imgs/carso1.svg'
// import img3 from '../imgs/group2.svg'
// import img4 from '../imgs/oneg.svg'
// import img5 from '../imgs/vidatt.svg'
// //import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// //import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

// const images = [
//     { id: 1, src: img1, alt: 'Image 1' },
//     { id: 2, src: img2, alt: 'Image 2' },
//     { id: 3, src: img3, alt: 'Image 3' },
//     { id: 3, src: img4, alt: 'Image 4' },
//     { id: 3, src: img5, alt: 'Image 5' },
// ];

// const ImageSlider = () => {
//   const [scrollLeft, setScrollLeft] = useState(0);
//   const [showLeftArrow, setShowLeftArrow] = useState(false);
//   const [showRightArrow, setShowRightArrow] = useState(true);
//   const [isDragging, setIsDragging] = useState(false);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeftOnMouseDown, setScrollLeftOnMouseDown] = useState(0);
//   const carouselRef = useRef(null);

//   const handleMouseDown = (e) => {
//     setIsDragging(true);
//     setStartX(e.pageX - carouselRef.current.offsetLeft);
//     setScrollLeftOnMouseDown(scrollLeft);
//     carouselRef.current.classList.add("dragging");
//   };

//   const handleMouseMove = (e) => {
//     e.preventDefault();
//     if (!isDragging) return;
//     const x = e.pageX - carouselRef.current.offsetLeft;
//     const walk = (x - startX) * 3; // scroll 3x faster
//     carouselRef.current.scrollLeft = scrollLeftOnMouseDown - walk;
//   };

//   const handleMouseUp = () => {
//     setIsDragging(false);
//     carouselRef.current.classList.remove("dragging");
//   };

//   const handleScroll = (e) => {
//     const maxScrollLeft =
//       e.target.scrollWidth - e.target.clientWidth;
//     setScrollLeft(e.target.scrollLeft);
//     setShowLeftArrow(e.target.scrollLeft > 0);
//     setShowRightArrow(e.target.scrollLeft < maxScrollLeft);
//   };

//   useEffect(() => {
//     document.addEventListener("mouseup", handleMouseUp);
//     document.addEventListener("mousemove", handleMouseMove);
//     return () => {
//       document.removeEventListener("mouseup", handleMouseUp);
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [isDragging]);

//   const handleArrowClick = (direction) => {
//     const firstImgWidth = carouselRef.current.querySelector("img").clientWidth + 14;
//     const increment = direction === "left" ? -firstImgWidth : firstImgWidth;
//     carouselRef.current.scrollLeft += increment;
//   };

//   return (
//     <div className="wrapper">
//       {showLeftArrow && (
//         <ArrowBackIosIcon
//         //   icon={faAngleLeft}
//           id="left"
//           className="arrow"
//           onClick={() => handleArrowClick("left")}
//         />
//       )}
//       <div
//         className="carousel"
//         onScroll={handleScroll}
//         onMouseDown={handleMouseDown}
//         ref={carouselRef}
//       >
//         {images.map((imgSrc, index) => (
//            <>
//          <img
//             src={imgSrc.src}
//             draggable="false"
//           />
//           <div>jsdbsfdmbmvv xnvc v xcvmmmmmnvxcvnvjksdv  kbsfsdjv j wkvwk</div>
//      </>
       
//         ))}
//       </div>
//       {showRightArrow && (
//         <ArrowBackIosIcon
//         //   icon={faAngleRight}
//           id="right"
//           className="arrow"
//           onClick={() => handleArrowClick("right")}
//         /> 
//       )}
//     </div>
//   )}
//   export default ImageSlider;