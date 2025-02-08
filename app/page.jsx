import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload} from "react-icons/fi";

//componenets


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*text*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-l text-white/60"> Software developer & UI UX Designer </span>
            <h1 className="h2">
              Hi, my name is <br /> <span className="text-accent h1" title="I create beautiful websites your users will love">Chaimaa Leknizi</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">

            I am a software developer and UI/UX designer, combining technical expertise with a passion for creating intuitive and visually engaging user experiences. 
            </p>
            {/*btn and socials*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
              variant="outline" 
              size="lg" 
              className="uppercase flex items-center gap-2">
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
               <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>
           {/*photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
};

export default Home;