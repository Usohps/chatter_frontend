import React from "react";
import { Link } from "react-router-dom";
import mySvg from "../assets/lady.png";
import peopleJpeg from "../assets/people.png";
import personJpeg from "../assets/person.png";
import frame from "../assets/Frame 39.png";
function LandingPage() {
  return (
    <>
      <div className="w-full md:min-h-screen h-full">
        <nav className="w-full fixed top-0 bg-white flex justify-between items-center p-4 shadow-lg">
          <h1 className="text-blue-500 text-2xl font-bold">CHATTER</h1>
          <div className="space-x-12 font-semibold hidden md:block ">
            <Link to={"/"} className="focus:border-b-2 border-blue-500">
              Home
            </Link>
            <Link to={"#"} className="focus:border-b-2 border-blue-500">
              About
            </Link>
            <Link to={"#"} className="focus:border-b-2 border-blue-500">
              Contact
            </Link>
            <Link to={"#"} className="focus:border-b-2 border-blue-500">
              Blogs
            </Link>
          </div>
          <div className="space-x-6 hidden md:block">
            <button>Log in</button>
            <button>Sign up</button>
          </div>

        </nav>
        <div
          className=" mt-14 bg-cover h-screen flex flex-col justify-center items-center"
          style={{ backgroundImage: `url(${mySvg})` }}
        >
          <div>
            <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>
            <p>
              Unleash the Power of Words, Connect with Like-minded Readers and
              Writers
            </p>
            <button className="bg-blue-500 text-white p-1 font-semibold">
              Get Started
            </button>
          </div>
        </div>
        <div className="container m-auto flex md:flex-row flex-col justify-around space-x-12 items-center p-6 ">
          <div className="w-full md:w-[500px] text-center">
            <h1>About Chatter</h1>
            <p>
              Chatter is a multi-functional platform where authors and readers
              can have access to their own content. It aims to be a traditional
              bookworm’s heaven and a blog to get access to more text based
              content. Our vision is to foster an inclusive and vibrant
              community where diversity is celebrated. We encourage
              open-mindedness and respect for all individuals, regardless of
              their backgrounds or beliefs. By promoting dialogue and
              understanding, we strive
            </p>
          </div>
          <div className="md:w-[400px] p-4 m-auto">
            <img src={peopleJpeg} alt="people sitting" className="w-[400px]" />
          </div>
        </div>
        <div className="container m-auto text-center ">
          <div className=" max-w-[670px] m-auto p-4">
            <h1>Why you should Join Chatter</h1>
            <p>
              Our goal is to make writers and readers see our platform as their
              next heaven for blogging, ensuring ease in interactions,
              connecting with like-minded peers, have access to favorite content
              based on interests and able to communicate your great ideas with
              people
            </p>
          </div>
          <div className="flex items-center flex-wrap justify-center gap-3">
            <div className="border border-gray-300 w-[250px] p-2 space-y-3 rounded">
              <img src="" alt="" />
              <h2>Analytics</h2>
              <p>
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of
                time
              </p>
            </div>
            <div className="border border-gray-300 w-[250px] p-2 space-y-3 rounded">
              <img src="" alt="" />
              <h2>Analytics</h2>
              <p>
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of
                time
              </p>
            </div>
            <div className="border border-gray-300 w-[250px] p-2 space-y-3 rounded">
              <img src="" alt="" />
              <h2>Analytics</h2>
              <p>
                Analytics to track the number of views, likes and comment and
                also analyze the performance of your articles over a period of
                time
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#FFEDCC80] flex md:flex-row flex-col justify-around items-center p-6">
          <div>
            <img src={personJpeg} alt="" className="rounded-full w-[200px]" />
          </div>
          <div className="w-[400px] pt-4 md:pt-0 space-y-6">
            <p>
              "Chatter has become an integral part of my online experience. As a
              user of this incredible blogging platform, I have discovered a
              vibrant community of individuals who are passionate about sharing
              their ideas and engaging in thoughtful discussions.”
            </p>
            <h2 className="font-bold">
              {" "}
              Adebobola Muhydeen,
              <span className="italic font-light">
                Software developer at Apple
              </span>
            </h2>
            <button className="bg-blue-500 text-white p-1 font-semibold">
              Join Chatter
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-around items-center p-6">
          <div>
            <img src={frame} alt="" className=" w-[200px]" />
          </div>
          <div className="w-[400px] pt-4 md:pt-0 space-y-6">
            <h1 className="font-bold">
              Write, read and connect with great minds on chatter
            </h1>
            <p>
              Share people your great ideas, and also read write-ups based on
              your interests. connect with people of same interests and goals
            </p>
            <button className="bg-blue-500 text-white p-1 font-semibold">
              Get Started
            </button>
          </div>
        </div>
        <footer className="bg-[#FFEDCC80] flex md:flex-row flex-col justify-around items-center p-12">
            <div>
            <h1 className="text-blue-500 text-2xl font-bold">CHATTER</h1>
            </div>
            <div className="flex items-center flex-wrap justify-between border w-full md:max-w-[600px] gap-3">
                <div className="space-y-2">
                    <h2>Explore</h2>
                    <div className="flex flex-col space-y-3">
                    <Link to={"#"}>community</Link>
                    <Link to={"#"}>Trending blog</Link>
                    <Link to={"#"}>Chatter for teams</Link> 
                    </div>
                </div>
                <div className="space-y-2">
                    <h2>Support</h2>
                    <div className="flex flex-col space-y-3">
                    <Link to={"#"}>Support cocs</Link>
                    <Link to={"#"}>Join slack</Link>
                    <Link to={"#"}>Contact</Link>
                    </div>
                </div>
                <div className="space-y-2">
                    <h2>Official blog</h2>
                    <div className="flex flex-col space-y-3">
                    <Link to={"#"}>Official blog</Link>
                    <Link to={"#"}>Engineering blog</Link>
                    </div>
                </div>
            </div>
        </footer>
      </div>
    </>
  );
}

export default LandingPage;
