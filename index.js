
// Creating required elements

var container = document.createElement('div')
container.setAttribute('class','container')
container.style.textAlign ='center'


var date = document.createElement('input')
date.type = "date"
date.setAttribute('id', 'date_input')
date.style.width="400px"
date.style.display = "inline"
date.style.marginTop = "30px"

var button = document.createElement('button')
button.type = "button"
button.classList.add('btn', 'btn-primary')
button.addEventListener('click', foo)
button.innerHTML = "Display Date"
button.style.height = "33px"
button.style.marginBottom = '7px'
button.style.marginLeft = "5px"

var displaydata = document.createElement('div')

container.append(date,button,displaydata)





document.body.append(container)



// Getting data from INPUT Date
function foo(){
    var res = document.getElementById('date_input').value
    
    console.log(res)
    if(Date.parse(res)){
        var input_date = new Date(res)
        var current_date = new Date()

        var millisec = parseInt(current_date.getTime()) - parseInt(input_date.getTime())
        var sec = cal(millisec,1000)
        var min = cal(sec,60)
        var hours = cal(min,60)
        var day = cal(hours,24)
        var year = yeardiff(current_date,input_date)
        var month = monthdiff(current_date,input_date)
        displaydata.innerHTML = `Given date is ${input_date} <br>                       
        Year: ${year} <br>
        Month: ${month} <br>
        Day: ${day} <br>
        Hours: ${hours} <br>
        Minutes: ${min} <br>
        Seconds:${sec} <br>
        MilliSeconds: ${millisec}
        `
    }
    else{
        displaydata.innerHTML = alert("Please Enter valid Date And Try Again")
    }
    



}

var cal = (value1,value2)=>{
    return Math.floor(value1/value2)
}

var yeardiff = (value1,value2)=>{
    var d1 = new Date(value1)
    var d2 = new Date(value2)
    return d1.getFullYear() - d2.getFullYear()
}

var monthdiff = (value1,value2)=>{
    var year = yeardiff(value1,value2)
    var month = (year*12)+(value1.getMonth() - value2.getMonth())
    return month
}



