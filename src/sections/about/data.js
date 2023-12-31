import pooya from '../../assets/images/pooya.png';
import ali from '../../assets/images/ali.png';
import farzad from '../../assets/images/farzad.png';
import shariar from '../../assets/images/shariar.png';
import zahra from '../../assets/images/zahra.png';
import { useTranslation } from 'react-i18next';

function Data() {
    const { t } = useTranslation();
    return [
        {img: ali, title: t('about.ali.name'), desc: t('about.ali.pro'), bgColor: "bg-sky-500"},
        {img: shariar, title: t('about.shahriar.name'), desc: t('about.shahriar.pro'), bgColor: "bg-green-800"},
        {img: zahra, title: t('about.zahra.name'), desc: t('about.zahra.pro'), bgColor: "bg-orange-300"},
        {img: farzad, title: t('about.farzad.name'), desc: t('about.farzad.pro'), bgColor: "bg-blue-800"},
        {img: pooya, title: t('about.pooya.name'), desc: t('about.pooya.pro'), bgColor: "bg-orange-500"},
    ];
}

export default Data;