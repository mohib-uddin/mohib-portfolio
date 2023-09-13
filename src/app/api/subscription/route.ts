import {NextRequest, NextResponse} from "next/server";
// @ts-ignore
import SubscriptionModel from '@/models/subscription';
import {connectionDB} from "@/lib/connection";
export async function POST(request:NextRequest,res:NextResponse){
    await connectionDB();
  const data=await request.json();
  const {email}=data;
  if(!email){
      NextResponse.json({message:'Invalid Input'},{status:422})
  }
  const newData={
      ...data,
      date:new Date()
  }
  try{
      SubscriptionModel.create(newData);
      console.log('Email Sent');
      return NextResponse.json({message:'Successfully Subscribed'},{status:200})
  }
  catch (e){
      return NextResponse.json({message:'Error Subscribing'},{status:500})
  }
}

