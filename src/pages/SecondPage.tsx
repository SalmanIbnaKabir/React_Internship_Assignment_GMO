import { Stack } from "@mui/material";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MuiDataGrid from "../components/MuiDataGrid";
import DepartmentList from "../components/MuiDepartmentList";

interface IUserData {
  name: string;
  phoneNumber: string;
  email: string;
}

const SecondPage = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    const storedData = localStorage.getItem("userFormData");

    if (storedData) {
      const userData: IUserData | null = JSON.parse(storedData);

      if (!userData?.name || !userData?.email || !userData?.phoneNumber) {
        navigate("/", { state: { path: pathname }, replace: true });
        alert("some Data is Messing (name | email | phoneNumber");
      }
    } else {
      navigate("/", { state: { path: pathname }, replace: true });
      alert("Enter Your Name, Phone Number, Email Address");
    }
  }, [pathname, navigate]);

  return (
    <Stack spacing={2} sx={{ marginBottom: 8 }}>
      <Stack>
        <MuiDataGrid />
      </Stack>
      <Stack>
        <DepartmentList />
      </Stack>
    </Stack>
  );
};

export default SecondPage;
