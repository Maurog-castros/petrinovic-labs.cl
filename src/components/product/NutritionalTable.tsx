export interface NutritionalInfo {
    servingSize: string;
    servingsPerContainer: number;
    ingredients: { name: string; amount: string; dailyValue?: string }[];
}

export function NutritionalTable({ data }: { data: NutritionalInfo }) {
    return (
        <div className="border border-gray-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-900 text-sm">
            <div className="bg-gray-100 dark:bg-zinc-800/50 px-4 py-3 font-bold text-lg border-b border-gray-200 dark:border-zinc-800">
                Información Nutricional
            </div>
            <div className="p-4 space-y-2">
                <div className="flex justify-between border-b pb-2 border-gray-100 dark:border-zinc-800">
                    <span className="font-semibold">Porción:</span>
                    <span>{data.servingSize}</span>
                </div>
                <div className="flex justify-between border-b pb-2 border-gray-100 dark:border-zinc-800">
                    <span className="font-semibold">Porciones por envase:</span>
                    <span>{data.servingsPerContainer}</span>
                </div>
                <div className="pt-2">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-black/10 dark:border-white/10">
                                <th className="py-1 font-semibold">Ingrediente</th>
                                <th className="py-1 font-semibold text-right">Cantidad</th>
                                <th className="py-1 font-semibold text-right text-xs text-gray-500">
                                    %VD*
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.ingredients.map((ing, i) => (
                                <tr key={i} className="border-b border-gray-50 dark:border-white/5 last:border-0">
                                    <td className="py-1">{ing.name}</td>
                                    <td className="py-1 text-right font-mono">{ing.amount}</td>
                                    <td className="py-1 text-right text-xs text-gray-400">
                                        {ing.dailyValue || "-"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="mt-2 text-[10px] text-gray-500">
                        * %VD: Porcentaje de Valor Diario basado en una dieta de 2.000 kcal.
                    </p>
                </div>
            </div>
        </div>
    );
}
