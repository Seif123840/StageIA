import {
  Briefcase,
  FileText,
  GraduationCap,
  Building2,
  TrendingUp,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  MessageSquare,
  FilePlus,
  Building,
  Eye,
} from 'lucide-react';
import {
  dashboardStats,
  activityFeed,
  internships,
  applications,
  type ActivityItem,
} from '@/data/mockData';

const iconMap: Record<string, typeof Briefcase> = {
  briefcase: Briefcase,
  fileText: FileText,
  graduationCap: GraduationCap,
  building: Building2,
};

const colorMap: Record<string, { bg: string; text: string; ring: string }> = {
  primary: { bg: 'bg-primary-50', text: 'text-primary-600', ring: 'ring-primary-100' },
  accent: { bg: 'bg-accent-50', text: 'text-accent-600', ring: 'ring-accent-100' },
  emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', ring: 'ring-emerald-100' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-600', ring: 'ring-amber-100' },
};

const activityIcons: Record<ActivityItem['type'], { icon: typeof CheckCircle2; color: string }> = {
  application: { icon: FileText, color: 'text-primary-600 bg-primary-50' },
  accepted: { icon: CheckCircle2, color: 'text-emerald-600 bg-emerald-50' },
  offer: { icon: FilePlus, color: 'text-accent-600 bg-accent-50' },
  company: { icon: Building, color: 'text-amber-600 bg-amber-50' },
  message: { icon: MessageSquare, color: 'text-violet-600 bg-violet-50' },
  review: { icon: Eye, color: 'text-slate-600 bg-slate-100' },
};

export default function DashboardView() {
  const recentApplications = applications.slice(0, 5);
  const topOffers = [...internships].sort((a, b) => b.applicants - a.applicants).slice(0, 4);

  return (
    <div className="p-6 space-y-6 animate-fade-in">
      {/* Welcome banner */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 p-6 sm:p-8 text-white">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-2xl" />
        <div className="absolute bottom-0 left-1/3 w-48 h-48 bg-accent-400/20 rounded-full translate-y-1/2 blur-2xl" />
        <div className="relative">
          <p className="text-primary-100 text-sm font-medium mb-1">Bonjour, Admin 👋</p>
          <h2 className="font-display font-bold text-2xl sm:text-3xl mb-2">
            Bienvenue sur votre tableau de bord
          </h2>
          <p className="text-primary-100 text-sm max-w-lg">
            Vous avez 34 nouvelles candidatures ce mois et 6 offres de stage actives.
            Voici un aperçu de l'activité de la plateforme.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            <button className="flex items-center gap-2 px-4 py-2 bg-white text-primary-700 text-sm font-semibold rounded-xl hover:bg-primary-50 transition-colors shadow-soft">
              <FilePlus className="w-4 h-4" />
              Créer une offre
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-white/15 text-white text-sm font-semibold rounded-xl hover:bg-white/25 transition-colors backdrop-blur-sm">
              <TrendingUp className="w-4 h-4" />
              Voir les rapports
            </button>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardStats.map((stat) => {
          const Icon = iconMap[stat.icon];
          const colors = colorMap[stat.color];
          return (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-soft transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center ring-4 ${colors.ring} group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-5 h-5" strokeWidth={2} />
                </div>
                <span className="flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                  <ArrowUpRight className="w-3 h-3" />
                  {stat.change}
                </span>
              </div>
              <p className="text-3xl font-display font-bold text-slate-900">{stat.value}</p>
              <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Two column section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent applications */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200">
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
            <div>
              <h3 className="font-display font-bold text-slate-900">Candidatures récentes</h3>
              <p className="text-xs text-slate-400 mt-0.5">Les 5 dernières candidatures reçues</p>
            </div>
            <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
              Tout voir →
            </button>
          </div>
          <div className="divide-y divide-slate-50">
            {recentApplications.map((app) => (
              <div key={app.id} className="flex items-center gap-4 px-5 py-3.5 hover:bg-slate-50 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-sm font-semibold text-slate-600 shrink-0">
                  {app.studentAvatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{app.studentName}</p>
                  <p className="text-xs text-slate-400 truncate">
                    {app.internshipTitle} · {app.company}
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <div className="w-20 bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        app.matchScore >= 85 ? 'bg-emerald-500' : app.matchScore >= 70 ? 'bg-primary-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${app.matchScore}%` }}
                    />
                  </div>
                  <span className="text-xs font-semibold text-slate-600 w-8">{app.matchScore}%</span>
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-lg border ${
                  app.status === 'accepted' ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : app.status === 'reviewing' ? 'bg-primary-50 text-primary-700 border-primary-200'
                  : app.status === 'rejected' ? 'bg-rose-50 text-rose-700 border-rose-200'
                  : 'bg-amber-50 text-amber-700 border-amber-200'
                }`}>
                  {app.status === 'accepted' ? 'Acceptée' : app.status === 'reviewing' ? 'En évaluation' : app.status === 'rejected' ? 'Refusée' : 'En attente'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity feed */}
        <div className="bg-white rounded-2xl border border-slate-200">
          <div className="px-5 py-4 border-b border-slate-100">
            <h3 className="font-display font-bold text-slate-900">Activité récente</h3>
            <p className="text-xs text-slate-400 mt-0.5">Flux d'activité de la plateforme</p>
          </div>
          <div className="p-5 space-y-4">
            {activityFeed.map((item) => {
              const config = activityIcons[item.type];
              const Icon = config.icon;
              return (
                <div key={item.id} className="flex gap-3">
                  <div className={`w-8 h-8 rounded-lg ${config.color} flex items-center justify-center shrink-0`}>
                    <Icon className="w-4 h-4" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-700 leading-snug">{item.message}</p>
                    <p className="flex items-center gap-1 text-xs text-slate-400 mt-1">
                      <Clock className="w-3 h-3" />
                      {item.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Top offers */}
      <div className="bg-white rounded-2xl border border-slate-200">
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <div>
            <h3 className="font-display font-bold text-slate-900">Offres les plus populaires</h3>
            <p className="text-xs text-slate-400 mt-0.5">Classées par nombre de candidatures</p>
          </div>
          <button className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
            Toutes les offres →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
          {topOffers.map((offer) => (
            <div key={offer.id} className="rounded-xl border border-slate-200 p-4 hover:border-primary-200 hover:shadow-soft transition-all duration-300 cursor-pointer group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-sm font-bold text-primary-700 group-hover:scale-110 transition-transform">
                  {offer.companyLogo}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">{offer.company}</p>
                  <p className="text-xs text-slate-400">{offer.location}</p>
                </div>
              </div>
              <h4 className="text-sm font-semibold text-slate-800 mb-2 line-clamp-2 min-h-[2.5rem]">
                {offer.title}
              </h4>
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="flex items-center gap-1 text-xs text-slate-500">
                  <FileText className="w-3.5 h-3.5" />
                  {offer.applicants} candidatures
                </span>
                <span className="text-xs font-semibold text-primary-600">{offer.salary}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
