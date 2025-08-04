import Image from 'next/image';

interface OfferProps {
  heading: string;
  description: string;
  points: string[];
  buttonText: string;
  tickIcon: string;
  testimonial: {
    quote: string;
    author: string;
    date: string;
  };
}

export default function OfferAndTestimonial({
  heading,
  description,
  points,
  buttonText,
  tickIcon,
  testimonial,
}: OfferProps) {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white p-6 md:p-10">
      {/* Left Side */}
      <div>
        <h2 className="text-2xl font-bold mb-4">{heading}</h2>
        <p className="text-sm text-gray-700 mb-6 max-w-xl">{description}</p>
        <ul className="space-y-3 mb-6">
          {points.map((point, index) => (
            <li key={index} className="flex items-start">
              <Image src={tickIcon} alt="tick" width={20} height={20} className="mt-1 mr-2" />
              <span className="text-sm text-gray-800">{point}</span>
            </li>
          ))}
        </ul>
        <button className="bg-[#ffcc00] text-black font-bold py-2 px-4 rounded shadow hover:opacity-90">
          {buttonText}
        </button>
      </div>

      {/* Right Side */}
      <div className="bg-[#f9f9f9] p-6 rounded-md shadow-md">
        <span className="text-yellow-500 text-3xl leading-none">“</span>
        <p className="text-lg font-medium text-gray-900 mb-4 leading-relaxed">
          {testimonial.quote}
        </p>
        <p className="font-bold text-gray-800">{testimonial.author}</p>
        <p className="text-sm text-gray-600">{testimonial.date}</p>
      </div>
    </section>
  );
}
