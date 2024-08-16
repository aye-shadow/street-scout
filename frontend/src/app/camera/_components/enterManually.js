import React, { useState } from "react";
import { TextField, Box, IconButton, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { styled } from "@mui/system";

const GreenTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "rgb(var(--lightergreen))",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "rgb(var(--lightergreen))",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "rgb(var(--lightergreen))",
    },
    "&.Mui-focused fieldset": {
      borderColor: "rgb(var(--lightergreen))",
    },
  },
});

export default function EnterManually() {
  const [fields, setFields] = useState([{ item: "", amount: "" }]);

  const handleAddField = () => {
    setFields([...fields, { item: "", amount: "" }]);
  };

  const handleChange = (index, event) => {
    const values = [...fields];
    values[index][event.target.name] = event.target.value;
    setFields(values);
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%" }}
    >
      {fields.map((field, index) => (
        <Box key={index} sx={{ display: "flex", gap: 1 }}>
          <GreenTextField
            label="Item"
            size="small"
            name="item"
            value={field.item}
            onChange={(event) => handleChange(index, event)}
            fullWidth
          />
          <GreenTextField
            label="Amount (in Rs.)"
            name="amount"
            size="small"
            value={field.amount}
            onChange={(event) => handleChange(index, event)}
            fullWidth
            type="number"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Rs.</InputAdornment>
              ),
            }}
          />
        </Box>
      ))}
      <IconButton
        color="primary"
        onClick={handleAddField}
        sx={{
          width: "fit-content",
          margin: "auto",
          backgroundColor: "rgb(var(--lightergreen), 0.1)",
          color: "rgb(var(--lightergreen))",
          "&:hover": {
            backgroundColor: "rgba(var(--lightergreen), 0.2)",
          },
        }}
      >
        <AddIcon />
      </IconButton>
    </Box>
  );
}
