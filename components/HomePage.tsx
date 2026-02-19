import React from 'react';
import { Verified, Globe, Sparkles, Award, BookOpen, Users, ArrowRight, Quote, FileCheck } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-500 space-y-20">
      
      {/* --- HERO SECTION --- */}
      <section className="py-12 md:py-24 relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 flex flex-col gap-6 order-2 md:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider w-fit">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Open for Collaboration
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                Bridging Theory <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">To Market Reality</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                Dr. Tri Wismiarsi is a Senior Lecturer and Researcher specializing in SME Resilience, International Marketing, and Consumer Behavior. She is committed to integrating academic rigor with real-world community impact.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-primary">
                      <Verified size={20} />
                  </div>
                  <div>
                      <div className="text-xs font-bold text-slate-500 uppercase">Education</div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">PhD & Australia Awards Indonesia</div>
                  </div>
               </div>
               <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg text-amber-600">
                      <Globe size={20} />
                  </div>
                  <div>
                      <div className="text-xs font-bold text-slate-500 uppercase">Research</div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">International SME Grants</div>
                  </div>
               </div>
               <div className="flex items-center gap-3 px-4 py-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-lg text-emerald-600">
                      <Sparkles size={20} />
                  </div>
                  <div>
                      <div className="text-xs font-bold text-slate-500 uppercase">Impact</div>
                      <div className="font-bold text-slate-900 dark:text-white text-sm">Community Empowerment</div>
                  </div>
               </div>
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center order-1 md:order-2">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-tr from-primary to-blue-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-8 border-white dark:border-slate-900 shadow-2xl">
                <img 
                  alt="Tri Wismiarsi, S.Hut., M.Sc., Ph.D." 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  src="https://i.ibb.co.com/TBPhg7NK/Photoprofile.png" 
                />
              </div>
              <div className="absolute bottom-0 right-0 md:right-4 bg-white dark:bg-slate-800 px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-slate-700 flex items-center gap-2 animate-bounce duration-[3000ms]">
                  <span className="text-2xl">🇮🇩</span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Jakarta Based</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="transform -translate-y-6">
        <div className="bg-white dark:bg-[#1a2632] rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-8 grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 dark:divide-slate-800/50">
          {[
            { value: "25+", label: "Years Experience" },
            { value: "270", label: "Scholar Citations" },
            { value: "7", label: "Competitive Grants" },
            { value: "50+", label: "Publications" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center">
              <span className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-1 bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
                  {stat.value}
              </span>
              <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* --- OVERVIEW / BENTO GRID --- */}
      <section className="space-y-16">
        {/* Philosophy Teaser */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl -z-10 blur-xl"></div>
              <div className="bg-white dark:bg-slate-900 border-l-4 border-green-500 p-8 rounded-r-2xl shadow-lg">
                  <Quote className="text-green-500 mb-4" size={32} />
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                      "Good leaders think about long-lasting environmental effects as well as profits."
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      My teaching philosophy anchors on <strong>Sustainability</strong> and <strong>Active Learning</strong>. I believe in empowering students to apply abstract marketing theories to solve real-world problems.
                  </p>
                  <button 
                      onClick={() => onNavigate('philosophy')}
                      className="text-green-600 font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all"
                  >
                      Read Teaching Philosophy <ArrowRight size={16} />
                  </button>
              </div>
          </div>
          <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">
                  Educating the Next Generation of <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">Ethical Leaders</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                  At Sampoerna University, I utilize student-centered learning and simulations to bridge the gap between US-curriculum standards and Indonesian market realities.
              </p>
          </div>
        </div>

        {/* Portfolio Hub */}
        <div>
          <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Portfolio Highlights</h2>
              <span className="text-sm text-slate-500">Executive Summary</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[500px]">
              
              {/* Research Box */}
              <div 
                  onClick={() => onNavigate('research')}
                  className="md:col-span-2 md:row-span-2 bg-[#0a1f44] text-white rounded-3xl p-8 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.01]"
              >
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                      <BookOpen size={200} />
                  </div>
                  <div className="relative z-10 h-full flex flex-col justify-between">
                      <div>
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 text-xs font-bold uppercase tracking-wider mb-4">
                              <Award size={14} /> Research Excellence
                          </div>
                          <h3 className="text-3xl font-bold mb-2">Australia Awards Indonesia & Grant Recipient</h3>
                          <p className="text-blue-200 max-w-md">
                              Recipient of 7 competitive grants including Australia Global Alumni Awards. Author of "Hambatan Ekspor UKM Indonesia" with research focused on SME resilience and International Marketing.
                          </p>
                      </div>
                      <div className="flex items-center gap-2 font-bold text-amber-400 mt-8">
                          Explore Research Grants & Publications <ArrowRight size={20} />
                      </div>
                  </div>
              </div>

              {/* Certifications Box */}
              <div 
                  onClick={() => onNavigate('certifications')}
                  className="bg-teal-50 dark:bg-teal-900/20 rounded-3xl p-6 border border-teal-100 dark:border-teal-800 hover:border-teal-500 cursor-pointer transition-colors group"
              >
                  <div className="bg-white dark:bg-slate-800 w-12 h-12 rounded-full flex items-center justify-center text-teal-600 mb-4 shadow-sm">
                      <FileCheck size={24} />
                  </div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Professional Certified</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">CPM (Asia), BNSP Digital Marketing, & Quality Assurance.</p>
                  <span className="text-xs font-bold text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Credentials <ArrowRight size={12} />
                  </span>
              </div>

              {/* Media Box */}
              <div 
                  onClick={() => onNavigate('media')}
                  className="bg-white dark:bg-slate-800 rounded-3xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500 cursor-pointer transition-colors group"
              >
                   <div className="bg-blue-50 dark:bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4 shadow-sm">
                    <Users size={24} />
                </div>
                <h4 className="font-bold text-slate-900 dark:text-white text-lg mb-1">Impact Beyond Campus</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Empowering fisherfolks in "Damar Wulan Gebang" to go digital.</p>
                <span className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Watch Highlights <ArrowRight size={12} />
                </span>
              </div>

          </div>
        </div>
      </section>

      {/* --- GLOBAL ENGAGEMENT SECTION --- */}
      <section>
         <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                Global Engagement <span className="text-slate-400">&</span> Networks
            </h2>
         </div>
         <div className="grid md:grid-cols-3 gap-8">
            {/* Image 1: ATINER */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                     <img 
                        src="https://i.ibb.co.com/tMhGh5MV/Whats-App-Image-2026-02-19-at-08-33-42.jpg" 
                        alt="ATINER Conference Athens" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium text-sm">Presented research on online store branding strategies.</p>
                     </div>
                </div>
                <div className="p-6">
                     <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase mb-3 tracking-wider">
                        <span className="material-symbols-outlined text-sm">podium</span> Conference
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        Annual International Conference on Global Studies (ATINER)
                    </h3>
                    <p className="text-sm text-slate-500 mt-2">Athens, Greece</p>
                </div>
            </div>

            {/* Image 2: Strathclyde */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                     <img 
                        src="https://i.ibb.co.com/wh7SsDNR/Whats-App-Image-2026-02-19-at-08-38-33.jpg" 
                        alt="Strathclyde Alumni Networking" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium text-sm">Strengthening ties with UK alumni network.</p>
                     </div>
                </div>
                <div className="p-6">
                     <div className="flex items-center gap-2 text-[10px] font-bold text-amber-600 uppercase mb-3 tracking-wider">
                        <span className="material-symbols-outlined text-sm">groups</span> Networking
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        University of Strathclyde Alumni Gathering
                    </h3>
                    <p className="text-sm text-slate-500 mt-2">Glasgow, UK (Alumni Network)</p>
                </div>
            </div>

            {/* Image 3: ENU */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#1a2632] shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                     <img 
                        src="https://i.ibb.co.com/v6f2VZgb/Whats-App-Image-2026-02-19-at-08-49-19.jpg" 
                        alt="ENU Collaboration" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <p className="text-white font-medium text-sm">DIKTI funded research on comparative online branding.</p>
                     </div>
                </div>
                <div className="p-6">
                     <div className="flex items-center gap-2 text-[10px] font-bold text-green-600 uppercase mb-3 tracking-wider">
                        <span className="material-symbols-outlined text-sm">handshake</span> Collaboration
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                        Research Collaboration with Edinburgh Napier University
                    </h3>
                    <p className="text-sm text-slate-500 mt-2">Funded by DIKTI</p>
                </div>
            </div>
         </div>
      </section>

      {/* --- CONTACT CTA --- */}
      <section className="py-16 border-t border-slate-200 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-slate-900 dark:text-white">Interested in Collaboration?</h3>
            <p className="text-slate-500 dark:text-slate-400">
              Dr. Tri is available for academic partnerships, research supervision, and curriculum consultation.
            </p>
          </div>
          <div className="flex gap-4">
            <a 
              href="https://www.linkedin.com/in/tri-wismiarsi-1068086a/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:scale-[1.02] active:scale-95 transition-all shadow-lg shadow-primary/20 inline-flex items-center justify-center"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};