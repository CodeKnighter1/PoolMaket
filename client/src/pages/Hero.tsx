import { Waves, TrendingUp, Users } from 'lucide-react';



function Hero() {

    const stats = [
        { label: 'Active Listings', value: '6', icon: Waves },
        { label: 'Happy Customers', value: '2,000+', icon: Users },
        { label: 'Avg. Sale Time', value: '14 days', icon: TrendingUp }
    ];
    
    return (
        <section>
            <div className="bg-gradient-to-r from-sky-500 to-teal-600 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Find Your Perfect Pool
                    </h1>
                    <p className="text-xl md:text-2xl text-sky-100 mb-8">
                        Buy and sell pools with confidence on the premier pool marketplace
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-2">
                                <stat.icon className="h-8 w-8 text-sky-200" />
                            </div>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="text-sky-200">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero