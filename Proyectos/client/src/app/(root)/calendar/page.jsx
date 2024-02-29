'use client'
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { Fragment, useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';


const CalendarPage = () => {

    const [value, setValue] = useState(dayjs(new Date()));

    return (
        <Fragment>
            <LocalizationProvider dateAdapter={AdapterDayjs}>

                <DateTimePicker
                    label="Controlled picker"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                />
            </LocalizationProvider>

        </Fragment>
    )
}

export default CalendarPage;