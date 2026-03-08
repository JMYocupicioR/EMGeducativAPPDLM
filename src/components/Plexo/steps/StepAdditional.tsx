import { OPCIONES_CONTEXTO_CLINICO, OPCIONES_FASE_EVOLUTIVA, OPCIONES_PATRON_EVOLUCION, OPCIONES_TIPO_PLEXO, type DatosEvaluacion } from '../plexoBraquial';

interface Props {
  datos: DatosEvaluacion;
  updateInfo: (campo: keyof DatosEvaluacion['informacionAdicional'], valor: any) => void;
  updateContexto: (contexto: any) => void;
  updateFase: (fase: any) => void;
  updatePatron: (patron: any) => void;
  updateTiempo: (dias: number) => void;
}

function SelectField({ label, value, options, onChange, placeholder }: { label: string; value: any; options: { label: string; value: any }[]; onChange: (v: any) => void; placeholder: string }) {
  return (
    <div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">{label}</label>
      <select
        value={value || ''}
        onChange={e => onChange(e.target.value || undefined)}
        className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
      >
        <option value="">{placeholder}</option>
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

export default function StepAdditional({ datos, updateInfo, updateContexto, updateFase, updatePatron, updateTiempo }: Props) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">📋</span>
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Información Adicional</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Contexto clínico, tiempo de evolución y tipo de plexo. Mejoran la precisión diagnóstica.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField label="Contexto Clínico" value={datos.informacionAdicional.contextoClinico} options={OPCIONES_CONTEXTO_CLINICO} onChange={updateContexto} placeholder="Seleccionar contexto..." />
        <SelectField label="Tipo de Plexo" value={datos.informacionAdicional.tipoPlexo} options={OPCIONES_TIPO_PLEXO} onChange={v => updateInfo('tipoPlexo', v || 'normal')} placeholder="Normal" />
        <SelectField label="Fase Evolutiva" value={datos.informacionAdicional.faseEvolutiva} options={OPCIONES_FASE_EVOLUTIVA} onChange={updateFase} placeholder="Seleccionar fase..." />
        <SelectField label="Patrón de Evolución" value={datos.informacionAdicional.patronEvolucion} options={OPCIONES_PATRON_EVOLUCION} onChange={updatePatron} placeholder="Seleccionar patrón..." />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Tiempo de Evolución (días)</label>
          <input
            type="number"
            min={0}
            value={datos.informacionAdicional.tiempoEvolucion ?? ''}
            onChange={e => updateTiempo(parseInt(e.target.value) || 0)}
            placeholder="Ej: 14"
            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">Mecanismo / Evolución</label>
          <input
            type="text"
            value={datos.informacionAdicional.mecanismo}
            onChange={e => updateInfo('mecanismo', e.target.value)}
            placeholder="Ej: Accidente de motocicleta"
            className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all"
          />
        </div>
      </div>
    </div>
  );
}
