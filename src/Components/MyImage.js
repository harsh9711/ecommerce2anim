import React, { useState } from "react";
import styled from "styled-components";
import theme from "../theme";

const MyImage = ({ imgs = [{url:""}] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <Wrapper>
      <div className="grid-grid-four-column">
        {imgs.map((curElm, index) => (
          <figure key={index}>
            <img
              src={curElm.url}
              alt={curElm.filename}
              className="box-image-style"
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>
      <div className="main-screen">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 0.4fr 1fr;
  gap: 0rem;

  .grid-grid-four-column {
    display: grid;
    gap: 1rem;
    grid-template-columns: 2fr;
    grid-template-rows: repeat(4, 1fr);
    align-items: center;
  }

  .box-image-style {
    max-width: 60%;
    max-height: 100%;
    background-size: cover;
    object-fit: contain;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.colors.shadow};
  }

  .main-screen {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    order: 1;
    height: fit-content;
    margin-top:8rem;

    img {
      max-width: 60%;
      height: auto;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    display: flex;
    flex-direction: column;
    order: 1;

    .grid-grid-four-column {
      grid-template-rows: 1fr;
      grid-template-columns: repeat(4, 1fr);
    }
  }
`;

export default MyImage;
