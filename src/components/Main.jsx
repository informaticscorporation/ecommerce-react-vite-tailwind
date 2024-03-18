import {useState} from 'react';
import { CiSearch, CiShoppingCart } from 'react-icons/ci';
import watch from '../assets/watch.jpg';
import laptop from '../assets/laptop.jpg';
import keyboard from '../assets/keyboard.jpg';
import sunGlass from '../assets/glasses.jpeg';
import leatherWatch from '../assets/leatherWatch.jpg';
import mouse from '../assets/mouse.jpg';
import monitor from '../assets/monitor.jpg';

const Main = () => {
    let Products = [
        {
            img: sunGlass,
            desc: "lorem iiiifffjfjf",
            title: "Sun glasses",
            price: 40
        },
        {
            img: watch,
            desc: "lorem iiiifffjfjf",
            title: "Watch",
            price: 40
        },
        {
            img: laptop,
            desc: "lorem iiiifffjfjf",
            title: "Laptop",
            price: 40
        },
        {
            img: keyboard,
            desc: "lorem iiiifffjfjf",
            title: "Black Keyboard",
            price: 40
        },
        {
            img: leatherWatch,
            desc: "lorem iiiifffjfjf",
            title: "Leather Watch",
            price: 40
        },
        {
            img: mouse,
            desc: "lorem iiiifffjfjf",
            title: "Mouse",
            price: 40
        },
        {
            img: monitor,
            desc: "lorem iiiifffjfjf",
            title: "Monitor",
            price: 40
        },
        {
            img: sunGlass,
            desc: "lorem iiiifffjfjf",
            title: "Sun glasses",
            price: 40
        },
        {
            img: watch,
            desc: "lorem iiiifffjfjf",
            title: "Watch",
            price: 40
        },
        {
            img: laptop,
            desc: "lorem iiiifffjfjf",
            title: "Laptop",
            price: 40
        },
        {
            img: keyboard,
            desc: "lorem iiiifffjfjf",
            title: "Black Keyboard",
            price: 40
        },
        {
            img: leatherWatch,
            desc: "lorem iiiifffjfjf",
            title: "Leather Watch",
            price: 40
        },
        {
            img: mouse,
            desc: "lorem iiiifffjfjf",
            title: "Mouse",
            price: 40
        },
        {
            img: monitor,
            desc: "lorem iiiifffjfjf",
            title: "Monitor",
            price: 40
        }
        
    ];
    const [FilteredProduct, setFilteredProduct] = useState(Products)
    const searchHandler = (e) => {
        const FilteredArray = Products.filter((product) => product.title.toLocaleLowerCase().includes(e.target.value))
        if(FilteredArray.length != 0) {
            setFilteredProduct(FilteredArray)
        }

        

    }
    
    
    return (
        <div className='w-11/12 relative '>
            <div className='sticky top-0 z-10'>
                <div className='header flex justify-between items-center p-4 bg-white ml-20'>
                    <h1 className='text-3x1 font-bolt'>Informatics Corporation Community Shop</h1>
                    <div className="search flex justify-between items-center px-5 py-2 bg-gray-100 rounded">
                        <input type="text" placeholder="Search product" className='bg-transparent outline-0' onChange={searchHandler} />
                        <button><CiSearch/></button>
                    </div>
                </div>
                <div className="categories w-full flex space-x-8 px-2 py-10 ml-20">
                    <div className='bg-black text-white px-5 py-5 rounded-full drop-shadow-xl'>
                        <p>Watches</p>
                    </div>
                    <div className='bg-black text-white px-5 py-5 rounded-full drop-shadow-xl'>
                        <p>Laptop</p>
                    </div>
                    <div className='bg-black text-white px-5 py-5 rounded-full drop-shadow-xl'>
                        <p>Keyboard</p>
                    </div>
                    <div className='bg-black text-white px-5 py-5 rounded-full drop-shadow-xl'>
                        <p>SunGlass</p>
                    </div>
                    <div className='bg-black text-white px-5 py-5 rounded-full drop-shadow-xl'>
                        <p>LeatherWatch</p>
                    </div>
                    <div className='bg-black text-white px-5 py-5 rounded-full drop-shadow-xl'>
                        <p>Mouse</p>
                    </div>
                    <div className='bg-black text-white px-5 py-5 rounded-full drop-shadow-xl'>
                        <p>Monitor</p>
                    </div>
                </div>
                <div className="products grid grid-cols-2 xl:grid-cols-5 lg:grid-cols-3 gap-9 p-4 z-20 ml-20 scroll-m-0 ">
                    {FilteredProduct && FilteredProduct.map((product,idx) => {
                        return (
                            <div  className="product product h-[300px] bg-white drop-shadow-2x1 p-2 border" key={idx}>
                                <img src={product.img} alt={product.title} className='w-full h-[60%] object-cover p-2'></img>
                                <div className='m-2 bg-gray-100 p-2'>
                                    <h1 className='text-xl font-semibold'>{product.title}</h1>
                                    <p className='text-sm'>{product.desc}</p>
                                    <div className='flex justify-between items-center'>
                                        <p className='text-xl font-bold'>${product.price}.00</p>
                                        <CiShoppingCart size={'1.4rem'}/>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
export default Main;
