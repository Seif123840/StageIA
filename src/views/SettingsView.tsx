import { useState } from 'react';
import { Bell, Globe, Shield, Mail, Palette, Save } from 'lucide-react';

export default function SettingsView() {
  const [notifications, setNotifications] = useState({
    newApplications: true,
    newOffers: true,
    weeklyReport: false,
    partnerMessages: true,
  });
  const [emailNotifications, setEmailNotifications] = useState(true);

  const toggle = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const sections = [
    { icon: Bell, title: 'Notifications', desc: 'Gérez vos alertes et préférences de notification' },
    { icon: Globe, title: 'Plateforme', desc: 'Nom, logo et identité visuelle de la plateforme' },
    { icon: Shield, title: 'Sécurité', desc: 'Mots de passe, authentification à deux facteurs' },
    { icon: Mail, title: 'Emails', desc: 'Modèles et paramètres des emails automatiques' },
    { icon: Palette, title: 'Apparence', desc: 'Thème, couleurs et personnalisation' },
  ];

  return (
    <div className="p-6 space-y-5 animate-fade-in max-w-3xl">
      {/* Section list */}
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        {sections.map((section, idx) => {
          const Icon = section.icon;
          return (
            <div
              key={section.title}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-slate-50 transition-colors cursor-pointer ${
                idx > 0 ? 'border-t border-slate-50' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">{section.title}</p>
                <p className="text-xs text-slate-400">{section.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Notification preferences */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center">
            <Bell className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-display font-bold text-slate-900">Préférences de notification</h3>
            <p className="text-xs text-slate-400">Choisissez les alertes que vous souhaitez recevoir</p>
          </div>
        </div>

        <div className="space-y-1">
          {[
            { key: 'newApplications' as const, label: 'Nouvelles candidatures', desc: 'Soyez averti à chaque nouvelle candidature' },
            { key: 'newOffers' as const, label: 'Nouvelles offres publiées', desc: 'Notification lors de la publication d\'une offre' },
            { key: 'weeklyReport' as const, label: 'Rapport hebdomadaire', desc: 'Recevez un résumé des activités chaque lundi' },
            { key: 'partnerMessages' as const, label: 'Messages des partenaires', desc: 'Alertes pour les messages des entreprises' },
          ].map((item) => (
            <div key={item.key} className="flex items-center justify-between py-3 px-2 rounded-xl hover:bg-slate-50 transition-colors">
              <div>
                <p className="text-sm font-semibold text-slate-800">{item.label}</p>
                <p className="text-xs text-slate-400">{item.desc}</p>
              </div>
              <button
                onClick={() => toggle(item.key)}
                className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
                  notifications[item.key] ? 'bg-primary-600' : 'bg-slate-200'
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                    notifications[item.key] ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between py-3 px-2 mt-2 border-t border-slate-100">
          <div>
            <p className="text-sm font-semibold text-slate-800">Notifications par email</p>
            <p className="text-xs text-slate-400">Recevoir les notifications sur votre adresse email</p>
          </div>
          <button
            onClick={() => setEmailNotifications(!emailNotifications)}
            className={`relative w-11 h-6 rounded-full transition-colors duration-200 ${
              emailNotifications ? 'bg-primary-600' : 'bg-slate-200'
            }`}
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                emailNotifications ? 'translate-x-5' : 'translate-x-0'
              }`}
            />
          </button>
        </div>

        <div className="flex justify-end mt-5 pt-4 border-t border-slate-100">
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-xl shadow-soft transition-all hover:shadow-glow active:scale-95">
            <Save className="w-4 h-4" />
            Enregistrer les modifications
          </button>
        </div>
      </div>
    </div>
  );
}
