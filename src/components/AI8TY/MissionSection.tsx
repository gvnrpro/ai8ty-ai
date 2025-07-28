import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-8 text-4xl font-medium text-white">
          Making AI reliable
        </h2>
        
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/70 mb-16">
          We focus on building AI systems that work consistently in production environments. 
          Our tools help teams deploy, monitor, and scale AI with confidence.
        </p>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 text-left">
          <div>
            <h3 className="mb-3 text-lg font-medium text-white">
              Production-ready
            </h3>
            <p className="text-white/60">
              Built for real-world deployment with monitoring and failsafes.
            </p>
          </div>
          
          <div>
            <h3 className="mb-3 text-lg font-medium text-white">
              Scalable
            </h3>
            <p className="text-white/60">
              Handle enterprise workloads without performance degradation.
            </p>
          </div>
          
          <div>
            <h3 className="mb-3 text-lg font-medium text-white">
              Reliable
            </h3>
            <p className="text-white/60">
              Consistent results you can depend on for business operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;