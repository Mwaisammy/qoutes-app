import React from "react";
import FeaturedLoading from "../components/featured-loading";
import SearchLoading from "../components/search-loading";

function Loading() {
  return (
    <div>
      <FeaturedLoading />
      <SearchLoading />
    </div>
  );
}

export default Loading;
