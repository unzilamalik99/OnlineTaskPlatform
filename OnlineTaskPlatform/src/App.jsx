import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { TaskProvider } from "./Components/StoreData/TaskContext";
import AdminPanel from "./Components/AdminPanel";
import TaskListing from "./Components/Tasklistings";
import TaskSubmission from "./Components/TaskSubmission";
import TaskReview from "./Components/TaskReview";
import PaymentForm from "./Components/PaymentForm";
import TaskManagement from "./Components/TaskManagement";
import OnlineWorkPlatform from "./Components/OnlineWorkPlatform";
import ResponsiveSidebar from "./Components/ResponsiveSidebar";
import Users from "./Components/Users";
import Dashboard from "./Components/Dashboard";
import Product from "./Components/Product";
import PopularServices from "./Components/PopularServices";
import ContactUs from "./Components/ContactUs";
import TaskReviewForm from "./Components/TaskReviewForm";
import AboutUs from "./Components/AboutUs";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const tasks = [
    { id: 1, title: "Write a blog post", budget: "$100", deadline: "2 days" },
    // ... more tasks
  ];
  const handleSubmission = (formData) => {
    // Additional submission logic
    console.log("Form data submitted:", formData);

    setTimeout(() => {
      // console.log("Data sent to server:", formData);

      // Show success notification
      alert("Form submitted successfully!"); // You can use a more sophisticated notification library
    }, 2000); // 2 seconds delay as an example
  };

  return (
    <BrowserRouter>
      <Header />

      {/* Render Header outside of Routes */}
      <TaskProvider>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/ResponsiveSidebar" element={<ResponsiveSidebar />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/PopularServices" element={<PopularServices />} />

          <Route path="/TaskListings" element={<TaskListing tasks={tasks} />} />
          <Route path="/TaskSubmission" element={<TaskSubmission />} />
          <Route path="/TaskReview" element={<TaskReview />} />
          <Route path="/Users" element={<Users />} />
          <Route path="/Product" element={<Product />} />

          <Route path="/PaymentForm" element={<PaymentForm />} />
          <Route path="/TaskManagement" element={<TaskManagement />} />

          <Route path="/TaskReviewForm" element={<TaskReviewForm />} />
          <Route path="/AdminPanel" element={<AdminPanel />} />

          <Route
            path="/OnlineWorkPlatform"
            element={<OnlineWorkPlatform onSubmit={handleSubmission} />}
          />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        <Footer />
      </TaskProvider>
    </BrowserRouter>
  );
};

export default App;
