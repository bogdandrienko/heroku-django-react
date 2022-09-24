import { useState } from "react";
import json_data from "./data.json";

// @ts-ignore
export const usePosts1 = (objs, type, isAnswer, search) => {
  // @ts-ignore
  const objects = Object.entries(objs[type]); //objs["История Казахстана"]
  // @ts-ignore
  if (isAnswer) {
    let sortedAndSearchedPosts = objects.filter((obj) => // метод возвращает МАССИВ, объектов соответствующих условию
      // @ts-ignore
      obj[1]["Вопрос"].toLowerCase().includes(search.toLowerCase()) // Абай куна
    );
    if (sortedAndSearchedPosts.length < 1){
      window.alert('Возможно, Вы ошиблись с регистром!')
    }
    // @ts-ignore
    return sortedAndSearchedPosts;
  } else {
    let sortedAndSearchedPosts = objects.filter((obj) =>
      // @ts-ignore
      obj[1]["Ответ 1"].toLowerCase().includes(search.toLowerCase())
    );
    if (sortedAndSearchedPosts.length < 1){
      window.alert('Возможно, Вы ошиблись с регистром!')
    }
    // @ts-ignore
    return sortedAndSearchedPosts;
  }
};

function App() {

  //const source_objs = json_obj;
  const source_objs = json_data;
  const [filter, setFilter] = useState({
    type: "Информационно-коммуникационные технологии",
    isAnswer: false,
    search: "",
  });
  const [type, settype] = useState("Информационно-коммуникационные технологии");
  const [isAnswer, setisAnswer] = useState(false);
  const [search, setSearch] = useState("");

  let objs = usePosts1(
    source_objs,
    filter.type,
    filter.isAnswer,
    filter.search
  );

  return (
    <div className="App">
      <div>
      <ul className="row-cols-auto row-cols-sm-auto row-cols-md-auto row-cols-lg-auto justify-content-center text-center m-0 p-0">
            <form
              className="m-0 p-0"
            >
              <div className="card shadow custom-background-transparent-hard m-0 p-0">
                <div className="card-header m-0 p-0">
                  <div className="m-0 p-0">
                    <label className="form-control-sm text-center w-100 m-0 p-1">
                      Предмет:
                      <select
                        className="form-control form-control-sm text-center m-0 p-1"
                        value={filter.type}
                        onChange={(e) =>
                          setFilter({
                            ...filter,
                            type: e.target.value,
                          })
                        }
                      >
                        <option value="Информационно-коммуникационные технологии">
                          Информационно-коммуникационные технологии
                        </option>
                        <option value="Логика, критическое и аналитическое мышление">
                          Логика, критическое и аналитическое мышление
                        </option>
                        <option value="Современная история Казахстана">
                          Современная история Казахстана
                        </option>
                        <option value="Философия">
                          Философия
                        </option>
                      </select>
                    </label>
                    <label className="form-control-sm form-switch w-50 text-center m-0 p-1">
                      Искать в ответе:
                      <input
                        type="checkbox"
                        className="form-check-input m-0 p-1"
                        id="flexSwitchCheckDefault"
                        defaultChecked={filter.isAnswer}
                        onClick={() =>
                          setFilter({
                            ...filter,
                            isAnswer: !filter.isAnswer,
                          })
                        }
                      />
                    </label>
                  </div>
                  <div className="m-0 p-0">
                    <label className="form-control-sm text-center w-100 m-0 p-1">
                      Поле поиска по части названия:
                      <input
                        type="text"
                        className="form-control form-control-sm text-center m-0 p-1"
                        placeholder="введите часть названия тут..."
                        value={filter.search}
                        onChange={(e) =>
                          setFilter({
                            ...filter,
                            search: e.target.value
                          })
                        }
                      />
                    </label>
                  </div>
                </div>
              </div>
            </form>
          </ul>
      </div>
            <div>
        <table className="table table-responsive table-striped table-bordered table-light bg-light bg-opacity-100 border-3 border-dark">
          {objs &&
            // @ts-ignore
            objs.map(
              // @ts-ignore
              (obj, index) => (
                // @ts-ignore
                <tr
                key={index}
                  className={"bg-success bg-opacity-75 text-light"}
                >
                  <td>
                    {
                      // @ts-ignore
                      obj[1]["Вопрос"]
                    }
                  </td>
                  <td>
                    {
                      // @ts-ignore
                      obj[1]["Ответ 1"]
                    }
                  </td>
                </tr>
              )
            )}
        </table>
      </div>
    </div>
  );
}

export default App;
