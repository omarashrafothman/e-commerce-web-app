'use client';

import { useState } from 'react';

const tabs = ['Description', 'Reviews', 'Questions'];

export default function ProductTabs() {
    const [activeTab, setActiveTab] = useState('Description');

    const renderContent = () => {
        switch (activeTab) {
            case 'Description':
                return (
                    <div className="mt-4 text-sm text-gray-700 space-y-2">
                        <h3 className="font-semibold">Origins</h3>
                        <p>
                            We work hard to ensure that the fruit and vegetables we sell are fresh and high in quality. If we don’t grow them ourselves, we source them from carefully chosen suppliers, preferring to buy locally whenever possible.
                        </p>
                        <h3 className="font-semibold">How to cook</h3>
                        <p>
                            From roasts, salads and soups to casseroles and cakes, Carrots will lend sweetness, texture and colour to an enormous number of recipes.
                        </p>
                    </div>
                );
            case 'Reviews':
                return (
                    <div className="mt-4 text-sm text-gray-700">
                        <p>⭐️⭐️⭐️⭐️☆ (1 customer review)</p>
                        <p className="mt-2">Great carrots, very fresh and tasty! - Jane D.</p>
                    </div>
                );
            case 'Questions':
                return (
                    <div className="mt-4 text-sm text-gray-700">
                        <p>Q: Are these carrots organic?</p>
                        <p>A: Yes, they are grown naturally without pesticides.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="mt-8">
            {/* Tabs */}
            <div className="flex gap-8 border-b border-gray-300">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 text-sm font-medium ${activeTab === tab
                            ? 'border-b-2 border-green-600 text-green-600'
                            : 'text-gray-600 hover:text-green-600'
                            }`}
                    >
                        {tab}
                        {tab === 'Reviews' && <span className="ml-1 text-gray-400">(18)</span>}
                        {tab === 'Questions' && <span className="ml-1 text-gray-400">(4)</span>}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="py-4">{renderContent()}</div>
        </div>
    );
}