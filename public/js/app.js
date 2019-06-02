console.log('Client side javascript file is loaded!')

fetch('http://puzzle.mead.io/puzzle').then((response)=>{
    response.json().then((data)=>{
        console.log(data)
    })
})

fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/matara.json?access_token=pk.eyJ1IjoiMTQ0MTE3aiIsImEiOiJjandlZnZhcTYwMXVsNDlwaGE3MG9vN3hlIn0._VCJp9PaUb2VQtw_rEjCRQ').then((response)=>{
    response.json().then((data)=>{
        if (data.features.length===0)
            return console.log("wrong entry")
        console.log(data)
    })
})
