import { Shield, Award, Clock, TrendingUp } from "lucide-react";

const badges = [
  {
    icon: Shield,
    text: "100% Confidential"
  },
  {
    icon: Award,
    text: "23+ Years Combined"
  },
  {
    icon: Clock,
    text: "30-Day Clarity Guarantee"
  },
  {
    icon: TrendingUp,
    text: "$50M+ Revenue Recovered"
  }
];

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(243,218,115,0.2)',
                border: '1px solid rgba(243,218,115,0.3)'
              }}
            >
              <Icon size={16} style={{ color: '#F3DA73' }} />
            </div>
            <span 
              className="text-sm font-inter font-medium whitespace-nowrap"
              style={{ 
                color: 'rgba(255,255,255,0.95)',
                textShadow: '0 2px 8px rgba(0,0,0,0.3)'
              }}
            >
              {badge.text}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
