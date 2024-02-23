import React, { useEffect } from "react";
import { AuthProvider } from "./Context/authContext";
import { UserProvider } from "./ContextUser/UserContext";
import genAiHandler, {
  initializeGenAiHandler,
} from "./Components/genAiHandler";
import Banner from "./Components/Banner";
import Header from "./Components/Header";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { TaskContextProvider } from "./Components/StoreData/TaskContext";
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
import OnilineTaskPlatform from "./Components/OnilineTaskPlatform";
import AboutUs from "./Components/AboutUs";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    if (!genAiHandler.initialized) {
      try {
        initializeGenAiHandler({
          someProperty: "value",
          someOtherProperty: "anotherValue",
        });
      } catch (error) {
        console.error("Error during initialization:", error);
      }
    }
  }, []);

  const handleSubmission = (formData) => {
    console.log("Form data submitted:", formData);

    setTimeout(() => {
      // console.log("Data sent to server:", formData);

      alert("Form submitted successfully!");
    }, 2000);
  };

  return (
    <BrowserRouter>
      <AuthProvider>
        <UserProvider>
          <Header />
          <TaskContextProvider>
            <Routes>
              <Route path="/" element={<Banner />} />
              <Route
                path="/ResponsiveSidebar"
                element={<ResponsiveSidebar />}
              />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/PopularServices" element={<PopularServices />} />

              <Route path="/TaskListings" element={<TaskListing />} />
              <Route path="/TaskSubmission" element={<TaskSubmission />} />
              <Route path="/Users" element={<Users />} />
              <Route path="/Product" element={<Product />} />
              <Route
                path="/OnilineTaskPlatform"
                element={<OnilineTaskPlatform />}
              />

              <Route path="/PaymentForm" element={<PaymentForm />} />
              <Route path="/TaskManagement" element={<TaskManagement />} />

              <Route path="/TaskReview/:taskId" element={<TaskReview />} />

              <Route path="/AdminPanel" element={<AdminPanel />} />

              <Route
                path="/OnlineWorkPlatform"
                element={<OnlineWorkPlatform onSubmit={handleSubmission} />}
              />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Details/:taskId" element={<Details />} />
              <Route path="/ContactUs" element={<ContactUs />} />
              <Route path="/Footer" element={<Footer />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </TaskContextProvider>
          <Footer />
        </UserProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
