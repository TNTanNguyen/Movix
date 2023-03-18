import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";

import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";

import "./style.scss";

const HeroBanner = () => {
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);

  const [background, setBackground] = useState("");

  const [query, setQuery] = useState("");

  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results[Math.floor(Math.random() * 20)].backdrop_path;
    setBackground(bg);
  }, [data]);

  const handleSearchQuery = (e) => {
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  return (
    <div className="heroBanner">
      {!loading ? (
        <div className="backdrop-img">
          <Img src={background} alt="" />
        </div>
      ) : (
        <div>Loading Page</div>
      )}
      <div className="opacity-layer"></div>
      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              value={query}
              placeholder="Search for a movie or tv show...."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={handleSearchQuery}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default HeroBanner;
