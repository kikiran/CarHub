import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
    return (
        <>  
            <section>
                <div className="row hero">
                    <div className="col-sm-5 p-5">
                        <div className="p-2">
                            <h1 className="hero__title">Find, book, rent a car — quick and super easy !</h1>
                            <p><i>Streamline your car rental experience with our
                                effortless booking process.</i></p>
                            <CustomButton title="Explore cars" isDisabled={false} btnColor="btn btn-primary" btnType="button" />
                    </div>
                </div>
                <div className="col-sm-7">
                        <div className="p5 hero__background">
                        <Image src="/hero.png" alt="hero_banner" className="img-fluid" width={500} height={500} />

                    </div>
                </div>
            </div>
            </section>

        </>
    );
}

export default Hero;