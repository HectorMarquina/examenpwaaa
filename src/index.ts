import app from "./config/express";

const main = () => {
    try {
        app.listen(3000)
        console.log("server runnig")
    } catch (error) {
        console.log(error)
    }
}

main();