const reference = document.querySelector("#insert")

window.addEventListener('keydown',(e)=>
{
  reference.innerHTML=`
  <table>
  <thead>
    <tr>
      <th>Key</th>
      <th>Key Code</th>
      <th>Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>${e.key === " "?"Space":e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
  </tbody>
</table>


  `
})
