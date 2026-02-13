import { AlertTriangle } from "lucide-react";

export function WarningLabel({ warnings }: { warnings: string[] }) {
    if (!warnings || warnings.length === 0) return null;

    return (
        <div className="mt-6 rounded-md bg-yellow-50 dark:bg-yellow-900/10 p-4 border border-yellow-200 dark:border-yellow-900/30">
            <div className="flex">
                <div className="flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 dark:text-yellow-500" aria-hidden="true" />
                </div>
                <div className="ml-3">
                    <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-400">Advertencias</h3>
                    <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                        <ul role="list" className="list-disc space-y-1 pl-5">
                            {warnings.map((warning, index) => (
                                <li key={index}>{warning}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="mt-3 text-xs text-yellow-600/80 dark:text-yellow-500/60">
                        Su uso no es recomendable para consumo por menores de 8 años, embarazadas y nodrizas, salvo indicación profesional competente y no reemplaza a una alimentación balanceada.
                    </p>
                </div>
            </div>
        </div>
    );
}
