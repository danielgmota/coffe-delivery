import styled from "styled-components";
import img_banner1 from "../../../../assets/bg_banner.svg";

export const BannerComponent = styled.div`
  width: 100%;
  height: 544px;
  background-image: url(${img_banner1});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3.5rem;
  padding: 2rem 10rem;

  .leftBanner {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      font-size: 3rem;
      font-family: "Baloo 2";
      font-style: normal;
      font-weight: 800;
      line-height: 130%;
      color: ${(props) => props.theme["base-title"]};
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    .itemsBanner {
      margin-top: 4rem;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1.25rem 0;

      .item {
        width: 49%;
        display: flex;
        align-items: center;
        gap: 0.75rem;

        .icon {
          border-radius: 50%;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          color: ${(props) => props.theme["white"]};
        }

        #icon1 {
          background-color: ${(props) => props.theme["yellow-dark"]};
        }
        #icon2 {
          background-color: ${(props) => props.theme["base-text"]};
        }
        #icon3 {
          background-color: ${(props) => props.theme["yellow"]};
        }
        #icon4 {
          background-color: ${(props) => props.theme["purple"]};
        }
      }
    }
  }

  img {
    height: 360px;
  }
`;
