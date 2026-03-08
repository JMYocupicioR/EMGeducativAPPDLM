import { type DatosEvaluacion } from '../plexoBraquial';

interface Props {
  datos: DatosEvaluacion;
  onUpdate: (reflejo: 'bicipital' | 'braquiorradial' | 'tricipital', valor: 'normal' | 'disminuido' | 'ausente') => void;
}

const reflexos = [
  { key: 'bicipital' as const, label: 'Reflejo Bicipital', raiz: 'C5-C6', desc: 'Se explora golpeando el tendón del bíceps en el pliegue del codo. Ausente/disminuido sugiere lesión C5-C6 o tronco superior.' },
  { key: 'braquiorradial' as const, label: 'Reflejo Braquiorradial', raiz: 'C5-C6', desc: 'Se explora golpeando el tendón del braquiorradial en el radio distal. Ausente sugiere lesión C5-C6 o fascículo posterior.' },
  { key: 'tricipital' as const, label: 'Reflejo Tricipital', raiz: 'C7', desc: 'Se explora golpeando el tendón del tríceps por encima del olécranon. Ausente sugiere lesión de C7 o fascículo posterior.' },
];

const opciones: { value: 'normal' | 'disminuido' | 'ausente'; label: string; color: string }[] = [
  { value: 'normal', label: 'Normal', color: 'bg-emerald-500 text-white' },
  { value: 'disminuido', label: 'Disminuido', color: 'bg-amber-500 text-white' },
  { value: 'ausente', label: 'Ausente', color: 'bg-red-500 text-white' },
];

export default function StepReflexes({ datos, onUpdate }: Props) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">🔨</span>
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Reflejos Osteotendinosos</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Evalúe el estado de los reflejos. Por defecto están en normal.</p>
        </div>
      </div>

      <div className="space-y-4">
        {reflexos.map(r => (
          <div key={r.key} className="rounded-xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/30 p-5">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-slate-800 dark:text-white">{r.label}</h4>
                <span className="text-xs text-blue-500 dark:text-blue-400 font-mono">{r.raiz}</span>
              </div>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{r.desc}</p>

            <div className="flex gap-2">
              {opciones.map(o => (
                <button
                  key={o.value}
                  onClick={() => onUpdate(r.key, o.value)}
                  className={`flex-1 px-3 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 border-2 ${
                    datos.reflejos[r.key] === o.value
                      ? `${o.color} border-transparent shadow-md scale-105`
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 border-transparent hover:border-slate-300 dark:hover:border-slate-500'
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
