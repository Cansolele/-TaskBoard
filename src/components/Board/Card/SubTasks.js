import style from "./SubTasks.module.css";
import { IconContext } from "react-icons";
import { BsPlusLg } from "react-icons/bs";
const SubTasks = ({ subTask }) => {
  return (
    <li className={style.subtasks_li_container}>
      <label>
        <input type="checkbox" defaultChecked={subTask.completed} />
        <h4 className={style.name_of_subtask}>{subTask.subTaskName}</h4>
        <div className={style.subtask_buttons}>
          {" "}
          {!subTask.subTaskTags && (
            <button className={style.add_tag_btn}>
              <IconContext.Provider
                value={{ className: style.add_tag_btn_icon }}
              >
                <BsPlusLg />
              </IconContext.Provider>
            </button>
          )}
          <button className={style.triple_colon_button}>
            <span className={style.triple_colon_icon}>⁝</span>
          </button>
        </div>
      </label>

      <div className={style.subtasks_tags_container}>
        {subTask.subTaskTags?.map((tag) => (
          <div
            style={{ backgroundColor: tag.tagColor }}
            className={style.subtask_tag}
          >
            {tag.tagName}
          </div>
        ))}
        {subTask.subTaskTags && (
          <button className={style.add_tag_btn}>
            <IconContext.Provider value={{ className: style.add_tag_btn_icon }}>
              <BsPlusLg />
            </IconContext.Provider>
          </button>
        )}
      </div>
    </li>
  );
};
export default SubTasks;
