import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { Grid, IconButton } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import CheckInModal from './checkInModal';
import HotelIcon from '@mui/icons-material/Hotel';
import BedIcon from '@mui/icons-material/Bed';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function ReadyRoom(props) {
    const { id } = props
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openAnchor = Boolean(anchorEl);

    const handleClickAnchor = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseAnchor = () => {
        setAnchorEl(null);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleSubmit = () => {
        setOpen(false);
    };

    console.log("abc")
    return (
        <React.Fragment>
            <CheckInModal open={open} id={id} handleSubmit={handleSubmit} handleClose={handleClose} />
            <Card sx={props.styleZoom}>
                <CardActionArea onClick={handleClickAnchor}>
                    <CardContent style={{ backgroundColor: "green" }} sx={props.styleZoom}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <BedIcon fontSize='large' style={{ fill: "white", alignContent: 'center', margin: 0, position: 'absolute', top: '40%' }} />
                            </Grid>
                            <Grid item xs={9}>
                                <Typography color="white" gutterBottom variant="h5" component="div">
                                    10{id}
                                </Typography>
                                <Typography color="white" variant="body2" >
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                </Typography>

                            </Grid>
                        </Grid>
                    </CardContent>

                </CardActionArea>

            </Card>
            <Menu
                anchorEl={anchorEl}
                open={openAnchor}
                onClose={handleCloseAnchor}
                onClick={handleCloseAnchor}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 10.5,
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            left: 10,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                anchorOrigin={{
                    vertical: "center",
                    horizontal: "right",
                }}
                transformOrigin={{ horizontal: "right", vertical: "center" }}
            >
                <MenuItem onClick={handleClickOpen}>
                    <HotelIcon /> <Typography variant="h7">Kh??ch thu?? ph??ng</Typography>
                </MenuItem>
                <MenuItem disabled>
                    <HotelIcon /><Typography variant="h7">Tr??? ph??ng</Typography>
                </MenuItem>
                <MenuItem disabled>
                    <HotelIcon /> <Typography variant="h7">C???p nh???t d???ch v???</Typography>
                </MenuItem>
                <MenuItem disabled>
                    <HotelIcon /> <Typography variant="h7">?????i ph??ng</Typography>
                </MenuItem>
                <MenuItem>
                    <HotelIcon /><Typography variant="h7">D???n ph??ng</Typography>
                </MenuItem>
                <MenuItem>
                    <HotelIcon /><Typography variant="h7">S???a ph??ng</Typography>
                </MenuItem>
            </Menu>

        </React.Fragment >



    );
}
function areEqual(prevProps, nextProps) {

    if (JSON.stringify(prevProps.styleZoom) === JSON.stringify(nextProps.styleZoom)) {
        // don't re-render/update
        return true
    } else return false
}

export default React.memo(ReadyRoom, areEqual);