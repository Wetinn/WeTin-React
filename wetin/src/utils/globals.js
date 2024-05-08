export const inputSomenteTexto = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-zÀ-ú\s]/g, "");
};

export const inputSomenteNumero = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
};

export const inputSemCaracteresEspeciais = (e) => {
    e.target.value = e.target.value.replace(/[^A-Za-zÀ-ú0-9\s]/g, "");
};