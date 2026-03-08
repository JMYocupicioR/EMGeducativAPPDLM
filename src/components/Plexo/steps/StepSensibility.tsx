import { AREAS_SENSIBILIDAD, type DatosEvaluacion } from '../plexoBraquial';

interface Props {
  datos: DatosEvaluacion;
  onUpdate: (areas: string[]) => void;
}

const areaGroups: Record<string, string[]> = {
  'Territorios Nerviosos': AREAS_SENSIBILIDAD.filter(a => a.includes('(')),
  'Dermatomas': AREAS_SENSIBILIDAD.filter(a => a.includes('Dermatoma')),
};

export default function StepSensibility({ datos, onUpdate }: Props) {
  const toggle = (area: string) => {
    if (datos.areasSeleccionadas.includes(area)) {
      onUpdate(datos.areasSeleccionadas.filter(x => x !== area));
    } else {
      onUpdate([...datos.areasSeleccionadas, area]);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl">🖐️</span>
        <div>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Áreas de Sensibilidad Alterada</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">Seleccione las zonas con alteración sensitiva. Ayudan a localizar el nivel de lesión.</p>
        </div>
      </div>

      {Object.entries(areaGroups).map(([grupo, areas]) => (
        <div key={grupo} className="rounded-xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/30 overflow-hidden">
          <div className="px-4 py-3 bg-slate-50 dark:bg-slate-700/30 border-b border-slate-200/50 dark:border-slate-700/30">
            <h4 className="font-semibold text-slate-700 dark:text-slate-200 text-sm">{grupo}</h4>
          </div>
          <div className="p-3 flex flex-wrap gap-2">
            {areas.map(area => {
              const selected = datos.areasSeleccionadas.includes(area);
              return (
                <button
                  key={area}
                  onClick={() => toggle(area)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                    selected
                      ? 'bg-blue-500 text-white border-blue-600 shadow-md'
                      : 'bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                >
                  {area}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {datos.areasSeleccionadas.length > 0 && (
        <p className="text-sm text-blue-600 dark:text-blue-400">
          ✓ {datos.areasSeleccionadas.length} área{datos.areasSeleccionadas.length !== 1 ? 's' : ''} seleccionada{datos.areasSeleccionadas.length !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  );
}
