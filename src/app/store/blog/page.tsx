'use client'
import React from 'react'

function page() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-10 text-[#151515] space-y-10">
            {/* Hero */}
            <div className="bg-gradient-to-b from-black to-white rounded-md overflow-hidden p-10 text-white">
                <p className="text-sm">Date: 02.14.2023</p>
                <p className="text-sm">Category: Wellness</p>
                <p className="text-sm mb-2">Author: Admin</p>
                <h1 className="text-2xl md:text-3xl font-semibold max-w-lg">
                    Space for your heading, can be larger so don’t worry – large heading looks better
                </h1>
            </div>

            {/* Tags and Content */}
            <div className="space-y-4">
                <div className="flex flex-wrap gap-2 text-sm text-[#6A983C]">
                    <span className="bg-gray-100 px-2 py-1 rounded">Focus</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Relax</span>
                    <span className="bg-gray-100 px-2 py-1 rounded">Veggies</span>
                </div>

                <div className="space-y-4 text-gray-700">
                    <p>
                        There’s nothing like a warm cup of tea to start your morning—or maybe you’re all about an iced hibiscus on a sunny Saturday afternoon. Whether you’re craving chamomile or are looking to ditch your coffee dependency, here’s our go-to guide on incorporating a few new teas into your daily routine.
                    </p>

                    <h2 className="font-semibold text-[#151515]">Morning Ritual // 9:00 AM</h2>
                    <p>
                        What makes a morning coffee any better than a caffeine jolt? Switch out that dark roast and give Earl Grey a whirl. The citrus flavor in your cup is guaranteed to start the morning on a high note. For extra points: enjoy it with a scone. Sip slowly, let the milk meld. The combination of cinnamon, black tea, and citrus is an instant classic. Breathe in deeply, focus, and re-center yourself for any day.
                    </p>

                    <h2 className="font-semibold text-[#151515]">Mid-day Boost // 3:00 PM</h2>
                    <p>
                        If you’re like most tea drinkers, get in a fruity iced green tea instead. These simple mid-day pick-me-ups are the ideal option to stay refreshed. Mint and lemongrass can perk up the mind and soothe your belly, with a slice of lemon, and you’ll feel refreshed and ready to tackle any task.
                    </p>

                    <h2 className="font-semibold text-[#151515]">Evening Calm // 8:00 PM</h2>
                    <p>
                        Skip over the fizzy sodas, light your favorite candles, and fire up the Netflix series. It’s time to wind down after the day. Grab yourself a soothing cup of lavender chamomile tea and bring in some well-deserved self-love.
                    </p>
                </div>

                {/* Share */}
                <div className="flex gap-4 text-sm">
                    <span className="underline cursor-pointer">Share</span>
                    <span className="cursor-pointer">Facebook</span>
                    <span className="cursor-pointer">Pinterest</span>
                    <span className="cursor-pointer">Twitter</span>
                    <span className="cursor-pointer">LinkedIn</span>
                </div>
            </div>

            {/* Leave a reply */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Leave a reply</h3>
                <p className="text-sm text-gray-500">Already have an account? <span className="underline cursor-pointer">Sign in to leave a reply.</span></p>
                <div className="flex flex-col gap-2 md:flex-row">
                    <input type="text" placeholder="Name" className="border rounded px-3 py-2 w-full md:w-1/2" />
                    <input type="email" placeholder="Email address" className="border rounded px-3 py-2 w-full md:w-1/2" />
                </div>
                <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" />
                    Save my name, email, and website in this browser for the next time I comment.
                </label>
                <textarea placeholder="Share your comments" className="border rounded px-3 py-2 w-full h-28"></textarea>
                <button className="bg-[#6A983C] text-white px-6 py-2 rounded">Send a comment</button>
            </div>

            {/* Comments */}
            <div className="space-y-4">
                <h3 className="text-xl font-semibold">Comments</h3>
                <div className="border p-4 rounded space-y-2">
                    <p className="text-sm text-gray-600">Author <span className="bg-[#6A983C] text-white px-2 py-1 text-xs rounded">Admin</span></p>
                    <p className="text-gray-700">
                        Hi there! Yes, working hard with this team brings me a lot of pride. I truly poured a lot of love into it because it was so interesting, all the learning, helpful people and the work itself.
                    </p>
                </div>
                <div className="border p-4 rounded space-y-2">
                    <p className="text-sm text-gray-600">User <span className="bg-gray-300 text-black px-2 py-1 text-xs rounded">User</span></p>
                    <p className="text-gray-700">
                        Don’t worry about tea, we are happy to read a new article. This team is absolutely fantastic, thanks for all the support and the wonderful work you’ve all been doing. A joy to be a part of it.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default page