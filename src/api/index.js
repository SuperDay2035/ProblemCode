import axios from "axios";

const GetcsharplessonsModul1 = async () => {

    try{
        const res = await axios.get("http://localhost:3001/csharpModule1");
        return {success: true, data: res.data}
    } catch (error) {
        console.log("Malumot Kelmayapti")
        return {success: false}
    }

}

const editLesson = async (id, body) => {

    try {
      const res = await axios.get(`http://localhost:3001/csharpModule1/${id}`, body);
      return {success: true, data: res.data};

    } catch (error) {

        console.log("Hatolik")
    }

}


export {GetcsharplessonsModul1, editLesson};