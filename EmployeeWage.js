console.log("Welcome to Employee Wage Computation");
let employeeDetails =[
    {
        eid:101,
        name:"SaiAnjan",
        attendance:null,
        workhrs:null,
        dailywage:null
    },
    {
        eid:102,
        name:"Yogesh",
        attendance:null,
        workhrs:null,
        dailywage:null
    },
    {
        eid:103,
        name:"Uday",
        attendance:null,
        workhrs:null,
        dailywage:null
    },
    {
        eid:104,
        name:"Madhu",
        attendance:null,
        workhrs:null,
        dailywage:null
    }
]

function attendanceCheck(){
    employeeDetails.forEach((ele)=>{
        if (ele.attendance==null) {
            ele.attendance=Math.round(Math.random())
            console.log(ele.attendance);
        }
    })
}
attendanceCheck()