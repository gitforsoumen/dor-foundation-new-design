import { Download, ArrowRight, Users, Clock, CheckCircle, TrendingUp, UserCheck, UserX, Eye, MoreVertical, FileDown, FileText } from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, PieChart, Pie } from "recharts";
import CounselorLoadBalanceCard from "../../imports/Card2";
import CardMenu from "./CardMenu";
import svgPaths from "../../imports/svg-683k90k0op";

interface AdminDashboardProps {
  onNavigateToReview?: (appId?: string) => void;
}

export default function AdminDashboard({ onNavigateToReview }: AdminDashboardProps) {

  // Mock data - in real app, this would come from API
  const metrics = {
    totalApplications: 156,
    pendingReview: 42,
    accepted: 89,
    rejected: 25,
    finalAdmissions: 76,
    conversionRate: 78.5,
    dropoutRate: 5.2
  };

  // Application Trends Data
  const applicationTrendsData = [
    { month: "Jan", applications: 125, accepted: 98 },
    { month: "Feb", applications: 145, accepted: 112 },
    { month: "Mar", applications: 168, accepted: 128 },
    { month: "Apr", applications: 152, accepted: 118 },
    { month: "May", applications: 178, accepted: 142 },
    { month: "Jun", applications: 156, accepted: 124 }
  ];

  // Application Status Distribution Data
  const statusDistributionData = [
    { name: "Pending Review", value: 42, color: "#f59e0b" },
    { name: "Under Review", value: 35, color: "#0ea5e9" },
    { name: "Accepted", value: 89, color: "#22c58b" },
    { name: "Rejected", value: 25, color: "#ff4d6e" },
    { name: "Final Admission", value: 76, color: "#8b5cf6" }
  ];

  // Recent Applications Data
  const recentApplications = [
    {
      id: "APP-2024-156",
      name: "Priya Sharma",
      date: "Nov 8, 2025",
      status: "Pending Review"
    },
    {
      id: "APP-2024-155",
      name: "Rajesh Kumar",
      date: "Nov 7, 2025",
      status: "Accepted"
    },
    {
      id: "APP-2024-154",
      name: "Ananya Patel",
      date: "Nov 7, 2025",
      status: "Accepted"
    },
    {
      id: "APP-2024-153",
      name: "Arjun Reddy",
      date: "Nov 6, 2025",
      status: "Pending Review"
    },
    {
      id: "APP-2024-152",
      name: "Meera Singh",
      date: "Nov 6, 2025",
      status: "Rejected"
    }
  ];

  // Export Report: downloads the recent applications as a CSV file
  const handleExportExcel = () => {
    const rows = [
      ["Application ID", "Student Name", "Date Submitted", "Status"],
      ...recentApplications.map((a) => [a.id, a.name, a.date, a.status]),
    ];
    const csv = rows.map((r) => r.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dor-foundation-applications.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadExcel = (cardName: string) => {
    console.log(`Downloading ${cardName} data in Excel...`);
  };

  const handleDownloadWord = (cardName: string) => {
    console.log(`Downloading ${cardName} data in Word...`);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending Review":
        return "bg-[#f59e0b]/15 text-[#fbbf24]";
      case "Under Review":
        return "bg-[#0ea5e9]/15 text-[#38bdf8]";
      case "Accepted":
        return "bg-[#22c58b]/15 text-[#3ddc9f]";
      case "Rejected":
        return "bg-[#ff4d6e]/15 text-[#ff6b85]";
      default:
        return "bg-[#232c48] text-[#c4c9dc]";
    }
  };

  const getInitials = (name: string) =>
    name.split(" ").filter(Boolean).map((p) => p.charAt(0)).slice(0, 2).join("").toUpperCase();

  const kpis = [
    {
      label: "Total Applications",
      value: `${metrics.totalApplications}`,
      note: "All applications received",
      noteClass: "text-[#3ddc9f]",
      iconBg: "bg-[#14b8a6]",
      icon: <FileText className="size-[20px] text-white" />,
    },
    {
      label: "Final Admissions",
      value: `${metrics.finalAdmissions}`,
      note: `${metrics.conversionRate}% conversion`,
      noteClass: "text-[#3ddc9f]",
      iconBg: "bg-[#22c58b]",
      icon: <UserCheck className="size-[20px] text-white" />,
    },
    {
      label: "Pending Review",
      value: `${metrics.pendingReview}`,
      note: "Needs action",
      noteClass: "text-[#fbbf24]",
      iconBg: "bg-[#f59e0b]",
      icon: <Clock className="size-[20px] text-white" />,
    },
    {
      label: "Accepted vs Rejected",
      value: `${metrics.accepted} / ${metrics.rejected}`,
      note: `${metrics.dropoutRate}% dropout`,
      noteClass: "text-[#8b93ad]",
      iconBg: "bg-[#0ea5e9]",
      icon: <CheckCircle className="size-[20px] text-white" />,
    },
  ];

  const cardClass = "bg-[#131a30] border border-[#1f2742] rounded-[20px] shadow-[0_12px_30px_rgba(0,0,0,0.25)]";

  return (
    <div className="min-h-full">
      <div className="max-w-[1400px] mx-auto px-4 py-6 md:px-9 md:pt-5 md:pb-8">
        {/* Page header */}
        <div className="mb-7 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
          <div>
            <h1 className="font-bold text-white text-[26px] sm:text-[30px] md:text-[32px] leading-[1.2] mb-1">
              Welcome, Saikat!
            </h1>
            <p className="text-[#8b93ad] text-[15px]">
              Overview of scholarship applications and management
            </p>
          </div>
          <button
            type="button"
            onClick={handleExportExcel}
            className="self-start md:self-auto inline-flex items-center gap-2 h-[44px] px-5 rounded-[12px] text-white text-[14px] font-semibold bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] shadow-[0_10px_24px_rgba(20,184,166,0.3)] hover:brightness-110 transition"
          >
            <Download className="size-[17px]" />
            Export Report
          </button>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {kpis.map((k) => (
            <div key={k.label} className={`${cardClass} p-5`}>
              <div className="flex items-center gap-3">
                <span className={`size-[40px] rounded-[12px] grid place-items-center ${k.iconBg}`}>{k.icon}</span>
                <span className="text-[#aab1c8] text-[14px] font-medium">{k.label}</span>
              </div>
              <p className="text-white font-bold text-[34px] leading-[1.15] mt-4">{k.value}</p>
              <p className={`flex items-center gap-1.5 text-[12.5px] mt-1.5 ${k.noteClass}`}>
                <TrendingUp className="size-[14px]" />
                {k.note}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 xl:grid-cols-[1.5fr_1fr] gap-5 mb-5">
          <div className={`${cardClass} p-6`}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white font-semibold text-[17px]">Application Trends</h2>
              <div className="flex items-center gap-4 text-[12.5px] text-[#aab1c8]">
                <span className="flex items-center gap-1.5"><span className="size-[10px] rounded-[3px] bg-[#14b8a6]" />Applications</span>
                <span className="flex items-center gap-1.5"><span className="size-[10px] rounded-[3px] bg-[#f59e0b]" />Accepted</span>
              </div>
            </div>
            <div className="h-[260px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={applicationTrendsData} barGap={4} barCategoryGap="28%">
                  <CartesianGrid strokeDasharray="3 4" vertical={false} stroke="#232c48" />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#8b93ad", fontSize: 12 }} />
                  <YAxis axisLine={false} tickLine={false} tick={{ fill: "#8b93ad", fontSize: 12 }} width={36} />
                  <Tooltip cursor={{ fill: "rgba(20,184,166,0.08)" }} />
                  <Bar dataKey="applications" name="Applications" fill="#14b8a6" radius={[6, 6, 0, 0]} maxBarSize={24} />
                  <Bar dataKey="accepted" name="Accepted" fill="#f59e0b" radius={[6, 6, 0, 0]} maxBarSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className={`${cardClass} p-6`}>
            <h2 className="text-white font-semibold text-[17px] mb-4">Application Status</h2>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="relative size-[190px] shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={statusDistributionData} dataKey="value" nameKey="name" innerRadius={64} outerRadius={88} paddingAngle={2} stroke="none">
                      {statusDistributionData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 grid place-items-center pointer-events-none">
                  <div className="text-center">
                    <p className="text-white font-bold text-[17px]">By status</p>
                    <p className="text-[#8b93ad] text-[12px]">5 stages</p>
                  </div>
                </div>
              </div>
              <div className="flex-1 w-full flex flex-col gap-3">
                {statusDistributionData.map((s) => (
                  <div key={s.name} className="flex items-center gap-3 text-[14px]">
                    <span className="size-[10px] rounded-full" style={{ backgroundColor: s.color }} />
                    <span className="flex-1 text-[#c4c9dc]">{s.name}</span>
                    <span className="text-white font-semibold">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Recent Applications */}
        <div className={`${cardClass} p-6 mb-8`}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-semibold text-[17px]">Recent Applications</h2>
            <button
              type="button"
              onClick={() => onNavigateToReview?.()}
              className="inline-flex items-center gap-1.5 text-[#2dd4bf] hover:text-[#5eead4] text-[14px] font-semibold"
            >
              View All <ArrowRight className="size-[15px]" />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-[14px]">
              <thead>
                <tr className="border-b border-[#1f2742]">
                  {["Application ID", "Student Name", "Date Submitted", "Status", "Actions"].map((h) => (
                    <th key={h} className={`py-3 px-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#8b93ad] ${h === "Actions" ? "text-right" : "text-left"}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentApplications.map((application) => (
                  <tr key={application.id} className="border-b border-[#1a2139] last:border-0 hover:bg-[#151c33] transition-colors">
                    <td className="py-3.5 px-3 font-mono text-[13px] text-[#8b93ad] whitespace-nowrap">{application.id}</td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <span className="inline-flex items-center gap-3 text-[#e8ebf5]">
                        <span className="size-[30px] rounded-full grid place-items-center text-[11.5px] font-bold text-[#0b1020] bg-[#f59e0b]">
                          {getInitials(application.name)}
                        </span>
                        {application.name}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-[#c4c9dc] whitespace-nowrap">{application.date}</td>
                    <td className="py-3.5 px-3">
                      <span className={`inline-block text-[12px] font-semibold px-3 py-1 rounded-full whitespace-nowrap ${getStatusColor(application.status)}`}>
                        {application.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right">
                      <button
                        type="button"
                        onClick={() => onNavigateToReview?.(application.id)}
                        className="inline-flex items-center gap-1.5 text-[#2dd4bf] hover:text-[#5eead4] font-semibold text-[13.5px]"
                      >
                        <Eye className="size-[16px]" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
