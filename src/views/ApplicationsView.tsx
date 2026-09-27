import { useState, useMemo } from 'react';
import {
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  Mail,
  Download,
  TrendingUp,
} from 'lucide-react';
import {
  applications,
  applicationStatusConfig,
  type ApplicationStatus,
  type Application,
} from '@/data/mockData';

type FilterStatus = 'all' | ApplicationStatus;

const statusCounts: Record<string, number> = {
  all: applications.length,
  pending: applications.filter((a) => a.status === 'pending').length,
  reviewing: applications.filter((a) => a.status === 'reviewing').length,
  accepted: applications.filter((a) => a.status === 'accepted').length,
  rejected: applications.filter((a) => a.status === 'rejected').length,
};

export default function ApplicationsView() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterStatus>('all');

  const filtered = useMemo(() => {
    return applications.filter((app) => {
      const matchSearch =
        app.studentName.toLowerCase().includes(search.toLowerCase()) ||
        app.internshipTitle.toLowerCase().includes(search.toLowerCase()) ||
        app.company.toLowerCase().includes(search.toLowerCase());
      const matchStatus = filter === 'all' || app.status === filter;
      return matchSearch && matchStatus;
    });
  }, [search, filter]);

  const tabs: { id: FilterStatus; label: string }[] = [
    { id: 'all', label: 'Toutes' },
    { id: 'pending', label: 'En attente' },
    { id: 'reviewing', label: 'En évaluation' },
    { id: 'accepted', label: 'Acceptées' },
    { id: 'rejected', label: 'Refusées' },
  ];

  return (
    <div className="p-6 space-y-5 animate-fade-in">
      {/* Stats bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-slate-900">{statusCounts.pending}</p>
            <p className="text-xs text-slate-400">En attente</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-slate-900">{statusCounts.reviewing}</p>
            <p className="text-xs text-slate-400">En évaluation</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-slate-900">{statusCounts.accepted}</p>
            <p className="text-xs text-slate-400">Acceptées</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
            <XCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-slate-900">{statusCounts.rejected}</p>
            <p className="text-xs text-slate-400">Refusées</p>
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-xl border border-slate-200 flex-1 max-w-md focus-within:border-primary-300 transition-colors">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par étudiant, poste, entreprise..."
            className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none flex-1"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-xl transition-colors">
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Exporter</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 bg-white rounded-xl border border-slate-200 p-1 w-fit overflow-x-auto scrollbar-thin">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all whitespace-nowrap ${
              filter === tab.id
                ? 'bg-primary-600 text-white shadow-soft'
                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
            }`}
          >
            {tab.label}
            <span className={`text-xs px-1.5 py-0.5 rounded-md ${
              filter === tab.id ? 'bg-white/20' : 'bg-slate-100 text-slate-500'
            }`}>
              {statusCounts[tab.id]}
            </span>
          </button>
        ))}
      </div>

      {/* Applications list */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <div className="divide-y divide-slate-50">
          {filtered.map((app: Application) => {
            const config = applicationStatusConfig[app.status];
            return (
              <div key={app.id} className="flex flex-col sm:flex-row sm:items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors group">
                {/* Student */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-sm font-semibold text-slate-600 shrink-0">
                    {app.studentAvatar}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-900 truncate">{app.studentName}</p>
                    <p className="text-xs text-slate-400 truncate">{app.level}</p>
                  </div>
                </div>

                {/* Position */}
                <div className="flex-1 min-w-0 hidden sm:block">
                  <p className="text-sm font-medium text-slate-700 truncate">{app.internshipTitle}</p>
                  <p className="text-xs text-slate-400 truncate">{app.company}</p>
                </div>

                {/* Match score */}
                <div className="flex items-center gap-2 sm:w-28">
                  <div className="flex-1 sm:flex-none">
                    <div className="flex items-center gap-1.5">
                      <TrendingUp className={`w-3.5 h-3.5 ${app.matchScore >= 85 ? 'text-emerald-500' : app.matchScore >= 70 ? 'text-primary-500' : 'text-amber-500'}`} />
                      <span className="text-sm font-semibold text-slate-700">{app.matchScore}%</span>
                    </div>
                    <div className="w-20 bg-slate-100 rounded-full h-1 mt-1 overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          app.matchScore >= 85 ? 'bg-emerald-500' : app.matchScore >= 70 ? 'bg-primary-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${app.matchScore}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Date */}
                <div className="hidden lg:block w-28">
                  <p className="text-xs text-slate-400">
                    {new Date(app.appliedDate).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                  </p>
                </div>

                {/* Status */}
                <div className="flex items-center gap-2">
                  <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg border ${config.color}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                    {config.label}
                  </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1.5 rounded-lg text-slate-400 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 rounded-lg text-slate-400 hover:bg-accent-50 hover:text-accent-600 transition-colors">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
            <Search className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="font-display font-semibold text-slate-700 text-lg">Aucune candidature</h3>
          <p className="text-sm text-slate-400 mt-1">Aucune candidature ne correspond à vos critères.</p>
        </div>
      )}
    </div>
  );
}
