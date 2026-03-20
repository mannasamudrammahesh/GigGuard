import { motion } from 'framer-motion';
import { Activity, Users, ShieldAlert, BarChart3, Map, TrendingUp } from 'lucide-react';
import './AdminDashboard.css';

function AdminDashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1 className="gradient-text">Admin Command Center</h1>
        <p>Real-time ecosystem monitoring and fraud detection.</p>
      </div>

      <div className="admin-stats-grid">
        <StatCard title="Active Events" value="2" subValue="Mumbai, Bangalore" icon={<Activity />} color="var(--primary)" />
        <StatCard title="Total Claims (24h)" value="1,248" subValue="+12% from yesterday" icon={<BarChart3 />} color="var(--text-main)" />
        <StatCard title="Fraud Blocked" value="542" subValue="Estimated ₹1.3M saved" icon={<ShieldAlert />} color="var(--danger)" />
        <StatCard title="Trusted Workers" value="8,420" subValue="92% of active fleet" icon={<Users />} color="var(--success)" />
      </div>

      <div className="admin-content-grid">
        <div className="monitoring-panel glass">
          <div className="panel-header">
            <h3>Event Monitoring</h3>
            <div className="live-indicator">
              <div className="pulse-dot"></div>
              <span>LIVE</span>
            </div>
          </div>
          <div className="event-list">
            <EventItem region="Mumbai Central" severity="High" alerted="14:20" claims="412" anomaly="8.2" status="Monitoring" />
            <EventItem region="Bangalore East" severity="Medium" alerted="15:45" claims="128" anomaly="1.4" status="Automated" />
            <EventItem region="Chennai South" severity="Normal" alerted="16:10" claims="42" anomaly="0.5" status="Idle" />
          </div>
        </div>

        <div className="syndicate-viz glass">
          <h3>Syndicate Detection Graph</h3>
          <div className="graph-placeholder">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="graph-nodes"
            >
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="node" 
                  style={{ 
                    transform: `rotate(${i * 30}deg) translateY(-80px)`,
                    background: i % 4 === 0 ? 'var(--danger)' : 'var(--primary)'
                  }}
                ></div>
              ))}
            </motion.div>
            <div className="graph-labels">
              <span className="dim-text">DBSCAN Clustering Active</span>
              <p>Detected 1 anomalous cluster in residential zone X.</p>
            </div>
          </div>
          <div className="graph-legend">
            <div className="legend-item"><div className="dot danger"></div> <span>Syndicate Node</span></div>
            <div className="legend-item"><div className="dot primary"></div> <span>Probable Actor</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, subValue, icon, color }) {
  return (
    <div className="admin-stat-card glass">
      <div className="admin-stat-header">
        <span className="dim-text">{title}</span>
        <div className="admin-icon" style={{ color }}>{icon}</div>
      </div>
      <h2>{value}</h2>
      <span className="admin-subtext">{subValue}</span>
    </div>
  );
}

function EventItem({ region, severity, alerted, claims, anomaly, status }) {
  return (
    <div className="event-item">
      <div className="event-region">
        <strong>{region}</strong>
        <span className="dim-text">Alerted: {alerted}</span>
      </div>
      <div className="event-stat">
        <span className="dim-text">Claims</span>
        <span>{claims}</span>
      </div>
      <div className="event-stat">
        <span className="dim-text">Anomaly</span>
        <span className={anomaly > 5 ? 'danger-text' : 'success-text'}>{anomaly}σ</span>
      </div>
      <div className="event-status">
        <span className={`status-tag ${status.toLowerCase()}`}>{status}</span>
      </div>
    </div>
  );
}

export default AdminDashboard;
