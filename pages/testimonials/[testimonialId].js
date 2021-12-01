import { useRouter } from 'next/dist/client/router';

const TestimonialPage = () => {
    const router = useRouter();

    return (
        <h1 className="text-2xl text-center p-20">
            Hi from{' '}
            <span className=" text-purple-700"> {router.query.testimonialId}</span>
        </h1>
    );
};

export default TestimonialPage;
