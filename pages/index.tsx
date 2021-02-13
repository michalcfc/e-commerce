import { HomeProps } from "./Home.d"

import Card     from "@components/Card"
import Grid     from "@components/Grid"
import Filters  from "@components/Filters"

const db = [
  {
    id: 1,
    name: "Apple Watch Series 5",
    img:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/1.3b312012.png",
    desc:
      "On Retina display that never sleeps, so it’s easy to see the time and other important information, without raising or tapping the display. New location features, from a built-in compass to current elevation, help users better navigate their day, while international emergency calling1 allows customers to call emergency services directly from Apple Watch in over 150 countries, even without iPhone nearby. Apple Watch Series 5 is available in a wider range of materials, including aluminium, stainless steel, ceramic and an all-new titanium."
  },

  {
    id: 2,
    name: "Apple iPhone 11 (64GB, Black)",
    img:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/2.1aba2cea.png",
    desc:
      "The Apple iPhone 11 is a great smartphone, which was loaded with a lot of quality features. It comes with a waterproof and dustproof body which is the key attraction of the device. The excellent set of cameras offer excellent images as well as capable of recording crisp videos. However, expandable storage and a fingerprint scanner would have made it a perfect option to go for around this price range."
  },
  {
    id: 3,
    name: "Apple iMac 27-inch",
    img:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/3.29c766f8.png",
    desc:
      "The all-in-one for all. If you can dream it, you can do it on iMac. It’s beautifully & incredibly intuitive and packed with tools that let you take any idea to the next level. And the new 27-inch model elevates the experience in way, with faster processors and graphics, expanded memory and storage, enhanced audio and video capabilities, and an even more stunning Retina 5K display. It’s the desktop that does it all — better and faster than ever."
  },
  {
    id: 4,
    name: "OneOdio A71 Wired Headphones",
    img:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/4.73f34744.png",
    desc:
      "Omnidirectional detachable boom mic upgrades the headphones into a professional headset for gaming, business, podcasting and taking calls on the go. Better pick up your voice. Control most electric devices through voice activation, or schedule a ride with Uber and order a pizza. OneOdio A71 Wired Headphones voice-controlled device turns any home into a smart device on a smartphone or tablet."
  },
  {
    id: 5,
    name: "Apple - MacBook Air® (Latest Model) - 13.3 Display - Silver",
    img:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/5.c5b188e5.png",
    desc:
      "MacBook Air is a thin, lightweight laptop from Apple. MacBook Air features up to 8GB of memory, a fifth-generation Intel Core processor, Thunderbolt 2, great built-in apps, and all-day battery life.1 Its thin, light, and durable enough to take everywhere you go-and powerful enough to do everything once you get there, better."
  },
  {
    id: 6,
    name: "Switch Pro Controller",
    img:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/6.833c8951.png",
    desc:
      "The Nintendo Switch Pro Controller is one of the priciest baseline controllers in the current console generation, but it's also sturdy, feels good to play with, has an excellent direction pad, and features impressive motion sensors and vibration systems. On top of all of that, it uses Bluetooth, so you don't need an adapter to use it with your PC."
  },
  {
    id: 7,
    name: "Google - Google Home - White/Slate fabric",
    img:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/7.2a004c66.png",
    desc:
      "Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest."
  },
  {
    id: 8,
    name: "Sony 4K Ultra HD LED TV",
    img:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/8.c170e8ca.png",
    desc:
      "Sony 4K Ultra HD LED TV has 4K HDR Support. The TV provides clear visuals and provides distinct sound quality and an immersive experience. This TV has Yes HDMI ports & Yes USB ports. Connectivity options included are HDMI. You can connect various gadgets such as your laptop using the HDMI port. The TV comes with a 1 Year warranty."
  },
  {
    id: 9,
    name: "OnePlus 7 Pro",
    img:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/9.3170c803.png",
    desc:
      "The OnePlus 7 Pro features a brand new design, with a glass back and front and curved sides. The phone feels very premium but’s it’s also very heavy. The Nebula Blue variant looks slick but it’s quite slippery, which makes single-handed use a real challenge. It has a massive 6.67-inch ‘Fluid AMOLED’ display with a QHD+ resolution, 90Hz refresh rate and support for HDR 10+ content. The display produces vivid colours, deep blacks and has good viewing angles"
  },
  {
    id: 10,
    name: "New Apple iPad Pro",
    img:
      "https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/demo-1/img/12.87084176.png",
    desc:
      "Up to 10 hours of surﬁng the web on Wi‑Fi, watching video, or listening to music. Up to 9 hours of surﬁng the web using cellular data network, Compatible with Smart Keyboard Folio and Bluetooth keyboards"
    },
    
];

const renderProducts = () => {
  return <>
    {db.map(product => {
      return (
        <Card
          key={product.id}
          img={product.img}
          body={product.name}
          product={product}
        />
      )})}
    </>
}

const Home: React.FC<HomeProps> = () => {
  return (
    <>
        <Grid 
          columns="180px 1fr" 
          gridGap="20px"
          >
            <Filters />
            <Grid 
              columns="repeat(auto-fit, minmax(240px, 1fr));" 
              gridGap="20px">
              {renderProducts()}
            </Grid>
        </Grid>
    </>
  )
}

export default Home