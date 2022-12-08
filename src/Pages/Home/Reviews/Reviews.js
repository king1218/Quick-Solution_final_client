import React from 'react';
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
           _id:1,
           name:"Abdullah Sayid",
           reviews:"Overall Mch becomes your work family. I feel the love man. Really though if you have a drive to help people and be appreciated for it Mch is for you.",
           img: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/315584714_652561319602901_64929383072860881_n.jpg?stp=c0.27.160.160a_cp6_dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFcOUy8zEn2X-cJFkVb8lrallh32lcSNIGWWHfaVxI0gVi3fHErb4t4KOermmGiqF51613gtPWS__GuSWx88baL&_nc_ohc=o_spX0H9Ke8AX-ktKRW&_nc_ht=scontent.fdac14-1.fna&oh=00_AfC_0B1Rghg-XwVHmEQqio1CBDGGK8GYWPNtzdyk123adA&oe=637D79B9',
           location:'Bangladesh'
        },
        {
           _id:2,
           name:"Shatabdi Roy",
           reviews:"Overall Mch becomes your work family. I feel the love man. Really though if you have a drive to help people and be appreciated for it Mch is for you.",
           img: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/125497470_1147733088975472_73748039710302205_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=e3tLfrwRIjgAX_7LmaI&_nc_ht=scontent.fdac14-1.fna&oh=00_AfDW0yCUTDYqlrJgD5NMHrxMA51DNrw1xqd30EXoc6fzQw&oe=6395EE53',
           location:'Dhaka'
        },
        {
           _id:3,
           name:"Rafa",
           reviews:"Overall Mch becomes your work family. I feel the love man. Really though if you have a drive to help people and be appreciated for it Mch is for you.",
           img: 'https://scontent.fdac14-1.fna.fbcdn.net/v/t39.30808-1/314353408_841976766835034_3446145831015340262_n.jpg?stp=c0.17.100.100a_dst-jpg_p100x100&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeF_rZQBBIlAyordi9BHZcWsWVXPsfmpWcNZVc-x-alZw_vqN5hFLTX0cimPJep-QOVdCFrAkIydrMfMenESwVEr&_nc_ohc=I-hCXVfCDogAX8GzD4v&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fdac14-1.fna&oh=00_AfCKnG2RNMWd43SNALrfRv5FFOVzuH2dackBhcjlSaXNMA&oe=637BB56D',
           location:'Bangladesh'
        }
    ]
    return (
        <div className='border-t-2 border-indigo-700 border-b-2 lg:py-10 my-24 py-5  lg:my-44'>
            <div><div className="text-center  ">
                <div className="pre-headline mb-32-lg f1">FROM OUR USERS</div>
                     <h2 className='lg:text-4xl text-4xl text-indigo-700 f'>Dreams do come true!</h2>
                </div>
               
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20 '>
                {
                    reviews.map(review=><Review
                    key={review._id}
                    review={review}
                    >

                    </Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;