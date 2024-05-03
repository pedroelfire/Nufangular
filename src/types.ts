export interface FoodItem {
  food_id: number;
  food_name: string;
  food_type: string;
  food_url: string;
  brand_name: string;
  serving: {
    serving_id: string;
    serving_description: string;
    number_of_units: number;
    metric_serving_amount: number | string;
    metric_serving_unit: string;
  };
  nutrients: {
    calories: number | string;
    total_fat: number;
    saturated_fat: number;
    cholesterol: number;
    sodium: number;
    potassium: number;
    carbohydrates: number;
    dietary_fiber: number;
    sugars: number;
    protein: number;
    vitamin_a: number;
    vitamin_c: number;
  };
}

export interface FoodSearchResult {
  brand_name: string;
  food_description: string;
  food_id: number;
  food_name: string;
  food_type: string;
  food_url: string;
}
