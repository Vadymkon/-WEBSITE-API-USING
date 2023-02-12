const stime = document.getElementById("stime")
const etime = document.getElementById("etime")
const butn = document.getElementById("butn")
const fetchedDiv = document.getElementById("fetched-data")

async function logoutfunc()
{
    if (stime.value != null & etime.value != null) {
        try
        {

            let path = `https://earthquake.usgs.gov/fdsnws/event/1/count?starttime=${stime.value}&endtime=${etime.value}`;
            const response = await fetch(path)
            const text = await response.text()
            console.log(text)

            fetchedDiv.innerHTML = ""
            if (response.ok)
                fetchedDiv.innerHTML = text
            else
                fetchedDiv.innerHTML = "Somethink wrong!"
        }
        catch (error)
        {
            fetchedDiv.innerHTML = error.message || error.toString()
        }
    }
    else
    {
        fetchedDiv.innerHTML = "No empty input data!"
    }
}