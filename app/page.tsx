import Banner from './components/Banner/index';
import People from './components/People/index';
import WhatWeDo from './components/Whatwedo/index';
import WhyChooseUs from './components/Whychooseus/index';
import Business from './components/Business/index';
import Payment from './components/Payment/index';
import Pricing from './components/Pricing/index';
import GetStarted from './components/GetStarted/index';
export default function Home() {
  return (
    <main>
      <Banner />
     
      {/* <People /> */}
      <WhatWeDo />
      <WhyChooseUs />
      <Business />
      <GetStarted />
      {/* <Payment /> */}
      <Pricing />
    </main>
  )
}
