import React from 'react';
import { Quote, Sparkles, GraduationCap } from 'lucide-react';

interface StudentFeedbackProps {
  onNavigate: (page: string) => void;
}

export const StudentFeedback: React.FC<StudentFeedbackProps> = ({ onNavigate }) => {
  return (
    <div className="py-8 animate-in fade-in duration-500">
      {/* Breadcrumbs */}
      <div className="flex flex-wrap gap-2 py-2 mb-8 border-b border-slate-100 dark:border-slate-800 pb-4">
        <button 
            onClick={() => onNavigate('home')}
            className="text-primary text-sm font-medium flex items-center gap-1 hover:underline"
        >
          <span className="material-symbols-outlined text-sm">home</span> Home
        </button>
        <span className="text-[#4c739a] text-sm">/</span>
        <span className="text-[#0d141b] dark:text-slate-300 text-sm font-medium">Student Feedback</span>
      </div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold uppercase tracking-wider mb-4">
            <GraduationCap size={14} /> Student Voices
        </div>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 dark:text-white mb-6">
            Impact in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Classroom</span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
            Teaching excellence is ultimately measured by student success and engagement. Here is a featured perspective from a thesis advisee.
        </p>
      </div>

      {/* Main Testimonial Card */}
      <div className="relative max-w-5xl mx-auto">
        {/* Decor */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>

        <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700 grid lg:grid-cols-12 relative z-10">
            
            {/* Image Section - col-span-3, removed hover zoom, changed to object-center */}
            <div className="lg:col-span-3 relative min-h-[200px] lg:min-h-full group bg-slate-100 dark:bg-slate-900">
                <img 
                    src="https://i.ibb.co.com/p6HSyjs4/74e1a5b6-4839-4d31-ae59-810762d0e813.png" 
                    alt="Angelina Priscilla Tan" 
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90 lg:opacity-100"></div>
                
                <div className="absolute bottom-0 left-0 p-4 lg:p-6 text-white w-full">
                    <div className="flex items-center gap-2 mb-1 text-blue-300 text-[10px] font-bold uppercase tracking-wider">
                        <Sparkles size={12} /> Thesis Advisee
                    </div>
                    <h2 className="text-lg lg:text-xl font-serif font-bold mb-0.5 leading-tight">Angelina P. Tan</h2>
                    <p className="text-slate-300 text-[10px] lg:text-xs">Sampoerna University</p>
                </div>
            </div>

            {/* Content Section - Condensed padding to reduce height */}
            <div className="lg:col-span-9 p-6 lg:p-8 flex flex-col justify-center">
                <Quote className="text-blue-100 dark:text-blue-900/50 w-10 h-10 mb-4 -ml-1" />
                
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white leading-snug mb-4">
                    "She injects her personality in the classroom, while maintaining professionalism, making her a memorable instructor."
                </h3>

                <div className="space-y-3 text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-sm">
                    <p>
                        "I have had the pleasure of being instructed by Ms. Wismiarsi many times. Now, she is my thesis advisor. Ms. Wismiarsi is a passionate educator. She combines academic theory with her experience, making learning an enjoyable process."
                    </p>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border-l-4 border-blue-500 italic text-slate-700 dark:text-slate-200 text-xs md:text-sm">
                        "Ms. Wismiarsi’s commitment to environmental sustainability is inspiring, reminding students to do their part to maintain the environment as business students."
                    </div>

                    <p>
                        "It is clear that she cares and aims for the success of her students. She motivates and helps them overcome any obstacles they may have. I root for her success in achieving the Teaching Excellence Award."
                    </p>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3">Subjects Taken</h4>
                    <div className="flex flex-wrap gap-2">
                        {[
                            'Research Methods',
                            'Digital Marketing',
                            'Business Ethics',
                            'Marketing Analytics'
                        ].map((subject, idx) => (
                            <span key={idx} className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-md text-[10px] font-bold hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 transition-colors cursor-default">
                                {subject}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};