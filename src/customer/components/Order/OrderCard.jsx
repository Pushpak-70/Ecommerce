import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom';
const OrderCard = () => {

    const navigate=useNavigate();

    return (
        <div onClick={()=>navigate(`/account/order/${5}`)} className='p-5 shadow-lg shadow-black hover:shadow-2xl border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>
                    <div className='flex cursor-pointer'>
                        <img className='w-[5rem] h-[5rem] object-cover object-top' src="https://rukminim2.flixcart.com/image/612/612/xif0q/track-suit/u/0/j/xl-24-blk-yuvraah-original-imagrukkzk6g9zgu.jpeg?q=70" alt="" />
                        <div className='ml-5 space-y-2'>

                            <p className=''>Mens T-shirt Black</p>
                            <p className='opacity-50 text-xs font-semibold'>Size M</p>
                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={2}>
                    <p>$200</p>

                </Grid>
                <Grid item xs={4}>
                    {true && <div>
                        <p>
                            <AdjustIcon sx={{ width: "15px", heigth: "15px" }} className='text-green-600 mr-2 text-sm' />
                            <span>
                                Delivered on 23 Mar
                            </span>
                        </p>
                        <p className='text-xs'>
                            Your Item Has Been Deliverd
                        </p>

                    </div>}
                    {false && <p>
                        <span>
                            Expected Deliverd on 23 Mar
                        </span>

                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCard
