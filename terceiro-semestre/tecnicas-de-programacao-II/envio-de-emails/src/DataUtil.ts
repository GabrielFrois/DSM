class DataUtil {
    static isBissexto(ano: number) {
        if (ano % 400 == 0) {
            return true;
        } else if (ano % 4 == 0 && ano % 100 != 0) {
            return true;
        }
        return false;
    }

    static mesExtenso(mes: number) {
        const meses = [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ];
        if (mes < 1 || mes > 12) {
            throw new Error('Mês inválido. Deve estar entre 1 e 12.');
        }
        return meses[mes - 1];
    }
}

export default DataUtil;