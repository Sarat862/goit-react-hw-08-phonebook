//MaterialUI
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImportContactsTwoToneIcon from '@mui/icons-material/ImportContactsTwoTone';

export default function HomePage() {
    return (        
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: 20,
            }}
        >
            <ImportContactsTwoToneIcon color='secondary' sx={{width: 350, height: 230}} />
            <Typography
                component="h1"
                variant="h1"
                color="secondary"
            >Welcome to my phonebook
            </Typography>
      </Box>
  )
}
