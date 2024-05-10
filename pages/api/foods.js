import {ObjectId,} from 'mongodb';
import {getCollection} from "@/utils/functions";
import { sendMethodNotAllowed, sendOk } from '@/utils/apiMethods';

const COLLECTION_NAME = 'foods';

const getFoods = async () => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.find({}).toArray();
}

const getFood = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.findOne({ _id: ObjectId.createFromHexString(id) });
}

const createFood = async (data) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.insertOne(data);
}

const updateFood = async (data) => {
    const collection = await getCollection(COLLECTION_NAME);
    const id = data._id;
    delete data._id;
    return collection.updateOne({ _id: new ObjectId(id)}, { $set: data });
}

const deleteFood = async (id) => {
    const collection = await getCollection(COLLECTION_NAME);
    return await collection.deleteOne({ _id: ObjectId.createFromHexString(id) });
}

export default async function handler(req, res) {
   const isAllowedMethod = req.method === 'GET' || req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE';

    if (!isAllowedMethod) {
        return sendMethodNotAllowed(res, 'Method Not Allowed');
    }

    if (req.method === 'GET' && req.query.id) {
        const Food = await getFood(req.query.id);
        return sendOk(res, Food);
    }

    if (req.method === 'GET') {
        const Foods = await getFoods();
        return sendOk(res, Foods);
    }

    if (req.method === 'POST') {
        const Food = await createFood(req.body);
        return sendOk(res, Food);
    }

    if (req.method === 'PUT') {
        const Food = await updateFood(req.body);
        return sendOk(res, Food);
    }

    if (req.method === 'DELETE') {
        const Food = await deleteFood(req.query.id);
        return sendOk(res, Food);
    }
  }