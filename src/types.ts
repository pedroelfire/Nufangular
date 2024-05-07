export interface FoodSearchResult {
  brand_name: string;
  food_description: string;
  food_id: number;
  food_name: string;
  food_type: string;
  food_url: string;
}

export interface Ingredient {
  food_id: number;
  food_name: string;
  calories: number;
  metric_serving_amount: number;
  metric_serving_unit: string;
  macros: {
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface FoodItem {
  food_id: string;
  food_name: string;
  food_type: string;
  food_url: string;
  servings: Serving;
}

export interface Serving {
  serving: ServingItem[];
}

export interface ServingItem {
  calcium: string; // Example: '14'
  calories: string;
  carbohydrate: string;
  cholesterol: string;
  fat: string;
  fiber: string;
  iron: string;
  measurement_description: string;
  metric_serving_amount: string;
  metric_serving_unit: string;
  monounsaturated_fat: string;
  number_of_units: string;
  polyunsaturated_fat: string;
  potassium: string;
  protein: string;
  saturated_fat: string;
  serving_description: string;
  serving_id: string;
  serving_url: string;
  sodium: string;
  sugar: string;
  vitamin_a: string;
  vitamin_c: string;
}
