import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "../components/Button";
import EmployeeCard from "../components/EmployeeCard";
import { useEmployeeContext } from "../context/EmployeeContext";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import ExcelJS from "exceljs";

function Employees() {
  const navigate = useNavigate();
  const { employees, removeEmployee } = useEmployeeContext();

  const handleServiceClick = () => {
    navigate("/services");
  };

  const handleAddEmployeeClick = () => {
    navigate("/addEmployee");
  };

  const handleDownloadPDF = () => {
    const totalPagesExp = "1";
    const columns = [
      { title: "Имя", field: "firstName" },
      { title: "Фамилия", field: "lastName" },
      { title: "Вид работы", field: "typeOfService" },
    ];

    const doc = new jsPDF();

    doc.page = 1;
    doc.text("Table 1", 15, 10);

    autoTable(doc, {
      theme: "grid",
      headStyles: { fontSize: 10 },
      bodyStyles: { fontSize: 8, fontStyle: "italic" },

      columns: columns.map((col) => ({ ...col, dataKey: col.field })),
      body: employees,
    });

    if (typeof doc.putTotalPages === "function") {
      doc.putTotalPages(totalPagesExp);
    }
    doc.save("ReportTable.pdf");
  };

  const handleDownloadExcel = () => {
    handleExport().then((blob) => {
      const url = URL.createObjectURL(blob);
      const downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", url);
      downloadAnchorNode.setAttribute("download", "report.xlsx");
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    });
  };

  const handleExport = async () => {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Table Data");

    const columns = [
      { title: "Имя", field: "firstName" },
      { title: "Фамилия", field: "lastName" },
      { title: "Вид работы", field: "typeOfService" },
    ];

    // Добавляем заголовки столбцов в таблицу
    columns.forEach((col, index) => {
      sheet.getCell(1, index + 1).value = col.title;
    });

    employees.forEach((employee, rowIndex) => {
      sheet.addRow();

      // Заполняем остальные ячейки
      columns.forEach((col, colIndex) => {
        const cellValue = employee[col.field];
        sheet.getCell(rowIndex + 2, colIndex + 1).value = cellValue;
      });
    });

    // Сохраняем в Blob
    const blob = await workbook.xlsx.writeBuffer();
    return new Blob([blob], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
  };

  return (
    <>
      <Header />
      <div className="main">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "3vh",
          }}
        >
          <Button onClick={handleServiceClick}>Список услуг</Button>
          <Button onClick={handleAddEmployeeClick}>Добавить сотрудника</Button>
        </Box>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "3vh" }}
        >
          Работники отдела:
        </Typography>
        <Box style={{ textAlign: "center", marginBottom: "3vh" }}>
          <Button onClick={handleDownloadPDF}>Скачать в PDF</Button>
          <Button onClick={handleDownloadExcel}>Скачать в EXCEL</Button>
        </Box>
        <Grid container spacing={3} justifyContent="center">
          {employees.map((employee, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <EmployeeCard
                employee={employee}
                onClick={() => removeEmployee(index)}
              />
            </Grid>
          ))}
        </Grid>
      </div>
      <Footer />
    </>
  );
}

export default Employees;
