import React from 'react'
import { useState } from 'react';

const Pricing = () => {

    const [openPanels, setOpenPanels] = useState({});

    const togglePanel = (index) => {
        setOpenPanels((prevState) => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const featurePlans = [
        { name: 'Startup', price: 'Rs. 8,999/-', features: ['Account Creation', 'Account Management', 'Account Optimization'], instagram: ['Post(including reels) - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Hashtag Research', 'Post Creative Designing'], facebook: ['Post - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Post Creative Designing', 'Facebook Business Manager Setup'] },
        { name: 'Business', price: 'Rs. 12,999/-', features: ['Account Creation', 'Account Management', 'Account Optimization'], instagram: ['Post(including reels) - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Hashtag Research', 'Post Creative Designing'], facebook: ['Post - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Post Creative Designing', 'Facebook Business Manager Setup'] },
        { name: 'Pro', price: 'Rs. 14,999/-', features: ['Account Creation', 'Account Management', 'Account Optimization'], instagram: ['Post(including reels) - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Hashtag Research', 'Post Creative Designing'], facebook: ['Post - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Post Creative Designing', 'Facebook Business Manager Setup'] },
        { name: 'Enterprise', price: 'Rs. 19,999/-', features: ['Account Creation', 'Account Management', 'Account Optimization'], instagram: ['Post(including reels) - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Hashtag Research', 'Post Creative Designing'], facebook: ['Post - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Post Creative Designing', 'Facebook Business Manager Setup'] },
        { name: 'Platinum', price: 'Rs. 24,999/-', features: ['Account Creation', 'Account Management', 'Account Optimization'], instagram: ['Post(including reels) - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Hashtag Research', 'Post Creative Designing'], facebook: ['Post - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Post Creative Designing', 'Facebook Business Manager Setup'] },
        { name: 'Master', price: 'Rs. 29,999/-', features: ['Account Creation', 'Account Management', 'Account Optimization'], instagram: ['Post(including reels) - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Hashtag Research', 'Post Creative Designing'], facebook: ['Post - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Post Creative Designing', 'Facebook Business Manager Setup'] },
        { name: 'Supreme', price: 'Rs. 39,999/-', features: ['Account Creation', 'Account Management', 'Account Optimization'], instagram: ['Post(including reels) - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Hashtag Research', 'Post Creative Designing'], facebook: ['Post - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Post Creative Designing', 'Facebook Business Manager Setup'] },
        { name: 'All-In-One', price: 'Rs. 49,999/-', features: ['Account Creation', 'Account Management', 'Account Optimization'], instagram: ['Post(including reels) - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Hashtag Research', 'Post Creative Designing'], facebook: ['Post - 10/M', 'Reels - 4/M', 'Stories Uploading - 15/M', 'Post Creative Designing', 'Facebook Business Manager Setup'] },
    ];

    const influencerPlans = [
        { name: 'Base Plan', price: 'Rs.9,999/-', collaborations: ['6-8 Collaborations'] },
        { name: 'Middle Plan', price: 'Rs.14,999/-', collaborations: ['10-12 Collaborations'] },
        { name: 'Ultimate Plan', price: 'Rs.19,999/-', collaborations: ['15-17 Collaborations'] },
    ];

    const facebookAdsPlans = [
        { name: 'Premium Plan', price: 'Rs.8,999/-', details: ['Ads Management - Upto 5 Campaigns', 'Ads design and creation', 'Facebook shopping ads', 'Ad optimization', 'Campaign strategy and Set Up', 'Campaign monitering', 'Ad\'s Monitering and Management', 'Ads setup', 'Auidence Reach', 'Ad\'s Running time - As per the Client', 'Ad Budget Extra - Provided by Client'] },
        { name: 'Elite Plan', price: 'Rs.12,999/-', details: ['Ads Management - Upto 10 Campaigns', 'Ads design and creation', 'Facebook shopping ads', 'Ad optimization', 'Campaign strategy and Set Up', 'Campaign monitering', 'Ad\'s Monitering and Management', 'Ads setup', 'Auidence Reach', 'Ad\'s Running time - As per the Client', 'Ad Budget Extra - Provided by Client'] },
        { name: 'Pro Plan', price: 'Rs.18,999/-', details: ['Ads Management - Upto 20 Campaigns', 'Ads design and creation', 'Facebook shopping ads', 'Ad optimization', 'Campaign strategy and Set Up', 'Campaign monitering', 'Ad\'s Monitering and Management', 'Ads setup', 'Auidence Reach', 'Ad\'s Running time - As per the Client', 'Ad Budget Extra - Provided by Client'] },
    ];

    const googleAdsPlans = [
        {
            name: 'Four Class Plan',
            price: 'Rs. 8,999/-',
            details: [
                'Ads Management - Upto 2 Campaigns',
                'Ads design and creation',
                'Facebook shopping ads',
                'Ad optimization',
                'Campaign strategy and Set Up',
                'Campaign monitoring',
                "Ad's Monitoring and Management",
                'Ads setup',
                'Audience Reach',
                "Ad's Running time - As per the Client",
                'Ad Budget Extra - Provided by Client'
            ]
        },
        {
            name: 'Six Class Plan',
            price: 'Rs. 12,999/-',
            details: [
                'Ads Management - Upto 6 Campaigns',
                'Ads design and creation',
                'Facebook shopping ads',
                'Ad optimization',
                'Campaign strategy and Set Up',
                'Campaign monitoring',
                "Ad's Monitoring and Management",
                'Ads setup',
                'Audience Reach',
                "Ad's Running time - As per the Client",
                'Ad Budget Extra - Provided by Client'
            ]
        },
        {
            name: 'Ten Class Plan',
            price: 'Rs. 19,999/-',
            details: [
                'Ads Management - Upto 15 Campaigns',
                'Ads design and creation',
                'Facebook shopping ads',
                'Ad optimization',
                'Campaign strategy and Set Up',
                'Campaign monitoring',
                "Ad's Monitoring and Management",
                'Ads setup',
                'Audience Reach',
                "Ad's Running time - As per the Client",
                'Ad Budget Extra - Provided by Client'
            ]
        }
    ];

    const seoPlans = [
        {
            name: 'Beginner Plan',
            price: 'Rs. 9,999/-',
            details: [
                'Local SEO',
                'Initial Audit Report',
                'SEO Technical Audit',
                'Keywords - 5',
                'Backlinks Per Month - 40',
                'Title Tag Optimization',
                'Meta Tag Optimization',
                'Content Optimization',
                'Google Analytics Setup',
                'Blog Posting - 4/M',
                'Social Bookmarking',
                'Socials Profile Creation - 3',
                'GMB Creation One Time'
            ]
        },
        {
            name: 'Pro Plan',
            price: 'Rs. 14,999/-',
            details: [
                'Local SEO',
                'National SEO',
                'Initial Audit Report',
                'SEO Technical Audit',
                'Keywords - 10',
                'Backlinks Per Month - 60',
                'Competitor Analysis',
                'Duplicate Content Check',
                'Title Tag Optimization',
                'Meta Tag Optimization',
                'Image Alt Tag Optimization',
                'Content Optimization',
                '404 Page Implementation',
                'Website Speed Check',
                'Robots.txt Creation',
                'Google XML Sitemap',
                'Google Analytics Setup',
                'Google Webmaster Setup',
                'Blog Posting - 8/M',
                'Social Bookmarking',
                'Socials Profile Creation - 6',
                'Classified Submission',
                'Image Sharing',
                'GMB Creation One Time'
            ]
        },
        {
            name: 'Elite Plan',
            price: 'Rs. 24,999/-',
            details: [
                'Local SEO',
                'National SEO',
                'Initial Audit Report',
                'SEO Technical Audit',
                'Keywords - 20',
                'Backlinks Per Month - 100',
                'Competitor Analysis',
                'Duplicate Content Check',
                'Title Tag Optimization',
                'Meta Tag Optimization',
                'Image Alt Tag Optimization',
                'Content Optimization',
                '404 Page Implementation',
                'Website Speed Check',
                'Robots.txt Creation',
                'Google XML Sitemap',
                'Google Analytics Setup',
                'Google Webmaster Setup',
                'Blog Posting - 12/M',
                'Social Bookmarking',
                'Socials Profile Creation - 10',
                'Classified Submission',
                'Image Sharing',
                'GMB Creation One Time'
            ]
        },
        {
            name: 'Premium Plan',
            price: 'Rs. 49,999/-',
            details: [
                'Local SEO',
                'National SEO',
                'Initial Audit Report',
                'SEO Technical Audit',
                'Paid PR Media - 30 Release (Indian Only)',
                'Keywords - 50',
                'Backlinks Per Month - 200',
                'Competitor Analysis',
                'Duplicate Content Check',
                'Title Tag Optimization',
                'Meta Tag Optimization',
                'Image Alt Tag Optimization',
                'Content Optimization',
                '404 Page Implementation',
                'Website Speed Check',
                'Robots.txt Creation',
                'Google XML Sitemap',
                'Google Analytics Setup',
                'Google Webmaster Setup',
                'Blog Posting - 20/M',
                'Social Bookmarking',
                'Socials Profile Creation - 20',
                'Classified Submission',
                'Image Sharing',
                'GMB Creation One Time'
            ]
        }
    ];

    const adsSeoPlan = {
        name: 'ADS + SEO PLANS',
        price: 'Rs. 20999',
        details: [
            {
                category: 'Facebook Ads',
                details: [
                    'Ads Management - Upto 5 Campaigns',
                    'Ads design and creation',
                    'Facebook shopping ads',
                    'Ad optimization',
                    'Campaign strategy and Set Up',
                    'Campaign monitoring',
                    "Ad's Monitoring and Management",
                    'Ads setup',
                    'Audience Reach',
                    "Ad's Running time - As per the Client",
                    'Ad Budget Extra - Provided by Client'
                ]
            },
            {
                category: 'Google Ads',
                details: [
                    'Ads Management - Upto 2 Campaigns',
                    'Ads design and creation',
                    'Facebook shopping ads',
                    'Ad optimization',
                    'Campaign strategy and Set Up',
                    'Campaign monitoring',
                    "Ad's Monitoring and Management",
                    'Ads setup',
                    'Audience Reach',
                    "Ad's Running time - As per the Client",
                    'Ad Budget Extra - Provided by Client'
                ]
            },
            {
                category: 'SEO',
                details: [
                    'SEO Technical Audit Report',
                    'Local & National Marketing',
                    'Initial Audit Report',
                    'Google My Business Page Audit Report',
                    'Google Ads Setup Report',
                    'On Page SEO',
                    'Technical SEO',
                    'Off Page SEO',
                    'Status And Report',
                    'Monthly Action Plan',
                    'Blog for Website - 20/M',
                    'Local Search Optimization',
                    'Online Reputation Management',
                    'Blog Optimization',
                    'Google Analytics',
                    'Search Console',
                    'Conversion Tracking',
                    'Monthly Action Plan',
                    'E-commerce SEO',
                    'Guest Posting',
                    'Blog Posting',
                    'Article Submission',
                    'Podcast submission',
                    'Video submission',
                    'Image submission',
                    'Quora Submission',
                    'Medium Content',
                    'Web 2.0',
                    'Ping submission',
                    'Search submission',
                    'Wiki submission',
                    'Wikipedia dead link',
                    'Google Links',
                    'Infographics Submission',
                    'Profile Creation',
                    'Business Listing',
                    'Social Book Marking',
                    'Blog commenting',
                    'Forum submission',
                    'Press release',
                    'PPT and PDF submission'
                ]
            }
        ]
    };


    return (
        <>
            <div>
                <div class="part-1">
                    <div id="title" class="main">
                        <h2 className='text-6xl font-bold'>Digital Marketing Plans and Pricing</h2>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className='text-[2vw] text-center'>Features Comparison</th>
                                <th className='w-[6vw] text-center p-[2vw]'>
                                    <div className='flex flex-col gap-4 items-center'>
                                        <span className="text-green-500 text-2xl">Startup</span>
                                        <b className="text-[1.2rem]">₹ 8999/-</b>
                                        <button
                                            className='p-2 bg-green-600 text-white font-bold rounded-2xl border-none text-[1rem] w-[7vw]'>Get
                                            Now</button>
                                    </div>
                                </th>
                                <th className='w-[6vw] text-center p-[2vw]'>
                                    <div className='flex flex-col gap-4'>
                                        <span className="text-[#4091CB] text-2xl">Business</span>
                                        <b className="text-[1.2rem]">₹ 12999/-</b>
                                        <button
                                            className='p-2 bg-[#4091CB] text-white font-bold rounded-2xl border-none text-[1rem] w-[7vw]'>Get
                                            Now</button>
                                    </div>
                                </th>
                                <th className='w-[6vw] text-center p-[2vw]'>
                                    <div className='flex flex-col gap-4'>
                                        <span className="text-[#2EAA9F] text-2xl">Enterprise</span>
                                        <b className="text-[1.2rem]">₹ 19999/-</b>
                                        <button
                                            className="p-2 bg-[#2EAA9F] text-white font-bold rounded-2xl border-none text-[1rem] w-[7vw]">Get Now</button>
                                    </div>
                                </th>
                                <th className='w-[6vw] text-center p-[2vw]'>
                                    <div className='flex flex-col gap-4'>
                                        <span className="text-[#E3765B] text-2xl">Platinum</span>
                                        <b className="text-[1.2rem]">₹ 24999/-</b>
                                        <button
                                            className='p-2 bg-[#E3765B] text-white font-bold rounded-2xl border-none text-[1rem] w-[7vw]'>Get
                                            Now</button>
                                    </div>
                                </th>
                                <th className='w-[6vw] text-center p-[2vw]'>
                                    <div className='flex flex-col gap-4'>
                                        <span className="text-[#CF8B05] text-2xl">Master</span>
                                        <b className="text-[1.2rem]">₹ 29999/-</b>
                                        <button
                                            className='p-2 bg-[#CF8B05] text-white font-bold rounded-2xl border-none text-[1rem] w-[7vw]'>Get
                                            Now</button>
                                    </div>
                                </th>
                                <th className='w-[6vw] text-center p-[2vw]'>
                                    <div
                                        className='flex flex-col gap-4'>
                                        <span className='text-[#AF05CF] text-[2vw]'>Supreme</span>
                                        <b className="text-[1.2rem]">₹ 39999/-</b>
                                        <button
                                            className='p-2 bg-[#AF05CF] text-white font-bold rounded-2xl border-none text-[1rem] w-[7vw]'>Get
                                            Now</button>
                                    </div>
                                </th>
                                <th className='w-[6vw] text-center p-[2vw]'>
                                    <div className='flex flex-col gap-4'>
                                        <span className='text-[#CF0522] text-2xl'>All-In-One</span>
                                        <b className="text-[1.2rem]">₹ 49999/-</b>
                                        <button
                                            className='p-2 bg-[#CF0522] text-white font-bold rounded-2xl border-none text-[1rem] w-[7vw]'>Get
                                            Now</button>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td
                                    className="border-none font-bold text-[20px] text-center p-2">
                                    INSTAGRAM</td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>
                                    Post(including reels)</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>10/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>12/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>18/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>20/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>20/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>18/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>25/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Reels</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>4/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>4/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>5/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>5/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>5/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>5/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>5/M</td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Stories
                                    uploading</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>15/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>15/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>23/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>25/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>25/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>23/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>30/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Hashtags
                                    Research</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Post
                                    Creative Designing</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr className="p-8">
                                <td className='text-center border-l-0 border-r-0 p-4'>Audience
                                    Research</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Instagram
                                    Ads (META)</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                        </tbody>
                        <tr class="spacer-row">
                            <td colspan="9" className="h-[20px] border-none bg-transparent"></td>
                        </tr>
                        <tbody className="mt-[100px]">
                            <tr>
                                <td
                                    className='border-none font-bold text-[20px] text-center p-4'>
                                    FACEBOOK</td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>
                                    Post(including reels)</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>10/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>12/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>18/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>20/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>20/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>18/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>25/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Reels</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>4/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>4/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>5/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>5/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>5/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>5/M</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>5/M</td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Stories
                                    uploading</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>15/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>15/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>23/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>25/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>25/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>23/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>30/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Post
                                    Creative Designing</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Facebook
                                    Business Manager Set Up</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Group
                                    Joining and Posting</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Pixel
                                    Installation</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>
                                    Remarketing (Ads)</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr className="p-8">
                                <td className='text-center border-l-0 border-r-0 p-4'>Custom
                                    Audience Creation (Ads)</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Facebook
                                    Analytics Report Creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Ad
                                    Campaign Monitoring</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>E-commerce
                                    ads</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Facebook
                                    Catalogue Creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Dynamic
                                    Ads Creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>
                                    Customization Of Ad Placements</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Carousel
                                    And collection Ads</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Monthly
                                    Report</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Traffic
                                    Monitoring</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                        </tbody>
                        <tr class="spacer-row">
                            <td colspan="9" className="h-[20px] border-none bg-transparent"></td>
                        </tr>
                        <tbody>
                            <tr>
                                <td
                                    className="border-none font-bold text-[20px] text-center p-2">
                                    GOOGLE MY BUSINESS</td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Create
                                    Business Profile</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Add
                                    Contact Information</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Write A
                                    Business Description</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Publish
                                    Google Posts</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    6/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    8/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    8/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    6/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    12/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Upload New
                                    Photos</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    6/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    8/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    8/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    6/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    12/M
                                </td>
                            </tr>
                            <tr className="p-8">
                                <td className='text-center border-l-0 border-r-0 p-4'>Add/Update
                                    Products/Services</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Review
                                    Submission</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    4/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    8/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    8/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    4/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    15/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>QR
                                    Creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                        </tbody>
                        <tr class="spacer-row">
                            <td colspan="9" className="h-[20px] border-none bg-transparent"></td>
                        </tr>
                        <tbody>
                            <tr>
                                <td
                                    className="border-none font-bold text-[20px] text-center p-2">
                                    TWITTER</td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Post
                                    creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    25/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    25/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    30/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Tweet
                                    Engagement Ads</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Video Or
                                    GIF View Ads</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Awareness
                                    Ads</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Website
                                    Conversion Ads</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr className="p-8">
                                <td className='text-center border-l-0 border-r-0 p-4'>In-stream
                                    Video View Ads</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Follower
                                    Ads</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>App
                                    Install Ads</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>App
                                    Re-engagement</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Audience
                                    Creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Monthly
                                    Report</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                        </tbody>
                        <tr class="spacer-row">
                            <td colspan="9" className="h-[20px] border-none bg-transparent"></td>
                        </tr>
                        <tbody>
                            <tr>
                                <td
                                    className="border-none font-bold text-[20px] text-center p-2">
                                    LINKEDIN</td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Post
                                    creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    2/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    4/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    4/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    2/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    10/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Blogs
                                    sharing</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Connection
                                    Building</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Business
                                    Account Set Up</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Monthly
                                    Report</td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className="text-center border-l-0 border-r-0">
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                        </tbody>
                        <tr class="spacer-row">
                            <td colspan="9" className="h-[20px] border-none bg-transparent"></td>
                        </tr>
                        <tbody>
                            <tr>
                                <td
                                    className="border-none font-bold text-[20px] text-center p-2">
                                    YOUTUBE</td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Youtube
                                    Shots</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    5/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Video
                                    Editing</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Video
                                    scheduling</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Video
                                    uploading</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Thumbnail
                                    Creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                        </tbody>
                        <tr class="spacer-row">
                            <td colspan="9" className="h-[20px] border-none bg-transparent"></td>
                        </tr>
                        <tbody>
                            <tr>
                                <td
                                    className="border-none font-bold text-[20px] text-center p-2">
                                    PINTEREST</td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Pinterest
                                    Ac Setup</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    2/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    4/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    4/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    2/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    10/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Profile
                                    Optimization</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Post
                                    Pins(image)</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    25/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    25/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    30/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Board
                                    creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Pinboard
                                    update</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                        </tbody>
                        <tr class="spacer-row">
                            <td colspan="9" className="h-[20px] border-none bg-transparent"></td>
                        </tr>
                        <tbody>
                            <tr>
                                <td
                                    className="border-none font-bold text-[20px] text-center p-2">
                                    SEO</td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Local SEO
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>National
                                    SEO</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Paid PR
                                    Media Release (Indian Only)</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    30
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Initial
                                    Audit Report</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>SEO
                                    Technical Audit</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Keywords
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    10
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    20
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Backlinks
                                    Per Month</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    60
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    100
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Competitor
                                    Analysis</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Duplicate
                                    Content Check</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Google
                                    Penalty Check</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Website
                                    Canonical Check</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Title Tag
                                    Optimization</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Meta Tag
                                    Optimization</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Image Alt
                                    Tag Optimization</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Content
                                    Optimization</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>SEO
                                    Friendly URL Setup</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>404 Page
                                    Implementation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Website
                                    Speed Check</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Google
                                    Indexed Pages Check</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Robots.txt
                                    Creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Google XML
                                    Sitemap</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Google
                                    Webmaster Setup</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Google
                                    Analytics Setup</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Blog
                                    Posting</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    8/M
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    12/M
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Social
                                    Bookmarking</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Socials
                                    Profile Creation</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    6
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    10
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Classified
                                    Submission</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>Image
                                    Sharing</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                            <tr>
                                <td className='text-center border-l-0 border-r-0 p-4'>GMB
                                    Creation One Time</td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <hr class="small-line" />
                                </td>
                                <td className='text-center border-l-0 border-r-0 p-2'>
                                    <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png" className='w-5 h-5 mx-auto' alt="" />
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    <div class="main">
                        <h2 className="text-center text-[4vw]" >Facebook Ads Plans</h2>
                        <div className='w-full flex justify-between'>
                            <div className="text-center p-[2vw] w-fit" >
                                <div
                                    className='flex flex-col gap-4 my-[2vw] items-center'>
                                    <span className="text-[#2EAA9F] text-[2vw] font-bold">PREMIUM PLAN</span>
                                    <b className="text-[2vw]">₹ 8999/-</b>
                                    <button
                                        className='p-2 bg-[#2EAA9F] text-white font-bold rounded-2xl border-none w-24' >Get
                                        Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8'>
                                                Ads Management</td>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8'>
                                                Up to 2 campaign</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8" >
                                                Ads design and creation</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Google shopping ads</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ad optimization</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Campaign strategy and Set Up</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Campaign monitoring</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ad's Monitoring and Management</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ads setup</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Audience Reach</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ad's Running time</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                As per the Client</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8' >
                                                Ad Budget Extra</td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8'>
                                                Provided by Client</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="text-center p-[2vw] w-fit">
                                <div
                                    className='flex flex-col gap-4 my-[2vw] items-center'>
                                    <span className="text-[#E3765B] text-[2vw] font-bold">SIX CLASS PLAN</span>
                                    <b className="text-[2vw]">₹ 12999/-</b>
                                    <button
                                        className='p-2 bg-[#E3765B] text-white font-bold rounded-2xl border-none w-24'>Get
                                        Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8'>
                                                Ads Management</td>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8'>
                                                Up to 2 campaign</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ads design and creation</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Google shopping ads</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ad optimization</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Campaign strategy and Set Up</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Campaign monitoring</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ad's Monitoring and Management</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ads setup</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Audience Reach</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ad's Running time</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                As per the Client</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8'>
                                                Ad Budget Extra</td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8'>
                                                Provided by Client</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="text-center p-[2vw] w-fit">
                                <div
                                    className='flex flex-col gap-4 my-[2vw] items-center'>
                                    <span className="text-[#CF8B05] text-[2vw] font-bold">TEN CLASS PLAN</span>
                                    <b className="text-[2vw]">₹ 19999/-</b>
                                    <button
                                        className='p-2 bg-[#CF8B05] text-white font-bold rounded-2xl border-none w-24'>Get
                                        Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8'>
                                                Ads Management</td>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8'>
                                                Up to 2 campaign</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ads design and creation</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Google shopping ads</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ad optimization</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Campaign strategy and Set Up</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Campaign monitoring</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ad's Monitoring and Management</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ads setup</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Audience Reach</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Yes</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                Ad's Running time</td>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8">
                                                As per the Client</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8'>
                                                Ad Budget Extra</td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8'>
                                                Provided by Client</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="main">
                        <h2 className="text-center text-[4vw]">SEO PLANS</h2>
                        <div className='w-full flex justify-between'>
                            <div className="text-center p-[2vw] w-fit">
                                <div
                                    className='flex flex-col gap-4 my-[2vw] items-center'>
                                    <span className="text-[#1F9B06] text-[2vw] font-bold">BEGINNER PLAN</span>
                                    <b className="text-[2vw]">₹ 9999/-</b>
                                    <button
                                        className='p-2 bg-[#1F9B06] text-white font-bold rounded-2xl border-none w-24'>Get
                                        Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8 text-center' >
                                                Local SEO</td>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                National SEO</td>
                                            <td className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                International SEO</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Initial Audit Report</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                SEO Technical Audit</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Keywords</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                5</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Backlinks Per Month</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                40</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Competitor Analysis</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Duplicate Content Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Penalty Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Website Canonical Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Title Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Meta Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Image Alt Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Content Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                SEO Friendly URL Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                404 Page Implementation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Website Speed Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Indexed Pages Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Robots.txt Creation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google XML Sitemap</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Webmaster Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Analytics Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Blog Posting</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                4/M</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Social Bookmarking</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Socials Profile Creation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                3</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Classified Submission</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Image Sharing</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                GMB Creation One Time</td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                            <div className="text-center p-[2vw] w-fit">
                                <div
                                    className='flex flex-col gap-4 my-[2vw] items-center'>
                                    <span className="text-[#4091CB] text-[2vw] font-bold">PRO PLAN</span>
                                    <b className="text-[2vw]">₹ 14999/-</b>
                                    <button
                                        className='p-2 bg-[#4091CB] text-white font-bold rounded-2xl border-none w-24'>Get
                                        Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8 text-center'>
                                                Local SEO</td>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                National SEO</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                International SEO</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Initial Audit Report</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                SEO Technical Audit</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Keywords</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                5</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Backlinks Per Month</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                40</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Competitor Analysis</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Duplicate Content Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Penalty Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Website Canonical Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Title Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Meta Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Image Alt Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Content Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                SEO Friendly URL Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                404 Page Implementation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Website Speed Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Indexed Pages Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Robots.txt Creation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google XML Sitemap</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Webmaster Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Analytics Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Blog Posting</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                4/M</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Social Bookmarking</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Socials Profile Creation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                3</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Classified Submission</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Image Sharing</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                GMB Creation One Time</td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                            <div className="text-center p-[2vw] w-fit">
                                <div
                                    className='flex flex-col gap-4 my-[2vw] items-center'>
                                    <span className="text-[#E3765B] text-[2vw] font-bold" >ELITE PLAN</span>
                                    <b className="text-[2vw]">₹ 24999/-</b>
                                    <button
                                        className='p-2 bg-[#E3765B] text-white font-bold rounded-2xl border-none w-24'>Get
                                        Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8 text-center'>
                                                Local SEO</td>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                National SEO</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                International SEO</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Initial Audit Report</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                SEO Technical Audit</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Keywords</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                5</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Backlinks Per Month</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                40</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Competitor Analysis</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Duplicate Content Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Penalty Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Website Canonical Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Title Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Meta Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Image Alt Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Content Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                SEO Friendly URL Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                404 Page Implementation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Website Speed Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Indexed Pages Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Robots.txt Creation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google XML Sitemap</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Webmaster Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Analytics Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Blog Posting</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                4/M</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Social Bookmarking</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Socials Profile Creation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                3</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Classified Submission</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Image Sharing</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                GMB Creation One Time</td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                            <div className="text-center p-[2vw] w-fit">
                                <div
                                    className='flex flex-col gap-4 my-[2vw] items-center'>
                                    <span className="text-[#BF5BE3] text-[2vw] font-bold">PREMIUM PLAN</span>
                                    <b className="text-[2vw]">₹ 49999/-</b>
                                    <button
                                        className='p-2 bg-[#BF5BE3] text-white font-bold rounded-2xl border-none w-24'>Get
                                        Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8 text-center'>
                                                Local SEO</td>
                                            <td
                                                className='border-2 border-[#C6C5C5] border-b-0 p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                National SEO</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                International SEO</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Initial Audit Report</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                SEO Technical Audit</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Keywords</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                5</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Backlinks Per Month</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                40</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Competitor Analysis</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Duplicate Content Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Penalty Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Website Canonical Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Title Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Meta Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Image Alt Tag Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Content Optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                SEO Friendly URL Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                404 Page Implementation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Website Speed Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Indexed Pages Check</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Robots.txt Creation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google XML Sitemap</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Webmaster Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Google Analytics Setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Blog Posting</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                4/M</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Social Bookmarking</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Socials Profile Creation</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                3</td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Classified Submission</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Image Sharing</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                GMB Creation One Time</td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>

                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div class="main">
                        <h2 className="text-center text-[4vw]">INFLUENCER MARKETING</h2>
                        <div className='w-full flex justify-between'>
                            <div className="text-center p-[2vw] w-[30%]">
                                <div
                                    className='flex flex-col gap-4 my-[2vw] items-center'>
                                    <span className="text-[#1F9B06] text-[2vw] font-bold">BASE PLAN</span>
                                    <b className="text-[2vw]">₹ 9999/-</b>
                                    <button
                                        className='p-2 bg-[#1F9B06] text-white font-bold rounded-2xl border-none w-24'>Get
                                        Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <td
                                                className='border-2 border-[#C6C5C5] p-8 text-center font-bold'>
                                                6 - 8 Collaborations</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="text-center p-[2vw] w-[30%]">
                                <div
                                    className='flex flex-col gap-4 my-[2vw] items-center'>
                                    <span className="text-[#4091CB] text-[2vw] font-bold">MIDDLE PLAN</span>
                                    <b className="text-[2vw]">₹ 14999/-</b>
                                    <button
                                        className='p-2 bg-[#4091CB] text-white font-bold rounded-2xl border-none w-24'>Get
                                        Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <td
                                                className='border-2 border-[#C6C5C5] p-8 text-center font-bold'>
                                                10 - 12 Collaborations</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className="text-center p-[2vw] w-[30%]">
                                <div
                                    className='flex flex-col gap-4 my-[2vw] items-center'>
                                    <span className="text-[#E3765B] text-[2vw] font-bold">ULTIMATE PLAN</span>
                                    <b className="text-[2vw]">₹ 19999/-</b>
                                    <button
                                        className='p-2 bg-[#E3765B] text-white font-bold rounded-2xl border-none w-24'>Get
                                        Now</button>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <td
                                                className='border-2 border-[#C6C5C5] p-8 text-center font-bold'>
                                                15 - 17 Collaborations</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="main">
                        <h2 className="text-center text-[4vw]">PROFESSIONAL BUNDLE - RS. 14999/-</h2>
                        <div className="w-full">
                            <div className="text-center p-[2vw]">
                                <div>
                                    <table>
                                        <tr className="bg-[#FFE01B]">
                                            <th
                                                className='border-2 border-[#C6C5C5] p-8 text-center'>
                                                Instagram Marketing </th>
                                            <th
                                                className='border-2 border-[#C6C5C5] p-8 text-center'>

                                            </th>
                                            <th
                                                className='border-2 border-[#C6C5C5] p-8 text-center'>
                                                Facebook Marketing
                                            </th>
                                            <th
                                                className='border-2 border-[#C6C5C5] p-8 text-center'>

                                            </th>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                Post</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                15/M
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Post(including reels)
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                15/M
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                Reels</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                5/M
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Reels
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                5/M
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Stories uploading</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                20/M
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Stories uploading
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                20/M
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Hashtags Research</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Post Creative Designing
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Post Creative Designing
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Facebook Business Manager Set Up
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Audience Research</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Group Joining and Posting
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                <hr class="small-line" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Post Boosting</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Pixel Installation
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Instagram Ads (META)</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Remarketing (Ads)
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Custom Audience Creation (Ads)
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Facebook Analytics Report Creation
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Ad Campaign Monitoring
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                E-commerce ads
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Facebook Catalogue Creation
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Dynamic Ads Creation
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Customization Of Ad Placements
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Carousel And collection Ads
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Monthly Report
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-[#C6C5C5] text-center border-2'>

                                            </td>
                                            <td
                                                className='border-t-0 border-[#C6C5C5] text-center border-2'>
                                                Traffic Monitoring
                                            </td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                <img src="https://techsharks.in/wp-content/uploads/2023/05/tick.png"
                                                    className='w-5 h-5 mx-auto' alt="" />
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>




                    <div class="main">
                        <h2 className="text-center text-[4vw]">ADS + SEO PLANS - RS. 20999/-</h2>
                        <div className="w-full">
                            <div className="text-center p-[2vw]">
                                <div>
                                    <table>
                                        <tr className="bg-[#FFE01B]">
                                            <th
                                                className='border-2 border-[#C6C5C5] p-8 text-center'>
                                                Facebook Ads </th>
                                            <th
                                                className='border-2 border-[#C6C5C5] p-8 text-center'>

                                            </th>
                                            <th
                                                className='border-2 border-[#C6C5C5] p-8 text-center'>
                                                Google Ads
                                            </th>
                                            <th
                                                className='border-2 border-[#C6C5C5] p-8 text-center'>

                                            </th>
                                            <th
                                                className='border-2 border-[#C6C5C5] p-8 text-center'>
                                                SEO (Search engine optimization)
                                            </th>
                                            <th
                                                className='border-2 border-[#C6C5C5] p-8 text-center'>

                                            </th>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                Ads Management</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Up to 5 campaign
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Ads Management
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Up to 2 campaign
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Local SEO
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className="border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center">
                                                Ads design and creation	</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Ads design and creation
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                National SEO
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td

                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Facebook shopping ads</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Google shopping ads
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Initial Audit Report
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Ad optimization</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Ad optimization
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                SEO Technical Audit
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Campaign strategy and Set Up
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Campaign strategy and Set Up
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Keywords
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                10
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Campaign monitoring</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Campaign monitoring
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Backlinks Per Month
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                60
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Ad's Monitoring and Management</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Ad's Monitoring and Management
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Competitor Analysis
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Ads setup</td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Ads setup
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Duplicate Content Check
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Audience Reach
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Audience Reach
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Title Tag Optimization
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Ad's Runnin time
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                As per the Client
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Ad's Runnin time
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                As per the Client
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Meta Tag Optimization
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] text-center p-8'>
                                                Ad Budget Extra
                                            </td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] text-center'>
                                                Provided by Client
                                            </td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] text-center'>
                                                Ad Budget Extra
                                            </td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Provided by Client
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Image Alt Tag Optimization
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Content Optimization
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                404 Page Implementation
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Website Speed Check
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Robots.txt Creation
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Google XML Sitemap
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Google Webmaster Setup
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Google Analytics Setup
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Blog Posting
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Social Bookmarking
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Socials Profile Creation
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Classified Submission
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>

                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-2 border-[#C6C5C5] text-center'>
                                                Image Sharing
                                            </td>
                                            <td
                                                className='border-t-0 border-b-0 border-[#C6C5C5] text-center p-8'>
                                                Yes
                                            </td>
                                        </tr>
                                        <tr>
                                            <td
                                                className='border-t-0 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td
                                                className='border-t-0 border-[#C6C5C5] text-center border-2'>

                                            </td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] text-center p-8'>
                                            </td>
                                            <td className='border-t-0 border-[#C6C5C5] text-center border-2'>

                                            </td>
                                            <td
                                                className='border-t-0 border-[#C6C5C5] text-center border-2'>
                                                GMB Creation One Time
                                            </td>
                                            <td
                                                className='border-t-0 border-2 border-[#C6C5C5] p-8 text-center'>
                                                Yes
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div class="part-2">
                    <div className="main">
                        <h2 className="text-center text-2xl font-bold my-10">FEATURES PLAN</h2>
                        <div>
                            {featurePlans.map((plan, index) => (
                                <div key={index}>
                                    <button className="accordion" onClick={() => togglePanel(`feature-${index}`)}>
                                        {plan.name} ({plan.price})
                                    </button>
                                    <div className="panel" style={{ maxHeight: openPanels[`feature-${index}`] ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease-in-out', padding: '0 18px', border: '2px solid #eee', borderTop: 'none', backgroundColor: 'white' }}>
                                        <div>
                                            <div>
                                                <ul className="list-disc p-5">
                                                    {plan.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
                                                </ul>
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-bold mt-4 mb-2">Instagram Marketing</h2>
                                                <ul className="list-disc p-5">
                                                    {plan.instagram.map((item, idx) => <li key={idx}>{item}</li>)}
                                                </ul>
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-bold mt-4 mb-2">FaceBook Marketing</h2>
                                                <ul className="list-disc p-5">
                                                    {plan.facebook.map((item, idx) => <li key={idx}>{item}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="main">
                        <h2 className="text-center text-2xl font-bold my-10">INFLUENCER MARKETING</h2>
                        <div>
                            {influencerPlans.map((plan, index) => (
                                <div key={index}>
                                    <button className="accordion" onClick={() => togglePanel(`influencer-${index}`)}>
                                        {plan.name} - {plan.price}
                                    </button>
                                    <div className="panel" style={{ maxHeight: openPanels[`influencer-${index}`] ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                                        <div>
                                            <div>
                                                <ul className="list-disc p-5">
                                                    {plan.collaborations.map((collab, idx) => <li key={idx}>{collab}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="main">
                        <h2 className="text-center text-2xl font-bold my-10">FACEBOOK ADS PLANS</h2>
                        <div>
                            {facebookAdsPlans.map((plan, index) => (
                                <div key={index}>
                                    <button className="accordion" onClick={() => togglePanel(`facebookAds-${index}`)}>
                                        {plan.name} - {plan.price}
                                    </button>
                                    <div className="panel" style={{ maxHeight: openPanels[`facebookAds-${index}`] ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                                        <div>
                                            <div>
                                                <ul className="list-disc p-5">
                                                    {plan.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="main">
                        <h2 className="text-center text-2xl font-bold my-10">GOOGLE ADS MANAGEMENT PLANS</h2>
                        <div>
                            {googleAdsPlans.map((plan, index) => (
                                <div key={index}>
                                    <button className="accordion" onClick={() => togglePanel(`googleAds-${index}`)}>
                                        {plan.name} - {plan.price}
                                    </button>
                                    <div className="panel" style={{ maxHeight: openPanels[`googleAds-${index}`] ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                                        <div>
                                            <div>
                                                <ul className="list-disc p-5">
                                                    {plan.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>



                    <div className="main">
                        <h2 className="text-center text-2xl font-bold my-10">SEO PLANS</h2>
                        <div>
                            {seoPlans.map((plan, index) => (
                                <div key={index}>
                                    <button className="accordion" onClick={() => togglePanel(`seo-${index}`)}>
                                        {plan.name} - {plan.price}
                                    </button>
                                    <div className="panel" style={{ maxHeight: openPanels[`seo-${index}`] ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                                        <div>
                                            <div>
                                                <ul className="list-disc p-5">
                                                    {plan.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div className="main">
                        <h2 className="text-center text-2xl font-bold my-10">{adsSeoPlan.name} - {adsSeoPlan.price}</h2>
                        <div>
                            {adsSeoPlan.details.map((section, index) => (
                                <div key={index}>
                                    <button className="accordion" onClick={() => togglePanel(`adsSeo-${index}`)}>
                                        {section.category}
                                    </button>
                                    <div className="panel" style={{ maxHeight: openPanels[`adsSeo-${index}`] ? '1000px' : '0', overflow: 'hidden', transition: 'max-height 0.3s ease' }}>
                                        <div>
                                            <div>
                                                <ul className="list-disc p-5">
                                                    {section.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pricing