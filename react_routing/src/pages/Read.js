

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, json } from "react-router-dom";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import Create from "../components/Create";
import Update from "../components/Update";

const Read = () => {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [status, setStatus] = useState(false);
  const [successModel, setSuccessModel] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [plateform, setPlateform] = useState("");
  const [updateModalShow, setUpdateModalShow] = useState(false)
  const [itemIndex, setItemIndex] = useState("");

  function getData() {


    axios
      // .get("https://62a59821b9b74f766a3c09a4.mockapi.io/crud-youtube")
      .get("https://64cb8ebc700d50e3c7061be6.mockapi.io/kd-zack")

      .then((res) => {
        setData(res.data);
        setFilteredList(res.data);
      });
  }


  const handleDelete = (index, e) => {
    e.preventDefault();
    setData((prevData) => {
      const newData = prevData.filter((_, i) => i !== index);
      localStorage.setItem('listData', JSON.stringify(newData));
      return newData;
    });
  };

  function handleCreate(e) {
    setSuccessModel(true);
    e.preventDefault();
  }

  const handleUpdate = (item) => {
    setUpdateModalShow(true);
    setName(item?.name)
    setEmail(item?.email)
    setPlateform(item?.plateform)
  }



  useEffect(() => {
    let listData = localStorage.getItem("listData");
    listData = JSON.parse(listData);
    if (listData?.length > 0) {
      setData(listData);
      setFilteredList(listData)
    } else {
      getData();
    }
  }, []);




  const filterBySearch = (event) => {

      if (event.target.value !== "") {
      let updatedList = data?.filter((item) => {
        return (item.name).toLowerCase().includes((event.target.value).toLowerCase());
      });
      
 
        setData(updatedList);
      
        setStatus(true)
    }

    else {
      setData(filteredList)
      console.log("kkkkkk",filteredList);

      setStatus(false)
    }
  };

  return (
    <div className="container2">

      <div className="container-update">
        <div className="form-check form-switch">
          <BootstrapSwitchButton
            checked={true}
            onstyle="info"
            border-radius="40"
            onChange={() => {
              if (tabledark === "table-dark") setTableDark("");
              else setTableDark("table-dark");
            }}
          />
        </div>
        <div className="d-flex justify-content-between m-2">
          <h2>Read Operation</h2>
          
        <div className="search-text">
          
          {!status ? "SearchItem" : "FilteredItem"}

          <input id="search-box" placeholder="search" onChange={filterBySearch} />
        </div>
          <button  className="btn btn-primary" onClick={handleCreate}>
            Create{" "}
          </button>
        </div>


        <table className={`table ${tabledark}`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">plateform</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>


          {data?.map((eachData, index) => {
            return (
              <>
                <tbody>
                  <tr>
                    <th scope="row">{index}</th>
                    <td>{eachData.name}</td>
                    <td>{eachData.email}</td>
                    <td>{eachData.plateform}</td>

                    <td>

                      <button className="btn btn-primary" onClick={() => {
                        handleUpdate(eachData)
                        setItemIndex(index)
                      }}>
                        Edit{" "}
                      </button>

                    </td>
                    <td>

                      <button className=" btn btn-danger" onClick={e => handleDelete(index, e)}> Delete </button>  </td>
                  </tr>
                </tbody>
              </>
            );
          })}
        </table>
      </div>

      <Create
        show={successModel}
        hide={() => {
          setSuccessModel(false);
        }}
        handleSubmit={() => {
          let obj = { name: name, email: email, plateform: plateform };

          setData([...data, obj]);
          localStorage.setItem("listData", JSON.stringify([...data, obj]));

          setSuccessModel(false);
        }}
        name={(e) => setName(e.target.value)}
        email={(e) => setEmail(e.target.value)}
        plateform={(e) => {
          setPlateform(e.target.value);
        }}
      />

      <Update
        show={updateModalShow}
        hide={() => {
          setUpdateModalShow(false);
        }}


        handleUpdate={() => {
          data.map((item, index) => {
            if (index === itemIndex) {
                item.name = name;
                item.email = email;
                item.plateform = plateform;
            }
          });
          localStorage.setItem("listData", JSON.stringify(data));
          setData(data);
          
        }}
        name={name}
        editName={(e) => setName(e.target.value)}
        email={email}
        editEmail={(e) => setEmail(e.target.value)}
        plateform={plateform}
        editPlateform={(e) => setPlateform(e.target.value)}
      />

    </div>
  );
};

export default Read;

