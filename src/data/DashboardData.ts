export const DashboardData = [
    { title: "Users", description: "Manage users here.", link: "/users", bgColor: "bg-blue-500" },
    { title: "Roles", description: "Manage roles here.", link: "/roles", bgColor: "bg-green-500" },
    { title: "Login", description: "Login here.", link: "/login", bgColor: "bg-yellow-500" },
];

export const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Users Growth",
        data: [10, 20, 30, 25, 35, 50],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
      },
    ],
  }

export  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  }

  
export type DashboardDataTypes = (typeof DashboardData)[0]