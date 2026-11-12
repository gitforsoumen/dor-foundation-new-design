import { useState } from "react";
import PersonaSelector from "./components/PersonaSelector";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";
import ApplicationForm from "./components/ApplicationForm";
import SlotBooking from "./components/SlotBooking";
import Layout from "./components/Layout";
import AdminLayout from "./components/admin/AdminLayout";
import CounsellorLayout from "./components/counsellor/CounsellorLayout";
import ForgotPassword from "./components/ForgotPassword";
import VolunteerAuth from "./components/counsellor/VolunteerAuth";
import VolunteerForgotPassword from "./components/counsellor/VolunteerForgotPassword";

type Screen = 'persona' | 'auth' | 'dashboard' | 'application' | 'slotBooking' | 'admin' | 'counsellor' | 'forgotPassword' | 'volunteerAuth' | 'volunteerForgotPassword';

interface User {
  name: string;
  email: string;
  mobile: string;
}

interface AdminUser {
  name: string;
  email: string;
  role: string;
}

interface CounsellorUser {
  name: string;
  email: string;
  role: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('persona');
  const [user, setUser] = useState<User | null>(null);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [counsellorUser, setCounsellorUser] = useState<CounsellorUser | null>(null);
  const [openDocumentsOnDashboard, setOpenDocumentsOnDashboard] = useState(false);
  const [documentsViewOpen, setDocumentsViewOpen] = useState(false);

  const handleSelectPersona = (persona: 'student' | 'counselor' | 'admin') => {
    if (persona === 'student') {
      setCurrentScreen('auth');
    } else if (persona === 'admin') {
      // Set default admin user and go directly to admin dashboard
      setAdminUser({
        name: "Saikat Mitra",
        email: "admin@dorfoundation.org",
        role: "Admin"
      });
      setCurrentScreen('admin');
    } else if (persona === 'counselor') {
      // Go to volunteer login page
      setCurrentScreen('volunteerAuth');
    }
  };

  const handleAuthSuccess = (userData: User) => {
    setUser(userData);
    setCurrentScreen('dashboard');
  };

  const handleStartApplication = () => {
    setCurrentScreen('application');
  };

  const handleChooseSlot = () => {
    setCurrentScreen('slotBooking');
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
    setOpenDocumentsOnDashboard(false);
  };

  const handleOpenDocuments = () => {
    setCurrentScreen('dashboard');
    setOpenDocumentsOnDashboard(true);
  };

  const handleBackToPersona = () => {
    setCurrentScreen('persona');
    setUser(null);
  };

  const handleBackToHome = () => {
    setCurrentScreen('persona');
  };

  const handleLogout = () => {
    setUser(null);
    setAdminUser(null);
    setCounsellorUser(null);
    setCurrentScreen('persona');
  };

  const handleForgotPassword = () => {
    setCurrentScreen('forgotPassword');
  };

  const handleVolunteerAuthSuccess = (userData: CounsellorUser) => {
    setCounsellorUser(userData);
    setCurrentScreen('counsellor');
  };

  const handleVolunteerForgotPassword = () => {
    setCurrentScreen('volunteerForgotPassword');
  };

  return (
    <>
      {currentScreen === 'persona' && (
        <PersonaSelector onSelectPersona={handleSelectPersona} />
      )}

      {currentScreen === 'auth' && (
        <Auth 
          onAuthSuccess={handleAuthSuccess}
          onBackToHome={handleBackToHome}
          onForgotPassword={handleForgotPassword}
        />
      )}

      {currentScreen === 'dashboard' && user && (
        <Layout user={{ name: user.name, role: 'Student' }} onLogout={handleLogout} onLogoClick={handleBackToDashboard} activePage={documentsViewOpen ? "documents" : "dashboard"} onNavigateDashboard={handleBackToDashboard} onNavigateApplication={handleStartApplication} onNavigateDocuments={handleOpenDocuments} onNavigateSlots={handleChooseSlot}>
          <Dashboard 
            onDocumentsViewChange={setDocumentsViewOpen}
            user={user} 
            onStartApplication={handleStartApplication}
            onChooseSlot={handleChooseSlot}
            onBackToPersona={handleBackToPersona}
            openDocumentsOnDashboard={openDocumentsOnDashboard}
            setOpenDocumentsOnDashboard={setOpenDocumentsOnDashboard}
          />
        </Layout>
      )}

      {currentScreen === 'application' && user && (
        <Layout user={{ name: user.name, role: 'Student' }} onLogout={handleLogout} onLogoClick={handleBackToDashboard} activePage="application" onNavigateDashboard={handleBackToDashboard} onNavigateApplication={handleStartApplication} onNavigateDocuments={handleOpenDocuments} onNavigateSlots={handleChooseSlot}>
          <ApplicationForm 
            user={user}
            onBackToDashboard={handleBackToDashboard}
            onOpenDocuments={handleOpenDocuments}
          />
        </Layout>
      )}

      {currentScreen === 'slotBooking' && user && (
        <Layout user={{ name: user.name, role: 'Student' }} onLogout={handleLogout} onLogoClick={handleBackToDashboard} activePage="slots" onNavigateDashboard={handleBackToDashboard} onNavigateApplication={handleStartApplication} onNavigateDocuments={handleOpenDocuments} onNavigateSlots={handleChooseSlot}>
          <SlotBooking 
            onBackToDashboard={handleBackToDashboard}
          />
        </Layout>
      )}

      {currentScreen === 'admin' && (
        <AdminLayout onLogout={handleLogout} adminUser={adminUser} />
      )}

      {currentScreen === 'counsellor' && counsellorUser && (
        <CounsellorLayout onLogout={handleLogout} counsellorUser={counsellorUser} />
      )}

      {currentScreen === 'forgotPassword' && (
        <ForgotPassword onBackToLogin={() => setCurrentScreen('auth')} />
      )}

      {currentScreen === 'volunteerAuth' && (
        <VolunteerAuth 
          onAuthSuccess={handleVolunteerAuthSuccess}
          onBackToHome={handleBackToHome}
          onForgotPassword={handleVolunteerForgotPassword}
        />
      )}

      {currentScreen === 'volunteerForgotPassword' && (
        <VolunteerForgotPassword onBackToLogin={() => setCurrentScreen('volunteerAuth')} />
      )}
    </>
  );
}