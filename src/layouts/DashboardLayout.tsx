import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar, { type ViewId } from '@/components/Sidebar';
import Header from '@/components/Header';
import DashboardView from '@/views/DashboardView';
import OffersView from '@/views/OffersView';
import ApplicationsView from '@/views/ApplicationsView';
import CompaniesView from '@/views/CompaniesView';
import StudentsView from '@/views/StudentsView';
import SettingsView from '@/views/SettingsView';
import { useAuth } from '@/context/AuthContext';

const viewMeta: Record<ViewId, { title: string; subtitle: string }> = {
  dashboard: { title: 'Tableau de bord', subtitle: 'Vue d\'ensemble de la plateforme de stages' },
  offers: { title: 'Offres de stage', subtitle: 'Gérez et publiez les offres disponibles' },
  applications: { title: 'Candidatures', subtitle: 'Suivez et évaluez les candidatures des étudiants' },
  companies: { title: 'Entreprises partenaires', subtitle: 'Gérez vos relations avec les entreprises' },
  students: { title: 'Étudiants', subtitle: 'Suivez le parcours et le placement des étudiants' },
  settings: { title: 'Paramètres', subtitle: 'Configuration de la plateforme' },
};

export default function DashboardLayout() {
  const [activeView, setActiveView] = useState<ViewId>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const meta = viewMeta[activeView];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        activeView={activeView}
        onViewChange={setActiveView}
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((c) => !c)}
      />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={meta.title} subtitle={meta.subtitle} onSignOut={handleSignOut} />
        <main className="flex-1 overflow-y-auto scrollbar-thin">
          {activeView === 'dashboard' && <DashboardView />}
          {activeView === 'offers' && <OffersView />}
          {activeView === 'applications' && <ApplicationsView />}
          {activeView === 'companies' && <CompaniesView />}
          {activeView === 'students' && <StudentsView />}
          {activeView === 'settings' && <SettingsView />}
        </main>
      </div>
    </div>
  );
}
