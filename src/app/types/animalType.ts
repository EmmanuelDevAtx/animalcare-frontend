export type AnimalType = {
    canFeed: boolean;
    canPlay: boolean;
    needsBathroom:boolean;
    
    currentPoints: number;
    feedCount: number;
    // level: number | any;
    tired: number;

    name: string;
    // timeBathroomUse: string | number | any;
};

export type FoodType = {
    carrot: number;
    soap_medium: number;
    soap_premium: number;
    soap_simple: number;
};
