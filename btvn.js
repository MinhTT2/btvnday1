let arrStudent = [
    {
      "id": "1",
      "name": "Alice Johnson",
      "age": 20,
      "email": "alice.johnson@university.com",
      "universityId": "1",
      "fullTime": true,
      "major": "Computer Science",
      "gpa": 3.8
    },
    {
      "id": "2",
      "name": "Bob Smith",
      "age": 22,
      "email": "bob.smith@university.com",
      "universityId": "2",
      "fullTime": false,
      "major": "Mechanical Engineering",
      "gpa": 3.5
    },
    {
      "id": "3",
      "name": "Charlie Brown",
      "age": 19,
      "email": "charlie.brown@university.com",
      "universityId": "3",
      "fullTime": true,
      "major": "Physics",
      "gpa": 3.7
    },
    {
      "id": "4",
      "name": "Daisy Miller",
      "age": 21,
      "email": "daisy.miller@university.com",
      "universityId": "4",
      "fullTime": false,
      "major": "Electrical Engineering",
      "gpa": 3.6
    },
    {
      "id": "5",
      "name": "Ethan Wilson",
      "age": 23,
      "email": "ethan.wilson@university.com",
      "universityId": "5",
      "fullTime": true,
      "major": "Chemistry",
      "gpa": 3.9
    },
    {
      "id": "6",
      "name": "Fiona White",
      "age": 20,
      "email": "fiona.white@university.com",
      "universityId": "1",
      "fullTime": false,
      "major": "Mathematics",
      "gpa": 3.4
    },
    {
      "id": "7",
      "name": "George Harris",
      "age": 22,
      "email": "george.harris@university.com",
      "universityId": "2",
      "fullTime": true,
      "major": "Biology",
      "gpa": 3.6
    },
    {
      "id": "8",
      "name": "Hannah Lee",
      "age": 19,
      "email": "hannah.lee@university.com",
      "universityId": "3",
      "fullTime": false,
      "major": "Environmental Science",
      "gpa": 3.7
    },
    {
      "id": "9",
      "name": "Isaac Young",
      "age": 21,
      "email": "isaac.young@university.com",
      "universityId": "4",
      "fullTime": true,
      "major": "History",
      "gpa": 3.5
    },
    {
      "id": "10",
      "name": "Jackie Chan",
      "age": 23,
      "email": "jackie.chan@university.com",
      "universityId": "5",
      "fullTime": true,
      "major": "Political Science",
      "gpa": 3.8
    }
];

let content=
`${
    arrStudent.map(function(cont,index){
        return `  
        <tbody>
            <td>${cont.id}</td>
       <td>${cont.name}</td>
       <td>${cont.age}</td>
       <td>${cont.email}</td>
       <td>${cont.universityId}</td>
       <td>${cont.major}</td>
       <td>${cont.gpa}</td>
       <td class="${cont.fullTime==true ? "fulltime1" :"fulltime2"}">${cont.fullTime==true ? "Full Time" :"Past time"}</td>
       
      <td><button style="color: white; background-color: blue;">Detail</button></td>
      <td><button style="color: black; background-color: yellow;">Update</button></td>
      <td><button style="color:white;background-color: red;">Delete</button></td>
        </tbody>
    `
    }).join(' ')
   
}`;
document.write(content);

//hello ae


