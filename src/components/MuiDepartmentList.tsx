import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemText,
  Checkbox,
  Collapse,
  ListItemIcon,
  Container,
  Typography,
} from "@mui/material";

interface Department {
  department: string;
  sub_departments: string[];
}

const data: Department[] = [
  {
    department: "customer_service",
    sub_departments: ["support", "customer_success"],
  },
  {
    department: "design",
    sub_departments: ["graphic_design", "product_design", "web_design"],
  },
];

const DepartmentList: React.FC = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);

  const handleToggle = (item: string) => () => {
    const currentIndex = selected.indexOf(item);
    const newSelected = [...selected];

    if (currentIndex === -1) {
      newSelected.push(item);
    } else {
      newSelected.splice(currentIndex, 1);
    }

    setSelected(newSelected);
  };

  const handleExpand = (item: string) => () => {
    setExpanded((prevExpanded) => (prevExpanded === item ? null : item));
  };

  const isSelected = (item: string) => selected.indexOf(item) !== -1;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Select Department
      </Typography>
      <List>
        {data.map((department) => (
          <React.Fragment key={department.department}>
            <ListItemButton
              onClick={handleExpand(department.department)}
              selected={isSelected(department.department)}
            >
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={isSelected(department.department)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": department.department }}
                  onClick={handleToggle(department.department)}
                />
              </ListItemIcon>
              <ListItemText primary={department.department} />
              {expanded === department.department ? (
                <span>-</span>
              ) : (
                <span>+</span>
              )}
            </ListItemButton>
            <Collapse
              in={expanded === department.department}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {department.sub_departments.map((subDepartment) => (
                  <ListItemButton
                    key={subDepartment}
                    onClick={handleToggle(subDepartment)}
                    selected={isSelected(subDepartment)}
                  >
                    <ListItemIcon sx={{ paddingLeft: 4 }}>
                      <Checkbox
                        edge="start"
                        checked={isSelected(subDepartment)}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{
                          "aria-labelledby": subDepartment,
                        }}
                        onClick={handleToggle(subDepartment)}
                      />
                    </ListItemIcon>
                    <ListItemText primary={subDepartment} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Container>
  );
};

export default DepartmentList;
