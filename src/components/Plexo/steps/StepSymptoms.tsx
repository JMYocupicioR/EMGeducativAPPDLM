import { SINTOMAS_CLINICOS, type DatosEvaluacion } from '../plexoBraquial';
import { motion } from 'framer-motion';

interface Props {
  datos: DatosEvaluacion;
  onUpdate: (sintomas: string[]) => void;
}

const sintomaInfo: Record<string, { icon: string; desc: string }> = {
  'Dolor Neurítico': { icon: '🔥', desc: 'Dolor profundo, urente o lancinante que sigue un trayecto nervioso. Sugiere irritación activa de la raíz o nervio.' },
  'Parestesias': { icon: '✨', desc: 'Hormigueo, adormecimiento o sensaciones anormales en el territorio del nervio afectado.' },
  'Signo de Horner': { icon: '👁️', desc: 'Miosis, ptosis y anhidrosis ipsilateral. Indica lesión de fibras simpáticas (T1). Muy específico para lesiones del tronco inferior o raíz T1.' },
};

export default function StepSymptoms({ datos, onUpdate }: Props) {
  const toggle = (s: string) => {
    if (datos.sintomasSeleccionados.includes(s)) {
      onUpdate(datos.sintomasSeleccionados.filter(x => x !== s));
    } else {
      onUpdate([...datos.sintomasSeleccionados, s]);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">🩹</span>
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Síntomas Clínicos</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Seleccione los síntomas presentes. Todos son opcionales.</p>
        </div>
      </div>

      <div className="space-y-3">
        {SINTOMAS_CLINICOS.map(s => {
          const selected = datos.sintomasSeleccionados.includes(s);
          const info = sintomaInfo[s];

          return (
            <motion.button
              key={s}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggle(s)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ${
                selected
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-md'
                  : 'border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/40 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl mt-0.5">{info?.icon || '🔵'}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-800 dark:text-white">{s}</span>
                    {selected && <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">✓</span>}
                  </div>
                  {info && <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{info.desc}</p>}
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
