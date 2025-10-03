import { Route, Routes } from "react-router";
import Home from "./Home";
import DailyAttendence from "./DailyAttendence";
import Tasks from "./Tasks";
import Interviews from "./Interviews";
import { AppSidebar } from "./app-sidebar";
import Projects from "./Projects";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<AppSidebar />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="daily-attendance" element={<DailyAttendence />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="interviews" element={<Interviews />} />
        <Route path="projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}

export default Router;
