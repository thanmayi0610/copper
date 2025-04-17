

import FooterBar from "@/components/footer-bar/FotterBar";
import NavigationBar from "@/components/navigation-bar/NavigationBar";
import React from "react";
import HeroBlock from "./blocks/hero-block/HeroBlock";
import FeaturesBlock from "./blocks/features-block/FeatureBlock";

const RootPage = () => {
  return (
    <div className="flex flex-col items-stretch">
      <NavigationBar />
      <div className="container mx-auto p-24">
        <HeroBlock />
      </div>
      <div className="container mx-auto p-24">
        <FeaturesBlock />
      </div>
      <FooterBar />
    </div>
  );
};

export default RootPage;