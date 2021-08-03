import { createContext, useContext, useState } from "react";
import { Ref } from "lib/firebase";
import { useCollection } from "react-firebase-hooks/firestore";

const NoteContext = createContext({ value: [], loading: false, error: false });
const EditNoteContext = createContext(null);

function NoteProvider({ children }) {
    const [value, loading, error] = useCollection(
        Ref.notes().orderBy("createdAt"),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const [editData, setEditData] = useState({
        // adds the note data here on set Methd
        editing: false,
    });

    return (
        <EditNoteContext.Provider value={{ noteData: editData, setEditData }}>
            <NoteContext.Provider
                value={{
                    value: value?.docs?.map((doc) => ({
                        ...doc.data(),
                        id: doc.id,
                    })),
                    loading,
                    error,
                }}
            >
                {children}
            </NoteContext.Provider>
        </EditNoteContext.Provider>
    );
}

export const useNotesData = () => useContext(NoteContext);
export const useEdit = () => useContext(EditNoteContext);

export default NoteProvider;
