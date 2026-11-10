const DayCards = ({ completed = [], handleComplete = () => {} }) => {
  const safeCompleted = Array.isArray(completed) ? completed : []

  const days = [
    {
      day: "DAY 01",
      title: "Saturday",
      theme: "A Productive Beginning",
      icon: "📚",
      color: "saturday",
      tasks: [
        "Wake up in the morning",
        "Morning Prayer",
        "Have Breakfast",
        "Complete All Assigned Tasks",
        "Finish Pending V2 Work"
      ]
    },

    {
      day: "DAY 02",
      title: "Sunday",
      theme: "A Day of Family Happiness",
      icon: "🎉",
      color: "sunday",
      tasks: [
        { time: "MORNING", activity: "Get ready and go to Church." },
        { time: "1:00 PM", activity: "Return home from Church." },
        { time: "LUNCH", activity: "Enjoy a delicious non-veg meal." },
        { time: "SWEET TIME", activity: "Treat yourself to a variety of sweets." },
        { time: "DINNER", activity: "Enjoy delicious non-veg biryani." },
        { time: "EVENING", activity: "Spend happy moments with family." },
        { time: "CELEBRATION", activity: "Enjoy festive fireworks safely with family." },
        { time: "NIGHT", activity: "Relax and enjoy more family time." }
      ]
    },

    {
      day: "DAY 03",
      title: "Monday",
      theme: "A Fresh Learning Start",
      icon: "🎯",
      color: "monday",
      tasks: [
        "Wake up in the morning",
        "Morning Prayer",
        "Have Breakfast",
        "Prepare for Test",
        "Complete Assigned Tasks"
      ]
    }
  ];

  return (
    <section className="plans-section" id="plans">

      <div className="container">

        <div className="text-center mb-5">

          <p className="section-label">MY THREE DAYS</p>

          <h2>Three Days of Joy, Love &amp; Memories</h2>

          <p>Small moments create beautiful memories.</p>

        </div>

        <div className="row g-4">

          {days.map((day) => {

            const total = day.tasks.length;

            const count = day.tasks.filter(task =>
              safeCompleted.includes(typeof task === "string" ? task : task.activity)
            ).length;

            const percentage = total === 0 ? 0 : Math.round((count / total) * 100);

            return (

              <div className="col-lg-4 col-md-6" key={day.day}>

                <div className="day-card h-100">

                  <div className={`day-header ${day.color}`}>

                    <h5>{day.day}</h5>

                    <h2>{day.icon} {day.title}</h2>

                    <p>{day.theme}</p>

                  </div>

                  <div className="day-body">

                    <div className="progress-info">
                      <span>Task Progress</span>
                      <strong>{percentage}%</strong>
                    </div>

                    <div className="progress mb-3">
                      <div
                        className="progress-bar"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>

                    {day.tasks.map((task) => {
                      const taskText = typeof task === "string" ? task : task.activity;
                      const isCompleted = safeCompleted.includes(taskText);

                      return (
                      <label
                        className={`task-item${typeof task === "string" ? "" : " schedule-item"}`}
                        key={taskText}
                      >

                        <input
                          type="checkbox"
                          checked={isCompleted}
                          onChange={() => handleComplete(taskText)}
                        />

                        {typeof task === "string" ? (
                          <span className={isCompleted ? "completed" : ""}>{task}</span>
                        ) : (
                          <>
                            <span className="schedule-time">{task.time}</span>
                            <span className={`schedule-activity${isCompleted ? " completed" : ""}`}>
                              {task.activity}
                            </span>
                          </>
                        )}

                      </label>
                      );
                    })}

                    <div className="task-summary">
                      {count} / {total} Tasks Completed
                    </div>

                  </div>

                </div>

              </div>

            );
          })}

        </div>

      </div>

    </section>
  );
};

export default DayCards;