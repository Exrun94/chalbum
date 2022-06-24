export default function classnames(...names: any[]) {
    return names.filter(Boolean).join(' ');
}