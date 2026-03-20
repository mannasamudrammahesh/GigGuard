import { motion } from 'framer-motion';
import { ShieldAlert, Zap, BarChart3, Users, Network, Lock } from 'lucide-react';
import './LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="hero-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <div className="badge glass">Phase 1: Adversarial Defense Edition</div>
          <h1 className="hero-title">
            Parametric Resilience <br /> 
            <span className="gradient-text">Against Exploitation</span>
          </h1>
          <p className="hero-description">
            GigGuide is a multi-layered adversarial defense platform for parametric insurance. 
            We protect liquidity pools while providing instant safety nets for honest gig workers.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Get Early Access</button>
            <button className="btn-secondary">View Strategy</button>
          </div>
        </motion.div>
      </header>

      <section className="features-section">
        <div className="section-container">
          <h2 className="section-title">The Differentiation</h2>
          <div className="feature-grid">
            <FeatureCard 
              icon={<ShieldAlert className="feat-icon" />}
              title="Device Integrity"
              description="Detects mock location providers, synthetic HDOP signatures, and barometric anomalies."
            />
            <FeatureCard 
              icon={<Zap className="feat-icon" />}
              title="Network Triangulation"
              description="3-point cross-check between GPS, Cell Tower, Wi-Fi BSSID, and IP geolocation."
            />
            <FeatureCard 
              icon={<Users className="feat-icon" />}
              title="Behavioral Biometrics"
              description="Analyzes app interaction patterns and historical operating geography baselines."
            />
            <FeatureCard 
              icon={<Network className="feat-icon" />}
              title="Graph Fraud Detection"
              description="DBSCAN clustering to detect coordinated syndicate rings and shared device fingerprints."
            />
            <FeatureCard 
              icon={<Lock className="feat-icon" />}
              title="Fast-Track Approved"
              description="Honest workers with clean history get immediate payouts, even during mass alerts."
            />
            <FeatureCard 
              icon={<BarChart3 className="feat-icon" />}
              title="External Anchoring"
              description="Real-time verification against satellite rainfall data and hyperlocal radar imagery."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05, translateY: -5 }}
      className="feature-card glass"
    >
      <div className="card-icon-container">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </motion.div>
  );
}

export default LandingPage;
