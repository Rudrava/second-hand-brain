import { Queries } from "lib/firebase";
import { useEdit } from "lib/NoteContext";
import { memo, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import toast from "../../node_modules/react-hot-toast/dist/index";

const NoteInput = ({ ...props }) => {
    const [open, setOpen] = useState(false);

    // init
    useEffect(() => setOpen(false), []);

    const {
        noteData: { editing },
        setEditData,
    } = useEdit();
    useEffect(() => {
        editing && setOpen(true);
    }, [editing]);
    useEffect(() => {
        return !open && setEditData((d) => ({ ...d, editing: false }));
    }, [open, setEditData]);
    return (
        <TextArea open={open} onClick={() => !open && setOpen(true)} {...props}>
            <span>Take a note</span>
            <button id="closeInput" onClick={() => setOpen(false)}>
                X
            </button>
            <NoteInputs setOpen={setOpen} open={open} />
        </TextArea>
    );
};

const NoteInputs = memo(({ setOpen, open }) => {
    const [data, setData] = useState({
        noteTitle: "",
        noteContent: "",
    });

    // init
    useEffect(() => {
        setData({ noteTitle: "", noteContent: "" });
    }, []);

    const {
        noteData: { noteTitle, noteContent, createdAt, updatedAt, id, editing },
    } = useEdit();

    useEffect(() => {
        return setData({ noteTitle, noteContent });
    }, [noteTitle, noteContent]);
    useEffect(() => {
        return !open && setData({ noteTitle: "", noteContent: "" });
    }, [open]);
    const handleChange = useCallback((e) => {
        setData((d) => ({ ...d, [e.target.name]: e.target.value }));
    }, []);
    const handleNoteSubmit = useCallback(() => {
        !editing
            ? Queries.addNote(data)
                  .then((res) => console.log(res))
                  .catch((err) => {
                      toast.error(err.message);
                      console.error(err);
                  })
            : Queries.editNote({ ...data, createdAt, updatedAt, id });
        setData({ noteTitle: "", noteContent: "" });
        setOpen(false);
    }, [data, setOpen, editing, createdAt, id, updatedAt]);

    return (
        <>
            <input
                name="noteTitle"
                id="noteTitle"
                type="text"
                placeholder="Title"
                value={data.noteTitle}
                onChange={handleChange}
                autoComplete="off"
            />
            <textarea
                name="noteContent"
                id="noteContent"
                type="text"
                placeholder="Take a note"
                value={data.noteContent}
                onChange={handleChange}
                autoComplete="off"
            />
            <button onClick={handleNoteSubmit}>
                {editing ? `Edit` : `Add`}
            </button>
        </>
    );
});

const TextArea = styled.div`
    justify-self: center;
    width: 70%;
    height: fit-content;
    display: flex;
    border: 2px solid black;
    border-radius: 15px;
    padding: 5px;
    overflow-x: hidden;
    flex-direction: column;
    ${(props) => (!props.open ? "cursor: pointer" : "cursor: initial")};
    position: relative;
    transition: all 0.4s ease-in-out;
    span {
        display: ${(props) => (props.open ? "none" : "initial")};
    }
    .noteArea {
    }
    input,
    textarea {
        display: ${(props) => (props.open ? "initial" : "none")};

        &::placeholder {
            user-select: none;
        }
        border: none;
        outline: none;
        padding: 0.5rem;
    }
    button {
        position: absolute;
        display: ${(props) => (props.open ? "initial" : "none")};
        bottom: 3%;
        right: 2%;
        padding: 0.5rem;
        border: 0;
        outline: none;
        border-radius: 5px;
        cursor: pointer;
        min-width: 5rem;
        transition: all 0.3s ease-in-out;
        &:hover {
            box-shadow: 0 8px 30px rgba(237, 0, 0, 0.12);
        }
    }
    button#closeInput {
        position: absolute;
        top: 3%;
        right: 2%;
        height: min-content;
        font-size: 18px;
        background-color: transparent;
        text-align: right;
        &:hover {
            box-shadow: none;
        }
    }

    input {
        font-size: 1.5rem;
        border-bottom: 2px solid #1d1d1d3b;
    }
    textarea {
        resize: none;
        height: 200px;
        font-family: Nunito;
        font-size: 1.05rem;
    }
`;

export default NoteInput;
