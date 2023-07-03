
import { fetchCars } from "@/utils/api";
import Card from "./Card";
import { ReactElement } from "react";
import Image from "next/image";

const CardDetails = async (): Promise<JSX.Element> => {
    const allCars = await fetchCars();
    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <>
            <div className="row p-3">
                <div className="col-sm-4">
                    <h2>Car Catalogue</h2>
                </div>
                <div className="col-sm-4">
                    <form action="/action_page.php">
                        <div className="input-group mb-4">
                            <input type="search" placeholder="Mangufacture" aria-describedby="button-addon5" className="form-control" />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <Image src="/manufacture.svg" alt="hero_banner" className="img-fluid" width={30} height={30} />
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                    <form action="/action_page.php">
                        <div className="input-group mb-4">
                            <input type="search" placeholder="Car model" aria-describedby="button-addon5" className="form-control" />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <Image src="/car.svg" alt="hero_banner" className="img-fluid" width={30} height={30} />
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-12">
                    {
                        !isDataEmpty ? (<section>
                            <div className="container">
                                <div className="row ">

                                    {
                                        allCars?.map((car) =>
                                            <div className="col-sm-3 p-3">
                                                <Card car={car} />
                                            </div>

                                        )
                                    }
                                </div>

                            </div>
                        </section >) : (
                            <div><h2> OOPS No result !</h2></div>
                        )
                    }
                </div>
            </div>
        </>);

}


export default CardDetails;