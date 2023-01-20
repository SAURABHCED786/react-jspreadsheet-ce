import { Button, Card, Page } from '@shopify/polaris';
import jspreadsheet from 'jspreadsheet-ce';
import React, { useEffect, useState } from 'react'
function Spreadsheet() {
  const [data, setData] = useState(null)

  function showData() {
    const temp = []
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((allData) => {
        allData.map((user, index) => {
          temp.push({
            username: user.login,
            userid: user.id,
            userpic: user.avatar_url,
            usertype: user.type,
            userprofile: user.html_url,
          })
        });
        console.log(temp);
        setData(temp)
      });
  }

  useEffect(() => {
    showData()
  }, [])


  var spreadsheet = jspreadsheet(document.getElementById('spreadsheet'), {
    data: data,
    columns: [
      {
        type: 'text',
        width: '350',
        name: 'userid',
        title: 'User Id'
      },
      {
        type: 'image',
        width: '250',
        name: 'userpic',
        title: 'User Pic'
      },
      {
        type: 'text',
        width: '80',
        name: 'username',
        title: 'Username'
      },
      {
        type: 'text',
        width: '150',
        name: 'usertype',
        title: 'User Type'
      },
      {
        type: 'text',
        width: '250',
        name: 'userprofile',
        title: 'User Profile'
      },
    ],
    updateTable: function (instance, cell, col, row, val, label) {
      if (col === 1) {
        cell.innerHTML = '<img src="' + val + '" style="width:100px;height:100px">';
      }
      if (col === 4) {
        cell.innerHTML = '<form action=' + val + '><input type="submit" value="Open Profile" /></form>'
      }
    },
    style: {
      A1: 'background-color: #5680E9;',
      B1: 'background-color: #5680E9;',
      C1: 'background-color: #5680E9;',
      D1: 'background-color: #5680E9;',
      E1: 'background-color: #5680E9;',

      A8: 'background-color: #84CEEB;',
      B8: 'background-color: #84CEEB;',
      C8: 'background-color: #84CEEB;',
      D8: 'background-color: #84CEEB;',
      E8: 'background-color: #84CEEB;',

      A15: 'background-color: #5AB9EA;',
      B15: 'background-color: #5AB9EA;',
      C15: 'background-color: #5AB9EA;',
      D15: 'background-color: #5AB9EA;',
      E15: 'background-color: #5AB9EA;',

      A22: 'background-color: lightpink;',
      B22: 'background-color: lightpink;',
      C22: 'background-color: lightpink;',
      D22: 'background-color: lightpink;',
      E22: 'background-color: lightpink;',

      A29: 'background-color: #8860D0;',
      B29: 'background-color: #8860D0;',
      C29: 'background-color: #8860D0;',
      D29: 'background-color: #8860D0;',
      E29: 'background-color: #8860D0;',
    },
  });



  var data1 = [
    {
      title: 'Jorge',
      id: '3'
    },
    {
      title: 'Rogerio Sergio',
      id: '4',
    },
    {
      title: 'Jorgina Santos',
      id: '5',
    },
    {
      title: 'Arnaldo Antunes',
      id: '6',
    },
  ];
  return (
    <div>
      <Page >
        <Card title={<center><h1 style={{fontSize:"25px",fontWeight:"600"}}>Demo Jspreadsheet Reactjs Using GitHub API</h1></center>} sectioned>
          <div id='spreadsheet'></div>
        </Card>
      </Page>
    </div>
  )
}

export default Spreadsheet
