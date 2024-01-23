// pages/products/[id].js
import { useRouter } from 'next/router';
import { productsData } from '../../data/products'; // Assuming you have a data file
import Heading from '@/components/Heading/Heading';
import Image from 'next/image'

const ProductDetailPage = ({ productDetails }) => {
    const router = useRouter();
    const { id } = router.query;

    if (!productDetails) {
        // Handle loading state or errors
        return <div>Loading...</div>;
    }

    return (
        <>
            <Heading title={productDetails.title} />
            <p></p>
            <section className="details" id="details">
                <div className="mx-auto flex justify-center items-center my-[100px]">
                    <div className="flex justify-evenly items-center w-full flex-wrap px-6 sm:px-24">
                        <div className='w-full lg:w-[40%]'>
                            <div className="my-1 md:text-sm lg:text:md xl:text-lg drop-shadow-sm mb-2 sm:mx-0">
                                {productDetails.description}
                            </div>
                        </div>
                        <div className="w-full lg:w-[30%] py-5">
                            <Image src={productDetails.imageURL} alt='ANPR Image' width={400} height={300} className='rounded-md' />
                        </div>
                    </div>
                </div>
            </section>

            <section class="bg-blue-800 text-white">
                <div class="mx-auto w-[80%] py-[40px]">
                    <div class="flex justify-evenly items-center w-full flex-wrap px-6 sm:px-24">
                        <div class="w-full lg:w-[30%] py-5">
                            <Image src="/images/carousel/img1.jpg" alt='ANPR Image' width={400} height={300} className='rounded-md' />
                        </div>
                        <div class='w-full lg:w-[40%]'>
                            <div class="text-3xl md:text-4xl font-bold leading-32 my-4 drop-shadow-md" style={{ fontFamily: "roboto-slab" }}>
                                Key Features :-
                            </div>
                            <div class="my-1 md:text-sm lg:text:md drop-shadow-sm mb-2 sm:mx-0">
                                <ul class="list-disc">
                                    {productDetails.keyFeatures.map((feature, index) => (
                                        <li className="my-3 w-[80%]" key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export async function getServerSideProps(context) {
    const { params } = context;
    const productId = params.id;

    // Fetch product details from the data source
    const productDetails = productsData.find(product => product.id === productId);

    return {
        props: {
            productDetails,
        },
    };
}

export default ProductDetailPage;
