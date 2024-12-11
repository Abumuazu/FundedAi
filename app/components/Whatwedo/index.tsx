import Image from "next/image";
import Link from 'next/link';

interface datatype {
    imgSrc: string;
    heading: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/features/time.svg",
        heading: "Sponsored work visas",
        paragraph: 'Talents can apply for globally available jobs with the opportunity to secure a sponsored work visa from an employer.',
    },
    {
        imgSrc: "/assets/features/signal.svg",
        heading: "Scholarships for Student Study Programmes",
        paragraph: 'Students can apply for fully funded scholarships across the globe.',

    },
    {
        imgSrc: "/assets/features/dollar.svg",
        heading: " Funded Travels for Events and Conferences",
        paragraph: 'Founders can access funded travel to meet investors and thought leaders, while students and professionals showcase skills, network, and explore career opportunities globally.',

    },
    {
        imgSrc: "/assets/features/time.svg",
        heading: "Grants Applications",
        paragraph: "Founders can use Funded AI automated software to apply for multiple sector-based grant opportunities at once given the founder's speed and leverage",
    },
    {
        imgSrc: "/assets/features/signal.svg",
        heading: "Startup Sponsored Visas",
        paragraph: ': Founders can apply for global startup visa programmes in the UK, USA, UAE, Qatar, Canada, and European including African countries. These startup visas allow founders to raise capital in those new markets and begin operations and relocation into these countries.'
    },
    {
        imgSrc: "/assets/features/dollar.svg",
        heading: "Cloud Credits and Monetization",
        paragraph: ': Founders building technology-based products can apply for up to $50,000 in cloud credits from our cloud partners network with AWS, Azure, and the rest of other cloud service providers.',

    }
]

const Features = () => {
    return (
        <div className="bg-babyblue" id="features">
            <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-5xl font-semibold text-black text-center my-10">What We Do.</h3>
                <h5 className="text-black opacity-60 text-lg font-normal text-center max-w-prose mx-auto break-words">FundedAI simplifies access to globally funded opportunities through AI-powered automation; handles the tedious application process on your behalf, whether it’s work visas, scholarships, or grants, we connect you to the resources you need to succeed.
                </h5>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4 lg:gap-x-8 mt-10'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 featureShadow'>

                            <Image src={item.imgSrc} alt={item.imgSrc} width={55} height={55} className="mb-2" />
                            <h3 className="text-2xl font-semibold text-black mt-5">{item.heading}</h3>
                            <h4 className='text-lg font-normal text-black opacity-50 my-2'>{item.paragraph}</h4>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features;
