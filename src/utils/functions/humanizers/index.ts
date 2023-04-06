export function humanizeCPF(value: string): string {
    if (value && value.length) {
        const cpf = value.replace(/[^\d]/g, '');
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
    return '';
}

export function humanizeCNPJ(value: string): string {
    if (value && value.length) {
        const cpf = value.replace(/[^\d]/g, '');
        return cpf.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
    }
    return '';
}

export function humanizeCellphone(value: string): string {
    if (value && value.length > 11) {
        const cellphone = value.replace(/[^\d]/g, '');
        return cellphone.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '($2) $3-$4');
    } if (value && value.length <= 11) {
        const cellphone = value.replace(/[^\d]/g, '');
        return cellphone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }

    return '';
}

export function humanizeSusCard(value: string): string {
    if (value && value.length) {
        const susCard = value.replace(/[^\d]/g, '');
        return susCard.replace(/(\d{3})(\d{4})(\d{4})(\d{4})/, '$1 $2 $3 $4');
    }

    return '';
}

export function humanizeProcedureCode(value: string): string {
    if (value && value.length) {
        const code = value.replace(/[^\d]/g, '');
        return code.replace(/(\d{2})(\d{2})(\d{2})(\d{3})(\d{1})/, '$1.$2.$3.$4-5');
    }

    return '';
}