import Image from "next/image";
import Link from "next/link";
import bgImage from "../../public/acmeFlareBanner.webp";
import logo from "../../public/logo-acmeflare.png";
export default function Home() {
    return (
        <>
            <main className="min-h-screen w-full relative">
                <div className="absolute inset-0">
                    <Image
                        src={bgImage}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <div className="  z-30 absolute pb-5 w-full flex justify-center  ">
                    <Image
                        src={logo}
                        alt=""
                        objectFit="contain"
                        quality={100}
                    />
                </div>
                <div className=" my-33 md:my-40  z-40 absolute pb-5 w-full text-4xl  xl:text-7xl 2xl:text-7xl lg:text-6xl sm:text-5xl text-center md:text-6xl font-bold text-white  bg-opacity-50 rounded-xl">
                    <h1 className="mx-10 mt-10 ">Acmeflare Technologies</h1>

                    <h3 className="text-2xl font-bold ml-12 mt-4">
                        Monetizing Innovations
                    </h3>
                </div>

                <div className="w-full flex justify-center">
                    <div className="absolute z-20 bottom-0 w-full max-w-screen-lg mx-auto bg-cyan-600 bg-opacity-60  h-1/2 sm:h-1/4 p-10">
                        <div className="w-full h-full flex justify-center items-center">
                            <div>
                                {" "}
                                <p style={{ color: "white" }}>
                                    At Acmeflare, we embody the spirit of
                                    “Monetizing Innovations.” Our mission is to
                                    transform your ideas into money-making
                                    machines. With a strategic blend of
                                    creativity and technology, we are dedicated
                                    to propelling your business to new heights.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="w-full bg-slate-200">
                <div className=" w-full max-w-screen-lg mx-auto bg-white  opacity-80 shadow-2xl">
                    <h3 className="text-3xl text-center text-wrap font-bold pt-9 text-cyan-600 sm:mb-8 md:mb-0">
                        Our Core Services
                    </h3>
                    <div className="flex px-12 flex-col sm:flex-row">
                        <div className="flex justify-center  items-center flex-col ">
                            <h3 className="text-2xl text-wrap font-bold pb-3 text-center sm:text-left">
                                Digital Marketing and Branding
                            </h3>
                            <p className="pr-8 text-black text-center">
                                Harness the power of our skilled content
                                creation team, adept in crafting compelling
                                narratives, engaging visuals, and impactful VFX.
                                Elevate your brand through strategic digital
                                marketing and let us tell your story in a way
                                that captivates your audience.
                            </p>
                        </div>
                        <div className="w-full relative m-auto overflow-hidden">
                            {" "}
                            <Image
                                src="/digital-marketing.avif"
                                alt="Digital marketing"
                                width={568}
                                height={586}
                                className="max-w-full  transition-all duration-300 block w-full h-auto transform scale-100 hover:scale-110"
                            />
                        </div>
                    </div>

                    <div className="flex px-12 -mt-8 flex-col-reverse sm:flex-row  ">
                        <div className="w-full relative m-auto overflow-hidden">
                            {" "}
                            <Image
                                src="/web-development.avif"
                                alt="web development"
                                width={568}
                                height={586}
                                className="max-w-full transition-all duration-300 block w-full h-auto transform scale-100 hover:scale-110"
                            />
                        </div>
                        <div className="mt-16 ">
                            <h3 className="text-2xl text-wrap font-bold py-3 text-center sm:text-left">
                                Web & Mobile App Development
                            </h3>
                            <p className="pr-8 text-black text-center sm:text-left">
                                Build a strong online presence with our expert
                                web development services. We create responsive
                                and user-friendly websites tailored to meet your
                                business objectives.
                            </p>
                            <p className="pr-8 text-black mt-4 text-center sm:text-left ">
                                Seamlessly integrate your brand into the mobile
                                world with our cutting-edge app development
                                services. From concept to deployment, we bring
                                your app ideas to life.
                            </p>
                        </div>
                    </div>
                    <div className="flex px-12 mb-4  flex-col sm:flex-row  sm:mt-4 lg:-mt-8 ">
                        <div className="flex justify-center flex-col  text-center sm:text-left ">
                            <h3 className="text-2xl text-wrap font-bold py-3 ">
                                Cybersecurity Services
                            </h3>
                            <p className="pr-8 text-black">
                                Safeguard your digital assets with our robust
                                cybersecurity services. We provide comprehensive
                                solutions to protect your business from evolving
                                cyber threats.
                            </p>
                            <h3 className="text-2xl text-wrap font-bold py-3 mt-3">
                                Cloud Services and Solutions
                            </h3>
                            <p className="pr-8 text-black">
                                Embrace the flexibility and scalability of the
                                cloud. Our cloud services optimize your
                                operations and enhance overall efficiency
                            </p>
                        </div>
                        <div className="w-full relative m-auto overflow-hidden -mb-4">
                            {" "}
                            <Image
                                src="/cyber-security.avif"
                                alt="Cybersecurity Services"
                                width={568}
                                height={586}
                                className="max-w-full -mt-8 transition-all duration-300 block w-full h-auto transform scale-100 hover:scale-110"
                            />
                        </div>
                    </div>

                    <div className="flex justify-center flex-col-reverse sm:flex-row  text-center sm:text-left ">
                        <div className="w-full relative m-auto overflow-hidden">
                            {" "}
                            <Image
                                src="/cloud-service.avif"
                                alt="web development"
                                width={568}
                                height={586}
                                className="max-w-full transition-all duration-300 block w-full h-auto transform scale-100 hover:scale-110"
                            />
                        </div>
                        <div className="flex justify-center flex-col ">
                            <h3 className="text-2xl text-wrap font-bold py-3">
                                Cloud Services and Solutions
                            </h3>
                            <p className="pr-8 text-black">
                                Embrace the flexibility and scalability of the
                                cloud. Our cloud services optimize your
                                operations and enhance overall efficiency
                            </p>
                            <h3 className="text-2xl text-wrap font-bold py-3 mt-2">
                                IT Consulting and Advisory Services
                            </h3>
                            <p className="pr-8 text-black">
                                Rely on our expert guidance to navigate the
                                ever-evolving IT landscape. Our consultants
                                provide strategic insights to help you make
                                informed decisions.
                            </p>
                        </div>
                    </div>

                    <div className="flex px-12 py-10 flex-col sm:flex-row text-center sm:text-left">
                        <div className="flex justify-center flex-col ">
                            <h3 className="text-2xl text-wrap font-bold py-3">
                                Digital Marketing and Branding
                            </h3>
                            <p className="pr-8 text-black">
                                Harness the power of our skilled content
                                creation team, adept in crafting compelling
                                narratives, engaging visuals, and impactful VFX.
                                Elevate your brand through strategic digital
                                marketing and let us tell your story in a way
                                that captivates your audience.
                            </p>
                        </div>
                        <div className="w-full relative m-auto overflow-hidden">
                            {" "}
                            <Image
                                src="/skill-development.avif"
                                alt="Digital marketing"
                                width={568}
                                height={586}
                                className="max-w-full transition-all duration-300 block w-full h-auto transform scale-100 hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-white bg-slate-950 ">
                <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto py-10 px-6 ">
                    <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
                        <h3 className="w-full text-2xl font-bold mb-5">
                            Acmeflare Technologies Private Limited
                        </h3>
                        <p className="text-gray-300 mb-20">
                            Transforming ideas into Money Making Machines
                        </p>
                    </div>
                    <div className="row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
                        <p className="text-black-600 mb-4 font-semibold text-lg">
                            Contact
                        </p>
                        <ul className="text-black-500 ">
                            <li className="my-2 pt-3 text-gray-100 hover:text-blue-600 cursor-pointer transition-all">
                                <a href="mailto:info@acmeflare.in">
                                    info@acmeflare.in
                                </a>
                            </li>

                            <li className="my-2 pt-3  text-gray-100 flex items-center   transition-all">
                                <Image
                                    alt=""
                                    src="/phone.svg"
                                    className="me-3"
                                    width="18"
                                    height="18"
                                />{" "}
                                <a
                                    href="tel:+9179079 35902"
                                    className="hover:text-cyan-600 mr-2"
                                >
                                    +91 79079 35902
                                </a>{" "}
                            </li>
                        </ul>
                    </div>

                    <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
                        <p className="text-black-600 mb-4 font-semibold text-lg">
                            Links
                        </p>
                        <ul className="text-black-500 ">
                            <Link href="https://www.instagram.com/acmeflare/">
                                <li className="my-2 text-gray-300 hover:text-cyan-600 cursor-pointer transition-all flex">
                                    <Image
                                        alt=""
                                        src="/instagram.svg"
                                        className="me-3"
                                        width="18"
                                        height="18"
                                    />{" "}
                                    <span>Instagram</span>
                                </li>
                            </Link>
                            <Link href="https://www.linkedin.com/company/acmeflare/">
                                <li className="my-2 text-gray-300 hover:text-cyan-600 cursor-pointer transition-all flex">
                                    <Image
                                        alt=""
                                        src="/linkedin.svg"
                                        className="me-3"
                                        width="18"
                                        height="18"
                                    />{" "}
                                    <span>LinkedIn</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

                <div className="flex max-w-screen-xl  flex-wrap justify-between mx-auto py-10 px-6   border-t border-gray-600">
                    <ul className="flex flex-col space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row  text-gray-400">
                        <li>
                            <p>
                                Acmeflare Technologies Private Limited ©{" "}
                                {new Date().getFullYear()}. All Rights Reserved.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
