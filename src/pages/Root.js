import NoteInput from "components/NoteInput";
import Notes from "components/Notes/Notes";
import { PageFlex } from "components/PageComp.sc";
import NoteProvider from "lib/NoteContext";

const Root = () => {
    return (
        <NoteProvider>
            <PageFlex>
                <NoteInput style={{ alignSelf: "center" }} />
                <Notes />
            </PageFlex>
        </NoteProvider>
    );
};

export default Root;
