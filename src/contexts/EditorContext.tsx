import { EditiorActions } from '@/hooks/useEditor';
import { createContext, useContext } from 'react';

export const EditiorContext = createContext<EditiorActions | undefined>(undefined);

export const useEditorContext = () => {
	const context = useContext(EditiorContext);
	if (!context) {
		throw new Error('useEditorContext must be used within a EditorContextProvider');
	}
	return context;
};
