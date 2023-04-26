import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale'

export const dateFormat = (dateString: string) => {
    const date = new Date(dateString)
    if (!isValidDate(date)) {
        return ''
    }
    return format(date, 'dd MMMM YYY', {locale: ptBR})
}

function isValidDate(date) {
  return !Number.isNaN(date.getTime());
}