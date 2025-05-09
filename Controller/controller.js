import todoModel from "../model/model.js";

export const postData= async (req,res) => {
    try{
    const data=new todoModel(req.body); //data receive
    await data.save(); //posting to the db

    res.status(200).json({message: "data has been stored"});
    }
    catch(err){
        res.status(500).json({mes: err})
    }
};

export const getData=async(req,res)=>{
    try{
        const tododata=await todoModel.find();//get the data
        res.status(200).json(tododata);
    }
    catch(err)
    {
        res.status(500).json({mes: err})
    }
};

export const updateData=async(req,res)=>{
    try {
        const { id } = req.params;
        const updatedTodo = await todoModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedTodo);
    } catch (err) {
        res.status(500).json({ mes: err.message });
    }
}
export const deleteData=async(req,res)=>{
    try {
        const { id } = req.params;
        await todoModel.findByIdAndDelete(id);
        res.status(200).json({ message: "Todo deleted" });
    } catch (err) {
        res.status(500).json({ mes: err.message });
    }
}
