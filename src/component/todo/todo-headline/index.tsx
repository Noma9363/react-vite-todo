interface TodoHeadlineProps{
    className?: string;
}

export const TodoHeadline = ({...props}:TodoHeadlineProps) =>{
    // show the current date
    const getCurrentDate = new Intl.DateTimeFormat(
        "ko",
        {
            year: "numeric",
            month: "numeric",
            day: "numeric",
            weekday: "long"
        }
    ).format(new Date());


    return(
        <div className={`"todo__header ${props.className}`}>
            <h1 className="todo__header__h1">
                Hey! ToDay Is...!
            </h1>
            <h2 className="todo__header__h2">
                {getCurrentDate}
            </h2>
        </div>
    )
}
