console.log("Welcome to Employee Wage Computation");
let employeeDetails =[
    {
        eid:101,
        name:"SaiAnjan"
    },
    {
        eid:102,
        name:"Yogesh"
    },
    {
        eid:103,
        name:"Uday"
    },
    {
        eid:104,
        name:"Madhu"
    }
]

function attendanceCheck(){
    employeeDetails.forEach((ele)=>{

        const attendance=Math.round(Math.random())
        attendance ? ele.attendance="Present":ele.attendance="Absent"
    })
}

function computeWage(){
    employeeDetails.forEach((ele)=>{
        if (ele.attendance=="Present"){
            ele.workHrs=Math.floor(Math.random()*(8-1)+1)
            ele.dailyWage=ele.workHrs*20
        }
        else{
            ele.workHrs=0
            ele.dailyWage=0
        }
    })
}

attendanceCheck()
computeWage()