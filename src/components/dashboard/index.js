import { Location } from "../images/location";
import { Button } from "../shared/Button";
import { Header } from "./Header";

export const Dashboard = () => {
  return (
    <div>
      <Header />
      <div className="dashborad-title">
        <img
          className="dashboard-header-icon-left"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="left_img"
        ></img>
        <div className="dashboard-title-top">
          <div className="dashboard-title-top-header">
            Order food &amp; groceries. Discover best restaurants. Swiggy it!
          </div>
        </div>
        <div className="dashboard-title-buttom">
          <div>
            <Location />
            <input
              type="text"
              class="dashboard-search-input"
              name="location"
              id="location"
              autocomplete="off"
              tabindex="1"
              placeholder="Enter your delivery location"
              maxlength="30"
            />
          </div>
          <div>
            <Button>search for restorent, itemor more</Button>
          </div>
        </div>
        <img
          className="dashboard-title-icon-right"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="right_img"
        ></img>
      </div>
    </div>
  );
};
