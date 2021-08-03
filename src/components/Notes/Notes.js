import { useEdit, useNotesData } from "lib/NoteContext";
import styled from "styled-components";

const Notes = () => {
    const { value, loading } = useNotesData();
    return (
        <StyledNotes>
            {!loading &&
                value?.map((note) => <Note key={note.id} note={note} />)}
        </StyledNotes>
    );
};
const Note = ({ note }) => {
    const { setEditData } = useEdit();
    return (
        <StyledNote
            onClick={() => {
                setEditData({
                    ...note,
                    editing: true,
                });
            }}
        >
            <h1>{note?.noteTitle}</h1>
            <p>{note?.noteContent}</p>
        </StyledNote>
    );
};

const StyledNotes = styled.div`
    align-self: center;
    margin-top: 1.2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-gap: 1rem;
    width: 95%;
`;

const StyledNote = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    padding: 0 5px 5px 5px;
    min-height: 10rem;
    max-height: 50vh;
    overflow-y: auto;
    cursor: pointer;
    h1 {
        position: sticky;
        top: 0;
        background-color: white;
        padding-top: 5px;
    }
`;
export default Notes;
