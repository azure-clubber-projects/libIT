import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import React from "react"
import { Typography } from '@mui/material';

const Input = styled('input')({
    display: 'none',
});

export default function UploadButton({children, onFileChangedHandler, ...props}) {
    return (
        <label >
            <Input id="contained-button-file" type="file" onChange={(e)=>{
                e.preventDefault();
                const theFile = e.target.files[0]
                onFileChangedHandler(theFile);
            }} />
            <Button {...props}  component="span">
                <Typography>
                    {children}
                </Typography>
            </Button>
        </label>
    );
}