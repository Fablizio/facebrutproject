import { formatDistance } from "date-fns";
import { it } from "date-fns/locale";

const TimeSet = (props) => {
   
    return (
        <>
            {formatDistance(new Date(props.distance),
            new Date(), { addSuffix: true, locale: it })}
        </>
    );
};

export { TimeSet };