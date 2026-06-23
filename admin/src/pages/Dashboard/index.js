import React from "react";
import { Card, Typography, Chip } from "@mui/material";
import {
  AccountCircle,
  ShoppingBag,
  ShoppingCart,
  Star,
  MoreVert,
  TrendingUp,
} from "@mui/icons-material";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

import "../../App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
);

const SalesChart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const data = [2000, 2500, 2200, 3000, 2800, 3500, 4000];

  const chartData = {
    labels,
    datasets: [
      {
        label: "Monthly Sales",
        data,
        borderColor: "rgba(255,255,255,0.92)",
        backgroundColor: "rgba(255,255,255,0.12)",
        borderWidth: 2,
        tension: 0.45,
        fill: true,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointBackgroundColor: "rgba(255,255,255,0.95)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: {
        grid: {
          color: "rgba(255,255,255,0.14)",
          drawBorder: false,
        },
        ticks: {
          color: "rgba(255,255,255,0.88)",
          font: { family: "Open Sans, sans-serif", size: 12, weight: 700 },
        },
      },
      y: {
        grid: {
          color: "rgba(255,255,255,0.14)",
          drawBorder: false,
        },
        ticks: {
          color: "rgba(255,255,255,0.88)",
          font: { family: "Open Sans, sans-serif", size: 12, weight: 700 },
        },
      },
    },
    interaction: { mode: "nearest", intersect: false },
    hover: { animationDuration: 200 },
    animation: { duration: 850, easing: "easeOutQuart" },
  };

  return (
    <div className="ecom-sales-chartWrap">
      <Line data={chartData} options={options} />
    </div>
  );
};

const KpiCard = ({ variant, title, icon, value, badgeText, footerText }) => {
  const variantClass = {
    users: "ecom-card--green",
    products: "ecom-card--blue",
    orders: "ecom-card--pink",
    reviews: "ecom-card--orange",
    sales: "ecom-card--darkblue",
  }[variant];

  return (
    <Card className={`ecom-card ${variantClass}`} elevation={0}>
      <div className="ecom-card__pattern" />

      <div className="ecom-card__topRow">
        <Typography className="ecom-card__title" variant="body2">
          {title}
        </Typography>
        <div className="ecom-card__topIcon">{icon}</div>
      </div>

      <div className="ecom-card__valueRow">
        <Typography className="ecom-card__value">{value}</Typography>
      </div>

      <div className="ecom-card__bottomRow">
        <div className="ecom-card__bottomLeft">
          <Chip size="small" className="ecom-card__badge" label={badgeText} />
          <Typography className="ecom-card__footerText" variant="body2">
            {footerText}
          </Typography>
        </div>
        <MoreVert className="ecom-card__more" />
      </div>
    </Card>
  );
};

const Dashboard = () => {
  return (
    <div className="ecom-page">
      {/* Top Header */}
      <div className="ecom-topHeader">
        <Typography className="ecom-title" variant="h2">
          Ecommerce
        </Typography>

        <div className="ecom-breadcrumbs" aria-label="Breadcrumb">
          <span className="ecom-breadcrumb">Home</span>
          <span className="ecom-breadcrumbSep">{">"}</span>
          <span className="ecom-breadcrumb">Dashboard</span>
          <span className="ecom-breadcrumbSep">{">"}</span>

          <span className="ecom-breadcrumb ecom-breadcrumb--active">
            Ecommerce
          </span>
        </div>
      </div>

      {/* Dashboard Statistics Section */}
      <div className="ecom-statsGrid">
        {/* PART 1 (30%) */}
        <div className="ecom-part ecom-part--1">
          <KpiCard
            variant="users"
            title="Total Users"
            icon={<AccountCircle />}
            value="277"
            badgeText="+95%"
            footerText="Last Month"
          />

          <div style={{ height: 14 }} />

          <KpiCard
            variant="products"
            title="Total Products"
            icon={<ShoppingBag />}
            value="577"
            badgeText="+25%"
            footerText="Last Month"
          />
        </div>

        {/* PART 2 (30%) */}
        <div className="ecom-part ecom-part--2">
          <KpiCard
            variant="orders"
            title="Total Orders"
            icon={<ShoppingCart />}
            value="338"
            badgeText="+30%"
            footerText="Last Month"
          />

          <div style={{ height: 14 }} />

          <KpiCard
            variant="reviews"
            title="Total Reviews"
            icon={<Star />}
            value="166"
            badgeText="+45%"
            footerText="Last Month"
          />
        </div>

        {/* PART 3 (40%) */}
        <div className="ecom-part ecom-part--3">
          <Card className="ecom-salesCard" elevation={0}>
            <div className="ecom-salesCard__pattern" />

            <div className="ecom-salesCard__top">
              <div className="ecom-salesCard__label">Total Sales</div>

              <div className="ecom-salesCard__amount">Rs 3,787,681.00</div>

              <div className="ecom-salesCard__growth">
                <TrendingUp className="ecom-salesCard__trendIcon" />
                <span className="ecom-salesCard__growthText">40.63%</span>
              </div>
            </div>

            <div className="ecom-salesCard__mid">
              <Typography className="ecom-salesCard__midValue" variant="body1">
                Rs 3,578.90
              </Typography>
              <Typography className="ecom-salesCard__midLabel" variant="body2">
                Last Month
              </Typography>
            </div>

            <SalesChart />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
