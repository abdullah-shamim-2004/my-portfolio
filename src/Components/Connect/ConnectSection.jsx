import React from "react";
import {
  Mail,
  Linkedin,
  Phone,
  MessageSquare,
  MapPin,
  Send,
} from "lucide-react";

const ConnectSection = () => {
  return (
    <div className="min-h-screen bg-[#05070a] text-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block p-3 bg-blue-500/10 rounded-full mb-4">
            <Send className="text-blue-400 w-8 h-8 rotate-12" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Connect
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto italic">
            "Got a vision? Let's craft it into reality and build something
            extraordinary together."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Contact Information Cards */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold border-l-4 border-blue-500 pl-4 mb-6 uppercase tracking-widest text-gray-300">
              Contact Information
            </h3>

            <InfoCard
              icon={<Mail className="text-blue-400" />}
              title="Email"
              subtitle="Drop me an email"
              value="abdullahshamim884@gmail.com"
              link="abdullahshamim884@gmail.com"
            />
            <InfoCard
              icon={<Linkedin className="text-blue-500" />}
              title="LinkedIn"
              subtitle="Professional network"
              value="Connect with me"
              link="https://www.linkedin.com/in/abdullah-shamim-patwary/"
            />
            <InfoCard
              icon={<Phone className="text-teal-400" />}
              title="Phone"
              subtitle="Call directly"
              value="+880 1815686418"
              link="tel:+8801815686418"
            />
            <InfoCard
              icon={<MessageSquare className="text-green-500" />}
              title="WhatsApp"
              subtitle="Quick messaging"
              value="+880 1815686418"
              link="https://wa.me/88001815686418"
            />
            <InfoCard
              icon={<MapPin className="text-purple-500" />}
              title="Location"
              subtitle="Based in Chattogram"
              value="Chandpur, Bangladesh"
            />

            {/* Quick Response Badge */}
            <div className="mt-8 p-6 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-white/5 rounded-3xl">
              <p className="text-xs text-gray-400 leading-relaxed">
                ⚡{" "}
                <span className="text-blue-400 font-bold">
                  Quick Response Guaranteed:
                </span>{" "}
                I typically respond within 2-4 hours during business days. For
                urgent matters, don't hesitate to call or WhatsApp me directly.
              </p>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="bg-[#111622] border border-white/5 p-8 rounded-[2.5rem] shadow-2xl">
            <h3 className="text-xl font-bold border-l-4 border-purple-500 pl-4 mb-8 uppercase tracking-widest text-gray-300">
              Send Message
            </h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 ml-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Sharif Adal"
                    className="w-full bg-[#0a0f1a] border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 ml-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="sharifadal@gmail.com"
                    className="w-full bg-[#0a0f1a] border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 ml-1">
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Collaboration"
                  className="w-full bg-[#0a0f1a] border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500/50 outline-none transition-all placeholder:text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 ml-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about your project, ideas, or just say hello! I'm excited to hear from you."
                  className="w-full bg-[#0a0f1a] border border-white/10 rounded-xl px-5 py-4 focus:border-blue-500/50 outline-none transition-all resize-none placeholder:text-gray-700"
                ></textarea>
              </div>

              <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/20">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ icon, title, subtitle, value, link }) => (
  <a
    href={link || "#"}
    className="flex items-center gap-5 p-5 bg-[#111622] border border-white/5 rounded-2xl hover:border-blue-500/30 hover:bg-[#161d2b] transition-all group"
  >
    <div className="p-3 bg-[#0a0f1a] border border-white/5 rounded-xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="flex-1">
      <div className="flex justify-between items-center">
        <h4 className="text-sm font-bold text-gray-300">{title}</h4>
      </div>
      <p className="text-[10px] text-gray-500 uppercase tracking-tight">
        {subtitle}
      </p>
      <p className="text-sm font-semibold text-blue-400/90 group-hover:text-blue-300 transition-colors">
        {value}
      </p>
    </div>
  </a>
);

export default ConnectSection;
