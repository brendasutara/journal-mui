import { IconButton, Typography } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography>
        Dolore nulla exercitation minim consequat ullamco est non deserunt ex
        aliquip ex. Pariatur officia dolor occaecat reprehenderit nostrud aliqua
        cillum. Eiusmod do laboris ipsum dolor Lorem do aliqua quis enim. Nulla
        aute eiusmod velit ullamco in ut nostrud ex ut incididunt ex ut do.
      </Typography> */}

      <NothingSelectedView />
      {/* <NoteView /> */}

      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
