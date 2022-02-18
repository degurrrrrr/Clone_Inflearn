import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { size, src, width, height, margin, shape} = props;

  const styles = {
    src,
    width,
    height,
    margin,
    shape,
    size
  };


  if (shape === 'circle') {
    return (
      //속성이 styles?
      <ImageCircle {...styles}></ImageCircle>
    );
  }

  return (
    <>
      <ImageDefault {...styles} />
    </>
  );
};

Image.defaultProps = {
  src: "https://ilovecharacter.com/news/data/20210122/p179568629887999_597.jpg",
  width: '450px',
  height: '450px', 
  size: 36,
  margin: false,
};

const ImageCircle = styled.div`
--size: ${(props) => props.size}px;
  width: var(--size);
  height: var(--size);
  border-radius: 18px;
  background-image: url('${(props) => props.src}');
  background-size: cover;
  margin: 2px 4px;
`;

const ImageDefault = styled.div`
 ${(props)=> props.width ? `height: ${props.width}`: ""};
  ${(props)=> props.height ? `height: ${props.height}`: ""};
  ${(props)=> props.margin ? `margin: ${props.margin}`: ""};
  background-color: #59c1c2;
  background-image: url("${(props) => props.src}");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export default Image;
