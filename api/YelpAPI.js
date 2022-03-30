import axios from "axios";


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/events',
    headers: {
        Authorization: 'Bearer d0vwWK4r4XUwI0eb3c-r2tmht_kkXTAq2HgfK0TdpUWw_yyqx1Wb4DSdez1XqByjwfVOAZQK6DBLzrw5NmLttYc-xH41UuvO7_NaCMpLDSAzISFs4S3evwrt-frZYXYx'
    }
})

