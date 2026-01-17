import Link from 'next/link';
import Title from './components/Title';
import { FaBalanceScale, FaBuilding, FaGavel, FaHandshake, FaLandmark, FaQuoteLeft, FaRegCalendarCheck, FaUsers } from 'react-icons/fa';
import { BsTrophy } from 'react-icons/bs';
import { IoMdDocument } from 'react-icons/io';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r relative from-primary to-slate-700 text-white py-20 pt-40">
        <div className="absolute inset-0 opacity-40">
          <div className="bg-gradient-to-r absolute from-primary to-transparent h-full w-full"></div>
          <img src="/herobg.jpg" className='h-full w-full object-cover' alt="Hero background" />
        </div>
        <div className="container relative z-10">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="text-start">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                MT Law Firm
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-slate-200">
                Excellence in Legal Representation
              </p>
              <p className="text-lg mb-8 max-w-3xl text-slate-300">
                With decades of combined experience, we provide comprehensive legal services
                tailored to meet your unique needs. Your success is our commitment.
              </p>
              <div className="flex sm:flex-row gap-4 justify-start">
                <Link
                  href="/contacts"
                  className="bg-white hover:bg-transparent text-primary hover:text-white border-white border px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* About Us Section */}
      <section className='container mx-auto px-4 sm:px-6 lg:px-8 py-20'>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className='text-start mb-6'>
              <Title title="About Us" subtitle="Who We Are" text='start' />
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At MT Law Firm, we are dedicated to providing exceptional legal representation with a personal touch.
              With a legacy of integrity and success, our team of experienced attorneys works tirelessly to advocate for your rights.
              We believe in clear communication, strategic planning, and delivering results that matter.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you are facing a complex legal challenge or need guidance for your business, we are here to help.
              Our commitment to excellence ensures that you have a strong partner by your side every step of the way.
            </p>
            <Link
              href="/about"
              className="bg-primary hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Learn More
            </Link>
          </div>
          <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/herobg.jpg"
              alt="About MT Law Firm"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-primary/10"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <FaRegCalendarCheck className="text-5xl text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2">25+</h3>
              <p className="text-white/70 text-lg">Years Experience</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <FaGavel className="text-5xl text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2">1500+</h3>
              <p className="text-white/70 text-lg">Cases Won</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <FaUsers className="text-5xl text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2">2000+</h3>
              <p className="text-white/70 text-lg">Happy Clients</p>
            </div>
            <div className="p-6">
              <div className="flex justify-center mb-4">
                <BsTrophy className="text-5xl text-white" />
              </div>
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p className="text-white/70 text-lg">Awards Won</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <Title title="Our Specialties" subtitle="Expertise Across Legal Fields" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaBuilding />, title: "Corporate Law", desc: "Comprehensive legal solutions for businesses of all sizes." },
              { icon: <FaBalanceScale />, title: "Civil Litigation", desc: "Strong representation in complex civil disputes and proceedings." },
              { icon: <FaHandshake />, title: "Family Law", desc: "Compassionate guidance for divorce, custody, and family matters." },
              { icon: <FaLandmark />, title: "Real Estate", desc: "Expert handling of property transactions and disputes." },
              { icon: <IoMdDocument />, title: "Estate Planning", desc: "Securing your legacy with wills, trusts, and estate administration." },
              { icon: <FaGavel />, title: "Criminal Defense", desc: "Protecting your rights with aggressive and strategic defense." },
            ].map((specialty, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group border border-slate-100">
                <div className="text-4xl text-secondary mb-6 group-hover:scale-110 transition-transform duration-300 w-fit">
                  {specialty.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary">{specialty.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {specialty.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Slogan Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/herobg.jpg" className='h-full w-full object-cover' alt="Background" />
        </div>
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
            "Justice Delayed is Justice Denied.<br /> We Fight For You Today."
          </h2>
          <Link
            href="/contacts"
            className="inline-block bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <Title title="What Our Clients Say" subtitle="Client Testimonials" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Business Owner",
                quote: "MT Law Firm provided exceptional legal advice during our company merger. Their attention to detail was impressive."
              },
              {
                name: "Michael Chen",
                role: "Real Estate Investor",
                quote: "I've worked with many lawyers, but none have been as responsive and knowledgeable as the team at MT Law Firm."
              },
              {
                name: "Emily Davis",
                role: "Private Client",
                quote: "They handled my case with compassion and professionalism. I couldn't have asked for a better outcome."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-50 p-8 rounded-2xl relative">
                <FaQuoteLeft className="text-4xl text-gold/40 mb-6" />
                <p className="text-slate-700 text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xl mr-4">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
