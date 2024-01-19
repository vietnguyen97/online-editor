export type EditorProps = {
    heading: string;
    icon: string;
    color: string;
    value: string;
    language: string;
    onChange: (_value: string) => void;
}