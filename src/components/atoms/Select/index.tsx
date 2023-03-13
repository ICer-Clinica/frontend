import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface SelectProps {
  label: string;
  values: any;
  name: string;
  onChange: (event: any) => void;
}

export default function SelectInput({
  label = "aaa",
  values,
  name,
  onChange,
}: SelectProps) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          //   value={age}
          label={label}
          onChange={onChange}
          name={name}
          sx={{
            borderRadius: "20px",
          }}
        >
          {values.map((item: any, index: number) => (
            <MenuItem value={item.value} key={index}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
