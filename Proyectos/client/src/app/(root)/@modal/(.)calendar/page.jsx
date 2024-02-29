import InterceptionModal from "@/components/maps/modal/InterceptionModal";
import { Fragment } from "react";
import CalendarPage from "../../calendar/page";



const CalendarInterceptionPage = () => {

    return (
        <Fragment>
            <InterceptionModal>
                <CalendarPage />
            </InterceptionModal>

        </Fragment>
    )
}

export default CalendarInterceptionPage;