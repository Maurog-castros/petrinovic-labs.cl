export function validateRUT(rut: string): boolean {
    if (!rut || typeof rut !== "string") return false;

    // Clean format
    const cleanRut = rut.replace(/[^0-9kK]/g, "");
    if (cleanRut.length < 2) return false;

    const body = cleanRut.slice(0, -1);
    const dv = cleanRut.slice(-1).toUpperCase();

    let sum = 0;
    let multiplier = 2;

    for (let i = body.length - 1; i >= 0; i--) {
        sum += parseInt(body[i]) * multiplier;
        multiplier = multiplier === 7 ? 2 : multiplier + 1;
    }

    const mod = 11 - (sum % 11);
    const expectedDv =
        mod === 11 ? "0" : mod === 10 ? "K" : mod.toString();

    return dv === expectedDv;
}

export function formatRUT(rut: string): string {
    const cleanRut = rut.replace(/[^0-9kK]/g, "");
    if (cleanRut.length < 2) return cleanRut;

    const body = cleanRut.slice(0, -1);
    const dv = cleanRut.slice(-1).toUpperCase();

    return `${body.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}-${dv}`;
}
