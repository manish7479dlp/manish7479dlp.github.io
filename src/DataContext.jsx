import { createContext, useContext, useState } from 'react';
import { data as staticData } from './data';

const DataContext = createContext(staticData);

function loadPreviewData() {
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('preview') === '1') {
            const stored = localStorage.getItem('adminPreviewData');
            if (stored) {
                const parsed = JSON.parse(stored);
                return parsed;
            }
        }
    } catch (e) {
        console.warn('[Preview] Failed to load preview data:', e);
    }
    return staticData;
}

export function DataProvider({ children }) {
    const [data] = useState(loadPreviewData);

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData() {
    return useContext(DataContext);
}

