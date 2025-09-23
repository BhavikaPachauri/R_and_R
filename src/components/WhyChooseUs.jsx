import { Link } from "react-router-dom";

const benefits = [
"Experienced doctors and surgeons across multiple specialties",
"NABH-accredited quality standards ensuring global benchmarks",
"24×7 emergency services, pharmacy, and diagnostics under one roof",
"Ethical, transparent, and patient-first approach",
"Affordable pricing and seamless insurance/cashless facilities",

];

export default function WhyChooseUs() {
  return (
    <div className="bg-gradient-to-b from-white to-[#f8faff] py-16 lg:pt-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1293px] px-3 mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-sm md:text-base font-medium text-[#1a365d] tracking-[0.3em] uppercase mb-3">
            WHY CHOOSE US
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] leading-tight mb-3">
            Benefits of Our <span className="text-[#1a365d]">Medical Services</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Your Path to Better Health and Well-being
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="relative mx-auto lg:mx-0" data-aos="fade-right">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] mx-auto group perspective">
              <div className="absolute inset-[-15px] sm:inset-[-20px] md:inset-[-30px] bg-gradient-to-r from-[#1a365d]/20 to-[#6ed54e]/20 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-[-10px] sm:inset-[-15px] md:inset-[-20px] bg-gradient-to-l from-[#1a365d]/10 to-[#6ed54e]/10 rounded-full animate-spin-slow-reverse"></div>
              
              <div className="absolute inset-[-20px] sm:inset-[-30px] md:inset-[-40px] overflow-hidden">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full"
                    style={{
                      background: i % 2 === 0 ? '#1a365d' : '#6ed54e',
                      opacity: 0.1,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animation: `float ${3 + Math.random() * 4}s infinite ease-in-out ${Math.random() * 2}s`
                    }}
                  />
                ))}
              </div>

              <div className="absolute inset-0 rounded-full border-[12px] sm:border-[16px] md:border-[20px] border-[#f5f5f5] backdrop-blur-sm">
                <div className="absolute inset-[-2px] rounded-full bg-gradient-to-r from-[#1a365d]/20 to-[#6ed54e]/20 blur-md group-hover:opacity-100 opacity-0 transition-opacity duration-700"></div>
                
                <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                  <div className="relative w-full h-full">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-0.5 sm:w-3 sm:h-1 md:w-4 md:h-1 bg-gradient-to-r from-[#1a365d] to-[#6ed54e] rounded-full animate-pulse"
                        style={{
                          transform: `rotate(${i * 45}deg) translateX(${i * 6}px)`,
                          right: 0,
                          top: i * 4,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-3 sm:inset-4 rounded-full overflow-hidden bg-white shadow-2xl group-hover:shadow-[#1a365d]/20 transition-shadow duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1a365d]/10 to-[#6ed54e]/10 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-bl from-[#1a365d]/5 to-[#6ed54e]/5 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-300"></div>
                
                <img
                  src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ONLYVbShaa.webp"
                  alt="Medical Care"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 translate-x-[-150%] group-hover:translate-x-[150%] transition-all duration-1000"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center group/play">
                <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-white/80 flex items-center justify-center transform group-hover:scale-95 transition-all duration-300">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-[#1a365d] to-[#6ed54e] p-0.5 group-hover/play:rotate-180 transition-transform duration-500">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/10 to-[#6ed54e]/10 opacity-0 group-hover/play:opacity-100 transition-opacity duration-300"></div>
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#1a365d] transform translate-x-0.5 relative z-10" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 md:-bottom-4 md:-left-4 animate-bounce-slow">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-[#1a365d] drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z"/>
                </svg>
              </div>
              <div className="absolute top-1/2 -right-4 sm:-right-6 md:-right-8 animate-pulse">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#6ed54e] drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0L14.645 9.355L24 12L14.645 14.645L12 24L9.355 14.645L0 12L9.355 9.355L12 0Z"/>
                </svg>
              </div>

              <div className="absolute -top-4 sm:-top-5 md:-top-6 left-1/4 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#1a365d] animate-ping"></div>
              <div className="absolute -bottom-4 sm:-bottom-5 md:-bottom-6 right-1/4 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full bg-[#6ed54e] animate-ping" style={{ animationDelay: '1s' }}></div>
              
              <svg className="absolute -top-6 -left-6 sm:-top-7 sm:-left-7 md:-top-8 md:-left-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#1a365d]/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0,50 Q25,0 50,50 T100,50" className="animate-draw"/>
              </svg>
              <svg className="absolute -bottom-6 -right-6 sm:-bottom-7 sm:-right-7 md:-bottom-8 md:-right-8 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-[#6ed54e]/20" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M0,50 Q25,100 50,50 T100,50" className="animate-draw"/>
              </svg>
            </div>
          </div>
          <div className="space-y-6 sm:space-y-8 max-w-xl mx-auto lg:mx-0" data-aos="fade-left">
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              At R&R Hospital, we combine advanced medical technology with compassionate care to provide you with the best healthcare services. Our commitment to excellence ensures that you receive the highest quality medical care.
            </p>
            <div className="space-y-3 sm:space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#1a365d] flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-sm sm:text-base text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
            <Link 
              to="/bookappointment" 
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base bg-[#133e83]  text-white rounded-lg hover:shadow-lg hover:shadow-[#1a365d]/20 transition-all duration-300"
            >
              Book an Appointment
              <svg 
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
