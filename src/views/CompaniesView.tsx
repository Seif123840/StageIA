import { useState, useMemo } from 'react';
import {
  Search,
  MapPin,
  Mail,
  Star,
  Briefcase,
  UserCheck,
  Plus,
  Building2,
} from 'lucide-react';
import {
  companies,
  partnershipColors,
  type Company,
} from '@/data/mockData';

export default function CompaniesView() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return companies.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.industry.toLowerCase().includes(search.toLowerCase()) ||
      c.location.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="p-6 space-y-5 animate-fade-in">
      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
        <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-xl border border-slate-200 flex-1 max-w-md focus-within:border-primary-300 transition-colors">
          <Search className="w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une entreprise, secteur, ville..."
            className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none flex-1"
          />
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-xl shadow-soft transition-all hover:shadow-glow active:scale-95">
          <Plus className="w-4 h-4" strokeWidth={2.5} />
          <span className="hidden sm:inline">Ajouter une entreprise</span>
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
            <Building2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-slate-900">{companies.length}</p>
            <p className="text-xs text-slate-400">Entreprises partenaires</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center">
            <Briefcase className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-slate-900">
              {companies.reduce((sum, c) => sum + c.activeOffers, 0)}
            </p>
            <p className="text-xs text-slate-400">Offres actives au total</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-slate-900">
              {companies.reduce((sum, c) => sum + c.totalHires, 0)}
            </p>
            <p className="text-xs text-slate-400">Étudiants placés</p>
          </div>
        </div>
      </div>

      {/* Companies grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((company: Company) => (
          <div
            key={company.id}
            className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-soft hover:border-primary-200 transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center text-lg font-bold text-primary-700 group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <div>
                  <h3 className="font-display font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs text-slate-400">{company.industry}</p>
                </div>
              </div>
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${partnershipColors[company.partnership]}`}>
                {company.partnership}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin className="w-4 h-4 text-slate-400" />
                {company.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Mail className="w-4 h-4 text-slate-400" />
                {company.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <UserCheck className="w-4 h-4 text-slate-400" />
                Contact : {company.contact}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-lg font-bold text-slate-900">{company.activeOffers}</p>
                  <p className="text-xs text-slate-400">Offres actives</p>
                </div>
                <div className="w-px h-8 bg-slate-100" />
                <div>
                  <p className="text-lg font-bold text-slate-900">{company.totalHires}</p>
                  <p className="text-xs text-slate-400">Embauches</p>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span className="text-sm font-semibold text-slate-700">{company.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
            <Building2 className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="font-display font-semibold text-slate-700 text-lg">Aucune entreprise trouvée</h3>
          <p className="text-sm text-slate-400 mt-1">Essayez d'ajuster votre recherche.</p>
        </div>
      )}
    </div>
  );
}
