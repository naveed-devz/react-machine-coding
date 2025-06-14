import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from "recharts";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./Dashboard.css";

const Dashboard = () => {
  const data = [
    { name: "Mar 22", Direct: 1.7, Indirect: 2.4 },
    { name: "Apr 22", Direct: 2.2, Indirect: 2.7 },
    { name: "May 22", Direct: 1.9, Indirect: 2.8 },
    { name: "Jun 22", Direct: 2.6, Indirect: 3.1 },
  ];

  const avgData = [
    { month: "Jan", value: 90 },
    { month: "Feb", value: 135 },
    { month: "Mar", value: 150 },
    { month: "Apr", value: 160 },
    { month: "May", value: 180 },
  ];

  const retailData = [
    { month: "Jan", value: 5000 },
    { month: "Feb", value: 7000 },
    { month: "Mar", value: 6000 },
    { month: "Apr", value: 8000 },
    { month: "May", value: 9000 },
  ];

  const customerData = [
    { month: "Jan", value: 3000 },
    { month: "Feb", value: 4000 },
    { month: "Mar", value: 3500 },
    { month: "Apr", value: 4500 },
    { month: "May", value: 5000 },
  ];

  const keyAccountData = [
    { month: "Jan", value: 2000 },
    { month: "Feb", value: 2500 },
    { month: "Mar", value: 2700 },
    { month: "Apr", value: 3000 },
    { month: "May", value: 3200 },
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">LOGO</div>
        <nav>
          <p>Pages</p>
          <ul>
            <li>Dashboard</li>
            <li>Customers</li>
          </ul>
        </nav>
      </aside>

      <div className="main-content">
        <header className="top-bar">
          <h2>Good afternoon, Anujith 👋</h2>
          <p>Here's what's happening today</p>
          <div className="profile-section">
            <span>R</span>
            <span>T</span>
            <span>C</span>
            <span>+</span>
          </div>
        </header>

        <section className="stats">
          <div className="stat-card">
            <h3>Retail</h3>
            <LineChart width={300} height={200} data={retailData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#82ca9d" />
            </LineChart>
          </div>
          <div className="stat-card">
            <h3>Customer</h3>
            <LineChart width={300} height={200} data={customerData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </div>
          <div className="stat-card">
            <h3>Key Account</h3>
            <LineChart width={300} height={200} data={keyAccountData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#ffc658" />
            </LineChart>
          </div>
        </section>

        <section className="charts">
          <div className="chart">
            <h4>Direct VS Indirect</h4>
            <BarChart width={400} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Direct" fill="#8884d8" />
              <Bar dataKey="Indirect" fill="#82ca9d" />
            </BarChart>
          </div>

          <div className="chart">
            <h4>AVG Order Value</h4>
            <LineChart width={400} height={300} data={avgData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
