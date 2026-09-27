import { useState, useMemo } from 'react';
import {
  Search,
  GraduationCap,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  Clock,
  Users,
} from 'lucide-react';
import { applications } from '@/data/mockData';

interface Student {
  id: string;
  name: string;
  avatar: string;
  level: string;
  email: string;
  phone: string;
  appliedCount: number;
  acceptedCount: number;
  pendingCount: number;
  status: 'placed' | 'searching' | 'inactive';
}

const studentList: Student[] = Array.from(new Set(applications.map((a) => a.studentName))).map((name, idx) => {
  const studentApps = applications.filter((a) => a.studentName === name);
  const avatar = studentApps[0].studentAvatar;
  const level = studentApps[0].level;
  return {
    id: `STU-${String(idx + 1).padStart(3, '0')}`,
    name,
    avatar,
    level,
    email: `${name.toLowerCase().replace(/\s/g, '.')}@ecole.fr`,
    phone: `06 ${Math.floor(10 + Math.random() * 89)} ${Math.floor(10 + Math.random() * 89)} ${Math.floor(10 + Math.random() * 89)} ${Math.floor(10 + Math.random() * 89)}`,
    appliedCount: studentApps.length,
    acceptedCount: studentApps.filter((a) => a.status === 'accepted').length,
    pendingCount: studentApps.filter((a) => a.status === 'pending' || a.status === 'reviewing').length,
    status: studentApps.some((a) => a.status === 'accepted') ? 'placed' : 'searching',
  };
});

const statusConfig: Record<Student['status'], { label: string; color: string; dot: string }> = {
  placed: { label: 'Placé', color: 'bg-emerald-50 text-emerald-700 border-emerald-200', dot: 'bg-emerald-500' },
  searching: { label: 'En recherche', color: 'bg-amber-50 text-amber-700 border-amber-200', dot: 'bg-amber-500' },
  inactive: { label: 'Inactif', color: 'bg-slate-100 text-slate-600 border-slate-200', dot: 'bg-slate-400' },
};

export default function StudentsView() {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return studentList.filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.level.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const placedCount = studentList.filter((s) => s.status === 'placed').length;
  const searchingCount = studentList.filter((s) => s.status === 'searching').length;

  return (
    <div className="p-6 space-y-5 animate-fade-in">
      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-slate-900">{studentList.length}</p>
            <p className="text-xs text-slate-400">Étudiants inscrits</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-slate-900">{placedCount}</p>
            <p className="text-xs text-slate-400">Étudiants placés</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-2xl font-display font-bold text-slate-900">{searchingCount}</p>
            <p className="text-xs text-slate-400">En recherche active</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded-xl border border-slate-200 max-w-md focus-within:border-primary-300 transition-colors">
        <Search className="w-4 h-4 text-slate-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Rechercher un étudiant, un niveau..."
          className="bg-transparent text-sm text-slate-700 placeholder-slate-400 outline-none flex-1"
        />
      </div>

      {/* Student cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((student) => {
          const config = statusConfig[student.status];
          return (
            <div
              key={student.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-soft hover:border-primary-200 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-400 flex items-center justify-center text-white text-sm font-semibold group-hover:scale-110 transition-transform duration-300">
                    {student.avatar}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 group-hover:text-primary-700 transition-colors">
                      {student.name}
                    </h3>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      {student.level}
                    </p>
                  </div>
                </div>
                <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-lg border ${config.color}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
                  {config.label}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Mail className="w-4 h-4 text-slate-400" />
                  <span className="truncate">{student.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500">
                  <Phone className="w-4 h-4 text-slate-400" />
                  {student.phone}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-slate-400" />
                    <span className="text-sm font-semibold text-slate-700">{student.appliedCount}</span>
                    <span className="text-xs text-slate-400">candidatures</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs">
                  <span className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {student.acceptedCount}
                  </span>
                  <span className="flex items-center gap-1 text-amber-600">
                    <Clock className="w-3.5 h-3.5" />
                    {student.pendingCount}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mb-4">
            <Users className="w-8 h-8 text-slate-300" />
          </div>
          <h3 className="font-display font-semibold text-slate-700 text-lg">Aucun étudiant trouvé</h3>
          <p className="text-sm text-slate-400 mt-1">Essayez d'ajuster votre recherche.</p>
        </div>
      )}
    </div>
  );
}
