import React from "react";
import Icon from "../../common/icons";
import { Filter, FilterButton, FilterIcons } from "./filters.style";

const CustomFilters = () => {
  return (
    <React.Fragment>
      <Filter>
        <FilterButton>My Jobs</FilterButton>
        <FilterButton>Show All</FilterButton>
        <FilterIcons>
          <Icon icon="search" style={{ color: "#636E72" }}></Icon>
        </FilterIcons>
        <FilterIcons>
          <Icon icon="sort" style={{ color: "#636E72" }}></Icon>
        </FilterIcons>
      </Filter>
    </React.Fragment>
  );
};

export default CustomFilters;
