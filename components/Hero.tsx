import Image from "next/image";

const Hero = () => {
    return (
        <>
            <div className="row">
                <div className="col-sm-5">
                    <div className="p-5">
                        <h1>Find, book, rent a car -- quick and super easy !</h1>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="p-5">
                        <Image src="/hero.png" alt="hero_banner" className="img-fluid" width={500} height={500} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default Hero;