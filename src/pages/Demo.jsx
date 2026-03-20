import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloudRain, AlertTriangle, CheckCircle2, XCircle, Zap, ShieldCheck, Activity } from 'lucide-react';
import { generateClaim } from '../data/mockData';
import './Demo.css';

function Demo() {
  const [isStormActive, setIsStormActive] = useState(false);
  const [claims, setClaims] = useState([]);
  const [processingClaim, setProcessingClaim] = useState(null);

  const startStorm = () => {
    setIsStormActive(true);
    setClaims([]);
    // Sequence of claims: some fraud, some genuine
    const sequence = [
      { delay: 1000, isFraud: true },
      { delay: 1500, isFraud: true },
      { delay: 2000, isFraud: false },
      { delay: 3500, isFraud: true },
      { delay: 5000, isFraud: false },
    ];

    sequence.forEach(({ delay, isFraud }) => {
      setTimeout(() => {
        const newClaim = generateClaim(isFraud);
        setProcessingClaim(newClaim);
        
        // Processing animation time
        setTimeout(() => {
          setClaims(prev => [newClaim, ...prev]);
          setProcessingClaim(null);
        }, 2000);
      }, delay);
    });

    setTimeout(() => setIsStormActive(false), 10000);
  };

  return (
    <div className="demo-page">
      <div className="demo-header">
        <h1 className="gradient-text">Adversarial Defense Simulator</h1>
        <p>Experience how GigGuide differentiates between genuine distress and coordinated fraud.</p>
      </div>

      <div className="demo-grid">
        <div className="simulator-panel glass">
          <div className="panel-header">
            <h3>Control Center</h3>
            {isStormActive && (
              <motion.div 
                animate={{ opacity: [1, 0.5, 1] }} 
                transition={{ repeat: Infinity, duration: 1 }}
                className="status-pill warning"
              >
                <AlertTriangle size={14} /> STORM ACTIVE
              </motion.div>
            )}
          </div>
          
          <div className="sim-controls">
            <button 
              className={`btn-storm ${isStormActive ? 'active' : ''}`}
              onClick={startStorm}
              disabled={isStormActive}
            >
              <CloudRain size={20} />
              <span>Trigger Red-Alert Storm</span>
            </button>
            <p className="dim-text">Simulates a severe weather event in Tier-1 City (Mumbai/Bangalore).</p>
          </div>

          <div className="pipeline-viz">
            <h4>Signal Fusion Pipeline</h4>
            <div className="pipeline-steps">
              <PipelineStep active={!!processingClaim} label="Device Integrity" />
              <PipelineStep active={!!processingClaim} label="Triangulation" />
              <PipelineStep active={!!processingClaim} label="Behavioral" />
              <PipelineStep active={!!processingClaim} label="Graph Cluster" />
              <PipelineStep active={!!processingClaim} label="Weather Anchor" />
            </div>
          </div>
        </div>

        <div className="claims-panel glass">
          <div className="panel-header">
            <h3>Real-time Claim Stream</h3>
            <div className="stats">
              <span className="stat-item"><Activity size={14} /> {claims.length} Incoming</span>
            </div>
          </div>

          <div className="claim-list">
            <AnimatePresence>
              {processingClaim && (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="claim-card processing"
                >
                  <div className="claim-info">
                    <strong>{processingClaim.workerName}</strong>
                    <span className="dim-text">Processing analysis...</span>
                  </div>
                  <div className="loader"></div>
                </motion.div>
              )}
              {claims.map(claim => (
                <motion.div 
                  key={claim.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`claim-card ${claim.status.toLowerCase()}`}
                >
                  <div className="claim-main">
                    <div className="claim-info">
                      <div className="claim-row">
                        <strong>{claim.workerName}</strong>
                        <span className={`type-tag ${claim.type.toLowerCase()}`}>{claim.type}</span>
                      </div>
                      <span className="dim-text">{claim.id} • {claim.timestamp}</span>
                    </div>
                    <div className="score-viz">
                      <div className="score-circle">
                        <span>{claim.trustScore}</span>
                      </div>
                      <span className="score-label">Trust Score</span>
                    </div>
                  </div>
                  <div className="claim-status">
                    {claim.status === 'Approved' ? (
                      <div className="status-msg success">
                        <ShieldCheck size={16} /> AUTO-APPROVED: Funds released
                      </div>
                    ) : (
                      <div className="status-msg danger">
                        <XCircle size={16} /> DENIED: Coordinated Spoofing Detected
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {!processingClaim && claims.length === 0 && (
              <div className="empty-state">
                <p className="dim-text">Waiting for weather event...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineStep({ active, label }) {
  return (
    <div className={`pipeline-step ${active ? 'active' : ''}`}>
      <div className="step-dot"></div>
      <span>{label}</span>
    </div>
  );
}

export default Demo;
