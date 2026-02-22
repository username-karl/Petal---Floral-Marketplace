import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import {
    Leaf, LogOut, Package, User, Settings,
    Flower2, CreditCard, MapPin, Heart, Edit2, Shield, Gift, Plus, Search, ArrowRight, ChevronDown
} from 'lucide-react';
import KpiCard from '../components/KpiCard';

export default function Profile() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);

    // Artisan Shop States
    const [artisanTab, setArtisanTab] = useState('overview');
    const [orderTab, setOrderTab] = useState('all');
    const [productTab, setProductTab] = useState('live');

    // Mock Products Data
    const products = [
        { id: 1, name: "Wild Pampas", subtitle: "Dried Reed Grass", price: "$45", artisan: "Atelier Vert", image: "/images/product_pampas_1771726515735.png", tag: "Bestseller" },
        { id: 2, name: "Eucalyptus Cinerea", subtitle: "Preserved Foliage", price: "$28", artisan: "Maison Fleuri", image: "/images/product_eucalyptus_1771726530879.png" },
        { id: 3, name: "Cotton Softness", subtitle: "Natural Cotton Stems", price: "$32", artisan: "Studio Petal", image: "/images/product_cotton_1771726545396.png" },
        { id: 4, name: "Kanso Vase", subtitle: "Artisan Ceramic", price: "$55", artisan: "Ceramics by Jo", image: "/images/product_ceramic_vase_1771726567287.png" },
        { id: 5, name: "The Aurora", subtitle: "Hydrangea & Immortelle", price: "$49", artisan: "L'Herbier", image: "/images/product_aurora_hydrangea_1771726583839.png" },
        { id: 6, name: "Winter Wreath", subtitle: "Pine & Berries", price: "$65", artisan: "Forest & Co.", image: "/images/product_winter_wreath_1771726603408.png", tag: "Unique Piece" },
    ];

    const displayName = user?.name || 'Guest';
    const email = user?.email || 'guest@example.com';
    const role = user?.role || 'Customer';
    const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    const isArtisan = user?.role === 'artisan' || user?.role === 'ARTISAN' || user?.role === 'ROLE_FLORIST';

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-[#FDFCF8] text-stone-900 selection:bg-stone-200 selection:text-stone-900 font-sans">
            {/* ─── NAVIGATION (Simplified for Profile) ─── */}
            <nav className="fixed top-0 w-full z-50 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-stone-200 py-4">
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <Link to="/dashboard" className="text-xl font-serif tracking-tight text-stone-900">
                        Petal
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link to="/dashboard" className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors">
                            Return to Shop
                        </Link>
                        <button onClick={handleLogout} className="text-sm font-medium text-stone-900 hover:text-red-700 transition-colors">
                            Sign Out
                        </button>
                    </div>
                </div>
            </nav>

            {isArtisan ? (
                <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 min-h-[80vh]">
                    <div className="mb-8 flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-serif text-stone-900">Seller Centre</h1>
                            <p className="text-stone-500 text-sm mt-1">Manage your shop, products, and orders.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* SIDEBAR */}
                        <aside className="lg:col-span-3">
                            <div className="bg-white border border-stone-200 rounded-sm p-4 sticky top-24">
                                <div className="mb-6">
                                    <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3 px-3">Dashboard</h3>
                                    <ul className="space-y-1">
                                        <li>
                                            <button onClick={() => setArtisanTab('overview')} className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-colors ${artisanTab === 'overview' ? 'bg-stone-100 text-stone-900 font-medium' : 'text-stone-600 hover:bg-stone-50'}`}>Overview</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3 px-3">Orders</h3>
                                    <ul className="space-y-1">
                                        <li><button onClick={() => setArtisanTab('orders')} className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-colors ${artisanTab === 'orders' ? 'bg-stone-100 text-stone-900 font-medium' : 'text-stone-600 hover:bg-stone-50'}`}>My Orders</button></li>
                                        <li><button className="w-full text-left px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 rounded-sm transition-colors">Cancellations</button></li>
                                        <li><button className="w-full text-left px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 rounded-sm transition-colors">Return / Refund</button></li>
                                    </ul>
                                </div>
                                <div className="mb-6">
                                    <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3 px-3">Products</h3>
                                    <ul className="space-y-1">
                                        <li><button onClick={() => setArtisanTab('products')} className={`w-full text-left px-3 py-2 text-sm rounded-sm transition-colors ${artisanTab === 'products' ? 'bg-stone-100 text-stone-900 font-medium' : 'text-stone-600 hover:bg-stone-50'}`}>My Products</button></li>
                                        <li><button className="w-full text-left px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 rounded-sm transition-colors">Add New Product</button></li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-3 px-3">Finance</h3>
                                    <ul className="space-y-1">
                                        <li><button className="w-full text-left px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 rounded-sm transition-colors">My Income</button></li>
                                        <li><button className="w-full text-left px-3 py-2 text-sm text-stone-600 hover:bg-stone-50 rounded-sm transition-colors">Bank Accounts</button></li>
                                    </ul>
                                </div>
                            </div>
                        </aside>

                        {/* MAIN CONTENT */}
                        <div className="lg:col-span-9 space-y-6">
                            {artisanTab === 'overview' && (
                                <>
                                    {/* To Do List */}
                                    <div className="bg-white border border-stone-200 rounded-sm p-6">
                                        <h3 className="text-lg font-serif text-stone-900 mb-6 font-medium">To Do List</h3>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                            <div className="text-center group cursor-pointer">
                                                <p className="text-2xl font-light text-stone-900 group-hover:text-amber-600 transition-colors">0</p>
                                                <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Unpaid</p>
                                            </div>
                                            <div className="text-center group cursor-pointer border-l border-stone-100">
                                                <p className="text-2xl font-light text-stone-900 group-hover:text-amber-600 transition-colors">3</p>
                                                <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">To Process Shipment</p>
                                            </div>
                                            <div className="text-center group cursor-pointer border-l border-stone-100">
                                                <p className="text-2xl font-light text-stone-900 group-hover:text-amber-600 transition-colors">0</p>
                                                <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Pending Return</p>
                                            </div>
                                            <div className="text-center group cursor-pointer border-l border-stone-100">
                                                <p className="text-2xl font-light text-stone-900 group-hover:text-amber-600 transition-colors">1</p>
                                                <p className="text-xs text-stone-500 mt-1 uppercase tracking-wider">Sold Out</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Business Insights */}
                                    <div className="bg-white border border-stone-200 rounded-sm p-6">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className="text-lg font-serif text-stone-900 font-medium">Business Insights</h3>
                                            <button className="text-xs text-stone-500 hover:text-stone-900 flex items-center gap-1 transition-colors">More <ArrowRight size={14} /></button>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                            <KpiCard title="Visitors" value="124" />
                                            <KpiCard title="Page Views" value="459" />
                                            <KpiCard title="Orders" value="4" />
                                        </div>
                                    </div>
                                </>
                            )}

                            {artisanTab === 'orders' && (
                                <div className="bg-white border border-stone-200 rounded-sm">
                                    <div className="border-b border-stone-200">
                                        <nav className="flex px-2 overflow-x-auto" aria-label="Tabs">
                                            {['All', 'Unpaid', 'To Ship', 'Shipping', 'Completed', 'Cancelled'].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setOrderTab(tab.toLowerCase())}
                                                    className={`whitespace-nowrap py-4 px-6 text-sm font-medium border-b-2 transition-colors ${orderTab === tab.toLowerCase()
                                                        ? 'border-stone-900 text-stone-900'
                                                        : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                                                        }`}
                                                >
                                                    {tab}
                                                </button>
                                            ))}
                                        </nav>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex gap-4 mb-6">
                                            <div className="flex-1 relative">
                                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                                                <input type="text" placeholder="Search Order ID or Buyer Name" className="w-full pl-10 pr-4 py-2 text-sm border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 bg-stone-50" />
                                            </div>
                                            <button className="px-4 py-2 bg-stone-900 text-white text-sm font-medium rounded-sm hover:bg-stone-800 transition-colors">Search</button>
                                        </div>

                                        {/* Orders Table */}
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-left">
                                                <thead className="text-xs text-stone-500 uppercase bg-stone-50 border-y border-stone-200">
                                                    <tr>
                                                        <th className="px-4 py-3 font-medium">Products</th>
                                                        <th className="px-4 py-3 font-medium text-center">Total Price</th>
                                                        <th className="px-4 py-3 font-medium text-center">Status</th>
                                                        <th className="px-4 py-3 font-medium text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-stone-100">
                                                        <td className="px-4 py-4 min-w-[250px]">
                                                            <div className="flex gap-3 items-start">
                                                                <img src={products[0].image} className="w-12 h-12 object-cover border border-stone-200 rounded-sm flex-shrink-0" alt="" />
                                                                <div>
                                                                    <p className="text-stone-900 font-medium">{products[0].name}</p>
                                                                    <p className="text-stone-500 text-xs">x1</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-center font-medium text-stone-900 whitespace-nowrap">{products[0].price}</td>
                                                        <td className="px-4 py-4 text-center">
                                                            <span className="bg-amber-100 text-amber-800 text-[10px] uppercase font-bold px-2 py-1 rounded-sm whitespace-nowrap">To Ship</span>
                                                        </td>
                                                        <td className="px-4 py-4 text-center">
                                                            <button className="text-sm text-stone-600 border border-stone-300 px-3 py-1.5 rounded-sm hover:bg-stone-50 transition-colors whitespace-nowrap">Arrange Shipment</button>
                                                        </td>
                                                    </tr>
                                                    <tr className="border-b border-stone-100">
                                                        <td className="px-4 py-4 min-w-[250px]">
                                                            <div className="flex gap-3 items-start">
                                                                <img src={products[3].image} className="w-12 h-12 object-cover border border-stone-200 rounded-sm flex-shrink-0" alt="" />
                                                                <div>
                                                                    <p className="text-stone-900 font-medium">{products[3].name}</p>
                                                                    <p className="text-stone-500 text-xs">x2</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-center font-medium text-stone-900 whitespace-nowrap">$110</td>
                                                        <td className="px-4 py-4 text-center">
                                                            <span className="bg-blue-100 text-blue-800 text-[10px] uppercase font-bold px-2 py-1 rounded-sm whitespace-nowrap">Shipping</span>
                                                        </td>
                                                        <td className="px-4 py-4 text-center">
                                                            <button className="text-sm text-stone-600 hover:text-stone-900 transition-colors border-b border-stone-300 hover:border-stone-900 pb-0.5 whitespace-nowrap">Check Logistics</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {artisanTab === 'products' && (
                                <div className="bg-white border border-stone-200 rounded-sm">
                                    <div className="border-b border-stone-200 flex flex-col sm:flex-row justify-between sm:items-center pr-6 gap-4 sm:gap-0">
                                        <nav className="flex px-2 overflow-x-auto" aria-label="Tabs">
                                            {['All', 'Live', 'Sold Out', 'Reviewing', 'Violation'].map((tab) => (
                                                <button
                                                    key={tab}
                                                    onClick={() => setProductTab(tab.toLowerCase())}
                                                    className={`whitespace-nowrap py-4 px-6 text-sm font-medium border-b-2 transition-colors ${productTab === tab.toLowerCase()
                                                        ? 'border-stone-900 text-stone-900'
                                                        : 'border-transparent text-stone-500 hover:text-stone-700 hover:border-stone-300'
                                                        }`}
                                                >
                                                    {tab} {tab === 'Live' && '(5)'} {tab === 'Sold Out' && '(1)'}
                                                </button>
                                            ))}
                                        </nav>
                                        <div className="px-6 pb-4 sm:p-0 sm:pl-4 self-start sm:self-center">
                                            <button className="flex items-center gap-2 bg-stone-900 text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-stone-800 transition-colors whitespace-nowrap">
                                                <Plus size={16} /> Add New Product
                                            </button>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex gap-4 mb-6">
                                            <div className="flex-1 relative">
                                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" size={16} />
                                                <input type="text" placeholder="Search product name or SKU" className="w-full pl-10 pr-4 py-2 text-sm border border-stone-200 rounded-sm focus:outline-none focus:border-stone-400 bg-stone-50" />
                                            </div>
                                            <button className="px-4 py-2 bg-stone-100 text-stone-900 border border-stone-200 text-sm font-medium rounded-sm hover:bg-stone-200 transition-colors whitespace-nowrap">Category <ChevronDown size={14} className="inline ml-1" /></button>
                                        </div>

                                        {/* Products Table */}
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-sm text-left">
                                                <thead className="text-xs text-stone-500 uppercase bg-stone-50 border-y border-stone-200">
                                                    <tr>
                                                        <th className="px-4 py-3 font-medium">Product Name</th>
                                                        <th className="px-4 py-3 font-medium text-center">Price</th>
                                                        <th className="px-4 py-3 font-medium text-center">Stock</th>
                                                        <th className="px-4 py-3 font-medium text-center">Sales</th>
                                                        <th className="px-4 py-3 font-medium text-center">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {products.map((product) => (
                                                        <tr key={product.id} className="border-b border-stone-100 hover:bg-stone-50/50 transition-colors">
                                                            <td className="px-4 py-4 min-w-[250px]">
                                                                <div className="flex gap-3 items-start">
                                                                    <img src={product.image} className="w-12 h-12 object-cover border border-stone-200 rounded-sm flex-shrink-0" alt="" />
                                                                    <div>
                                                                        <p className="text-stone-900 font-medium line-clamp-2">{product.name}</p>
                                                                        <p className="text-stone-500 text-xs mt-1 border border-stone-200 inline-block px-1 bg-white">SKU: {product.name.substring(0, 3).toUpperCase()}-00{product.id}</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td className="px-4 py-4 text-center font-medium text-stone-900 whitespace-nowrap">{product.price}</td>
                                                            <td className="px-4 py-4 text-center">
                                                                {product.id === 2 ? <span className="text-red-500 font-medium">0</span> : <span className="text-stone-900">{Math.floor(Math.random() * 50) + 5}</span>}
                                                            </td>
                                                            <td className="px-4 py-4 text-center text-stone-500">
                                                                {Math.floor(Math.random() * 20)}
                                                            </td>
                                                            <td className="px-4 py-4 text-center">
                                                                <div className="flex items-center justify-center gap-3">
                                                                    <button className="text-sm text-stone-600 hover:text-stone-900 transition-colors font-medium">Edit</button>
                                                                    <button className="text-sm text-stone-400 hover:text-stone-900 transition-colors">More</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </main>
            ) : (
                <main className="pt-32 pb-24 max-w-5xl mx-auto px-6">

                    {/* ─── HEADER ─── */}
                    <header className="mb-16 text-center">
                        <div className="w-24 h-24 mx-auto bg-stone-100 rounded-full flex items-center justify-center text-3xl font-serif italic text-stone-800 mb-6 border border-stone-200">
                            {initials}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-2">
                            {displayName}
                        </h1>
                        <p className="text-stone-500 font-light tracking-wide uppercase text-xs">
                            {role} • Member since 2026
                        </p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* ─── LEFT: ACCOUNT DETAILS ─── */}
                        <div className="lg:col-span-2 space-y-12">

                            {/* Personal Information */}
                            <section>
                                <div className="flex items-center justify-between mb-6 border-b border-stone-200 pb-4">
                                    <h3 className="text-2xl font-serif text-stone-900">Personal Information</h3>
                                    <button onClick={() => setIsEditing(!isEditing)} className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 flex items-center gap-2 transition-colors">
                                        <Edit2 size={14} /> {isEditing ? 'Cancel' : 'Edit'}
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-1">
                                        <label className="text-xs uppercase tracking-wider text-stone-400 font-medium">Full Name</label>
                                        {isEditing ? (
                                            <input type="text" defaultValue={displayName} className="w-full bg-stone-50 border border-stone-200 px-3 py-2 text-stone-900 outline-none focus:border-stone-900 transition-colors" />
                                        ) : (
                                            <p className="text-stone-800 text-lg font-light">{displayName}</p>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs uppercase tracking-wider text-stone-400 font-medium">Email Address</label>
                                        <p className="text-stone-800 text-lg font-light">{email}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs uppercase tracking-wider text-stone-400 font-medium">Phone</label>
                                        {isEditing ? (
                                            <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-stone-50 border border-stone-200 px-3 py-2 text-stone-900 outline-none focus:border-stone-900 transition-colors" />
                                        ) : (
                                            <p className="text-stone-400 text-lg font-light italic">Not provided</p>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs uppercase tracking-wider text-stone-400 font-medium">Location</label>
                                        {isEditing ? (
                                            <input type="text" placeholder="Paris, France" className="w-full bg-stone-50 border border-stone-200 px-3 py-2 text-stone-900 outline-none focus:border-stone-900 transition-colors" />
                                        ) : (
                                            <p className="text-stone-400 text-lg font-light italic">Not provided</p>
                                        )}
                                    </div>
                                </div>

                                {isEditing && (
                                    <div className="mt-6 flex justify-end">
                                        <button className="bg-stone-900 text-white px-6 py-2 text-sm font-medium hover:bg-stone-800 transition-colors">
                                            Save Changes
                                        </button>
                                    </div>
                                )}
                            </section>

                            {/* ─── FORGET-ME-NOT / IMPORTANT DATES ─── */}
                            <section>
                                <div className="flex items-center justify-between mb-6 border-b border-stone-200 pb-4">
                                    <div className="flex items-center gap-3">
                                        <h3 className="text-2xl font-serif text-stone-900">Forget-Me-Not</h3>
                                        <span className="bg-stone-100 text-stone-600 text-[10px] uppercase font-bold px-2 py-1 tracking-wider rounded-sm">Automated</span>
                                    </div>
                                    <button className="text-xs uppercase tracking-widest text-stone-500 hover:text-stone-900 flex items-center gap-2 transition-colors">
                                        <Plus size={14} /> Add Date
                                    </button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Date Card 1 */}
                                    <div className="bg-white border border-stone-200 p-6 relative group hover:border-stone-400 transition-all">
                                        <div className="absolute top-4 right-4 text-stone-300 group-hover:text-stone-900 transition-colors">
                                            <Shield size={16} />
                                        </div>
                                        <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Upcoming</p>
                                        <h4 className="text-xl font-serif text-stone-900 mb-1">My Wife's Birthday</h4>
                                        <p className="text-sm text-stone-600 mb-4">February 14, 2026</p>

                                        <div className="flex items-center gap-2 my-4">
                                            <div className="h-1.5 flex-1 bg-stone-100 rounded-full overflow-hidden">
                                                <div className="h-full bg-stone-900 w-3/4"></div>
                                            </div>
                                            <span className="text-[10px] text-stone-500 font-medium whitespace-nowrap">3 Days Left</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <label className="custom-checkbox flex items-center gap-2 cursor-pointer">
                                                <div className="w-8 h-4 bg-stone-900 rounded-full relative">
                                                    <div className="absolute right-1 top-0.5 w-3 h-3 bg-white rounded-full"></div>
                                                </div>
                                                <span className="text-[10px] uppercase tracking-wider text-stone-900 font-bold">Auto-Send</span>
                                            </label>
                                        </div>
                                    </div>

                                    {/* Date Card 2 */}
                                    <div className="bg-stone-50 border border-stone-200 p-6 flex flex-col justify-center items-center text-center hover:bg-white transition-colors cursor-pointer border-dashed">
                                        <div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center text-stone-500 mb-3">
                                            <Plus size={20} />
                                        </div>
                                        <h4 className="font-serif text-lg text-stone-900">Add New Date</h4>
                                        <p className="text-xs text-stone-500 mt-1">Never miss an important moment.</p>
                                    </div>
                                </div>
                            </section>

                            {/* Recent Orders (Moved down) */}
                            <section>
                                <h3 className="text-2xl font-serif text-stone-900 mb-6 border-b border-stone-200 pb-4">Order History</h3>
                                <div className="space-y-4">
                                    {[1].map((i) => (
                                        <div key={i} className="flex items-center justify-between p-4 border border-stone-100 hover:border-stone-300 transition-colors bg-white">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-stone-100 flex items-center justify-center text-stone-400">
                                                    <Leaf size={20} />
                                                </div>
                                                <div>
                                                    <p className="font-serif text-lg text-stone-900">Autumn Collection #{1000 + i}</p>
                                                    <p className="text-xs text-stone-500 uppercase tracking-wide">Delivered • Oct {10 + i}, 2026</p>
                                                </div>
                                            </div>
                                            <button className="text-xs font-medium text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-900">View</button>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Petal Points Explainer (Replacing the specific component with cleaner UI) */}
                            {!isArtisan && (
                                <section>
                                    <h3 className="text-2xl font-serif text-stone-900 mb-6 border-b border-stone-200 pb-4">Petal Rewards</h3>
                                    <div className="bg-stone-900 text-stone-100 p-8 md:p-10 relative overflow-hidden">
                                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-stone-700/50"></div>
                                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                                            <div>
                                                <Gift className="w-8 h-8 mb-4 mx-auto md:mx-0 text-stone-300" strokeWidth={1.5} />
                                                <h4 className="font-serif text-xl mb-2">Earn Points</h4>
                                                <p className="text-xs text-stone-400 leading-relaxed">Shop naturally. Earn 10 points for every €100 spent on our sustainable collections.</p>
                                            </div>
                                            <div>
                                                <Shield className="w-8 h-8 mb-4 mx-auto md:mx-0 text-stone-300" strokeWidth={1.5} />
                                                <h4 className="font-serif text-xl mb-2">Unlock Tiers</h4>
                                                <p className="text-xs text-stone-400 leading-relaxed">Access exclusive tiers: Seedling, Bloom, and Perennial for special perks.</p>
                                            </div>
                                            <div>
                                                <Heart className="w-8 h-8 mb-4 mx-auto md:mx-0 text-stone-300" strokeWidth={1.5} />
                                                <h4 className="font-serif text-xl mb-2">Redeem</h4>
                                                <p className="text-xs text-stone-400 leading-relaxed">Use points for discounts on future orders or gift them to a friend.</p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            )}
                        </div>

                        {/* ─── RIGHT: MEMBERSHIP CARD ─── */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-32 space-y-8">
                                <div className="bg-white p-8 border border-stone-200 shadow-sm text-center">
                                    <p className="text-xs uppercase tracking-widest text-stone-500 mb-2">Current Status</p>
                                    <h2 className="text-3xl font-serif text-stone-900 mb-4">{isArtisan ? 'Artisan Studio' : 'Seedling Member'}</h2>
                                    <div className="w-full bg-stone-100 h-1 mb-4">
                                        <div className="bg-stone-900 h-1 w-3/4"></div>
                                    </div>
                                    <div className="flex justify-between text-[10px] uppercase tracking-wider text-stone-400 mb-6">
                                        <span>0 pts</span>
                                        <span>500 pts</span>
                                    </div>
                                    <p className="text-4xlfont-serif text-stone-900 mb-1">380</p>
                                    <p className="text-sm text-stone-500 mb-6">Petal Points Available</p>
                                    <button className="w-full py-3 border border-stone-900 text-stone-900 text-sm font-medium hover:bg-stone-900 hover:text-white transition-colors">
                                        View Rewards
                                    </button>
                                </div>

                                <div className="bg-stone-50 p-6 border border-stone-200">
                                    <h4 className="font-serif text-lg text-stone-900 mb-4">Account Settings</h4>
                                    <ul className="space-y-3 text-sm">
                                        <li><button className="flex items-center gap-3 text-stone-600 hover:text-stone-900"><CreditCard size={16} /> Payment Methods</button></li>
                                        <li><button className="flex items-center gap-3 text-stone-600 hover:text-stone-900"><MapPin size={16} /> Addresses</button></li>
                                        <li><button className="flex items-center gap-3 text-stone-600 hover:text-stone-900"><Settings size={16} /> Preferences</button></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </div>
    );
}
