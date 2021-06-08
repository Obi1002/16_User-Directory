import React from 'react';
import './app.css';
import Header from './components/header';
// import EmployeeTable from './components/Table';
import EmployeeTable from './components/employeeTable';

// material imports
import Container from '@material-ui/core/Container';

function App() {
    return (
        <>
            <Header />
            <Container fixed>
                <EmployeeTable />
            </Container>
        </>
    );
}

export default App;