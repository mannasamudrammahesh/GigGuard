import { motion } from 'framer-motion';
import { User, Shield, Clock, Landmark, AlertCircle } from 'lucide-react';
import { mockWorkers } from '../data/mockData';
import './WorkerDashboard.css';

function WorkerDashboard() {
  const worker = mockWorkers[0]; // Arjun S.

  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="gradient-text">Worker Dashboard</h1>
        <p>Your secure parametric insurance portal.</p>
      </div>

      <div className="worker-stats-grid">
        <div className="stat-card glass">
          <div className="stat-icon-bg"><Shield size={24} className="primary-text" /></div>
          <div className="stat-info">
            <span className="dim-text">Trust Score</span>
            <h3>{worker.trustScore} / 100</h3>
          </div>
          <div className="score-meter">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${worker.trustScore}%` }}
              className="meter-fill"
            ></motion.div>
          </div>
        </div>

        <div className="stat-card glass">
          <div className="stat-icon-bg"><Clock size={24} className="primary-text" /></div>
          <div className="stat-info">
            <span className="dim-text">Platform Tenure</span>
            <h3>{worker.tenure}</h3>
          </div>
        </div>

        <div className="stat-card glass">
          <div className="stat-icon-bg"><Landmark size={24} className="primary-text" /></div>
          <div className="stat-info">
            <span className="dim-text">Status</span>
            <h3 className="success-text">{worker.status}</h3>
          </div>
        </div>
      </div>

      <div className="dashboard-content-grid">
        <div className="history-panel glass">
          <h3>Claim History</h3>
          <div className="table-header dim-text">
            <span>Date</span>
            <span>Event</span>
            <span>Status</span>
            <span>Amount</span>
          </div>
          <div className="history-list">
            <HistoryItem date="Mar 12, 2026" event="Mass Flood (Mumbai)" status="Approved" amount="₹2,500" />
            <HistoryItem date="Feb 28, 2026" event="Cyclone Sitrang" status="Approved" amount="₹4,000" />
            <HistoryItem date="Jan 15, 2026" event="Heatwave Tier-3" status="Approved" amount="₹1,200" />
          </div>
        </div>

        <div className="info-panel glass">
          <h3>Fast-Track Advantage</h3>
          <p className="dim-text">Because your Trust Score is above 80 and you have a clean history, you are enrolled in **Fast-Track Payouts**.</p>
          <div className="benefit-item">
            <CheckCircle size={16} className="success-text" />
            <span>Instant approval during mass weather events.</span>
          </div>
          <div className="benefit-item">
            <CheckCircle size={16} className="success-text" />
            <span>No manual verification holds for claims under ₹5,000.</span>
          </div>
          <div className="benefit-item">
            <CheckCircle size={16} className="success-text" />
            <span>Priority human support if a flag ever occurs.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function HistoryItem({ date, event, status, amount }) {
  return (
    <div className="history-item">
      <span>{date}</span>
      <span>{event}</span>
      <span className="success-text">{status}</span>
      <span className="bold">{amount}</span>
    </div>
  );
}

function CheckCircle({ size, className }) {
  return (
    <svg 
      width={size} height={size} viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" 
      className={className}
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default WorkerDashboard;
