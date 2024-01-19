import React, { createContext, useState } from 'react';

export type DataContextDefaultType = {
    html: string;
    css: string;
    js: string;
    setHtml: (_value: string) => void
    setCss: (_value: string) => void
    setJs: (_value: string) => void
}

type Props = {
    children?: React.ReactNode
};

const DataContextDefault = {
    html: '',
    css: '',
    js: '',
    setHtml: () => {},
    setCss: () => {},
    setJs: () => {},
}
export const DataContext = createContext<DataContextDefaultType>(DataContextDefault);

const DataProvider: React.FC<Props> = ({ children }) => {
    const [html, setHtml] = useState<string>('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');

    return (
        <DataContext.Provider
            value={{
                html,
                setHtml: (_html: string) => setHtml(_html),
                css,
                setCss: (_html: string) => setCss(_html),
                js,
                setJs: (_html: string) => setJs(_html),
            }}
        >
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider;
