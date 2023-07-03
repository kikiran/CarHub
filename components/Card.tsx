import Image from "next/image";

import { CarProps } from "@/types";

interface CarCardProps {
    car: CarProps
}

const Card = ({ car }: CarCardProps) => {

    const { city_mpg, fuel_type, make, model, year } = car;

    return (
        <div className="card" >
            <div className="card-body">
                <Image src="/hero.png" alt="Card image" className="mx-auto d-block" width="100" height="100" />
                <h4 className="card-title">{make}</h4>
                <p className="card-text">{model} - {year} </p>
                <a href="#" className="btn btn-primary">See Profile</a>
            </div>
        </div>
    );
}

export default Card;