import React from 'react'
import styles from './dropdown.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { productsData } from '../../data/products'

const DropDown = () => {



    const router = useRouter();

    const handleClick = (productId) => {
        router.push(`/products/${productId}`);
        console.log(`Redirect to product details page for product ID: ${productId}`);
    };

    return (
        <>
            {/* <!-- component --> */}
            <div className="group inline-block">
                <button className="flex items-center">
                    <span className="pr-1 flex-1">Products</span>
                    <span>
                        <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180
                                transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20">
                            <path
                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                    </span>
                </button>
                <ul className="bg-white border rounded-md transform scale-0 py-2 group-hover:scale-100 absolute
                          transition duration-150 ease-in-out origin-top min-w-32 text-12 font-normal w-72 z-10">
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">
                        <Link
                            href={`/products/${productsData[0].id}`}
                            onClick={() => handleClick(0)}
                        >
                            {productsData[0].title}
                        </Link>
                    </li>
                    <li className={styles.drop + " rounded-sm relative py-2 px-4 hover:bg-blue-800 hover:text-white"}>
                        <button className="w-full text-left flex items-center outline-none focus:outline-none">
                            <span className="pr-1 flex-1">{productsData[1].title}</span>
                            <span className="mr-auto">
                                <svg className="fill-current h-4 w-4
                                    transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20">
                                    <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </span>
                        </button>
                        <ul className="bg-white text-black border rounded-md absolute sm:top-0 sm:right-0 transition duration-150 ease-in-out origin-top-left min-w-32">
                            <li className="px-3 py-1 hover:bg-blue-800 hover:text-white">
                                <Link
                                    href={`/products/${productsData[2].id}`}
                                    onClick={() => handleClick(2)}
                                >
                                    {productsData[2].title}
                                </Link>
                            </li>
                            <li className="rounded-sm relative px-3 py-1 hover:bg-blue-800 hover:text-white">
                                <Link
                                    href={`/products/${productsData[3].id}`}
                                    onClick={() => handleClick(3)}
                                >
                                    {productsData[3].title}
                                </Link>
                            </li>
                            <li className="px-3 py-1 hover:bg-blue-800 hover:text-white">
                                <Link
                                    href={`/products/${productsData[4].id}`}
                                    onClick={() => handleClick(4)}
                                >
                                    {productsData[4].title}
                                </Link>
                            </li>
                            <li className="px-3 py-1 hover:bg-blue-800 hover:text-white">
                                <Link
                                    href={`/products/${productsData[5].id}`}
                                    onClick={() => handleClick(5)}
                                >
                                    {productsData[5].title}
                                </Link>
                            </li>
                            <li className="px-3 py-1 hover:bg-blue-800 hover:text-white">
                                <Link
                                    href={`/products/${productsData[6].id}`}
                                    onClick={() => handleClick(6)}
                                >
                                    {productsData[6].title}
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">
                        <Link
                            href={`/products/${productsData[7].id}`}
                            onClick={() => handleClick(7)}
                        >
                            {productsData[7].title}
                        </Link>
                    </li>
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">
                        <Link
                            href={`/products/${productsData[8].id}`}
                            onClick={() => handleClick(8)}
                        >
                            {productsData[8].title}
                        </Link>
                    </li>
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">
                        <Link
                            href={`/products/${productsData[9].id}`}
                            onClick={() => handleClick(9)}
                        >
                            {productsData[9].title}
                        </Link>
                    </li>
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">
                        <Link
                            href={`/products/${productsData[10].id}`}
                            onClick={() => handleClick(10)}
                        >
                            {productsData[10].title}
                        </Link>
                    </li>
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">
                        <Link
                            href={`/products/${productsData[11].id}`}
                            onClick={() => handleClick(11)}
                        >
                            {productsData[11].title}
                        </Link>
                    </li>
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">
                        <Link
                            href={`/products/${productsData[12].id}`}
                            onClick={() => handleClick(12)}
                        >
                            {productsData[12].title}
                        </Link>
                    </li>

                    {/* <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">Police Interceptor Vehicle</li>
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">Lidar Speed Device</li>
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">Radar Speed Gun</li>
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">Radar dispalay System with Camera</li>
                    <li className="rounded-sm py-2 px-4 hover:bg-blue-800 hover:text-white">Highway Patrol Vehicle</li> */}
                </ul>
            </div>
        </>
    )
}

export default DropDown