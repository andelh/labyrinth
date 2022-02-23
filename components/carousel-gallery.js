import React, { useState } from "react";
import Carousel from "nuka-carousel";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";

const Container = styled.div`
  height: calc(100vh - 40vh);
  width: 100%;
`;
const ImageContainer = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  height: calc(100vh - 32vh);
  object-fit: cover;
`;

export default function CarouselGallery({ images }) {
  const [toggler, setToggler] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <Container>
      {images?.length > 0 ? (
        <>
          <Carousel
            autoplay={true}
            autoplayInterval={5000}
            wrapAround
            heightMode="current"
            transitionMode="scroll"
            slideIndex={slideIndex}
            afterSlide={(slideIndex) => setSlideIndex(slideIndex)}
            disableEdgeSwiping={false}
          >
            {images.map((image, index) => (
              <ImageContainer onClick={() => setToggler(!toggler)} key={index}>
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    margin: 0,
                    objectFit: "cover",
                  }}
                  objectFit="cover"
                  src={image.sourceUrl}
                />
              </ImageContainer>
            ))}
          </Carousel>
          <FsLightbox
            toggler={toggler}
            slide={slideIndex + 1}
            sources={images.map((el) => el.sourceUrl)}
            type="image"
          />
        </>
      ) : (
        []
      )}
    </Container>
  );
}
