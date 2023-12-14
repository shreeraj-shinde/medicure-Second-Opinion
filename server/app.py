from flask import Flask, request,jsonify
import numpy as np
import joblib as joblib
from flask_cors import CORS, cross_origin
app = Flask(__name__)
cors = CORS(app)


def convertDiseasetoArray(disease , age , gender):
    
    diseases = ["Acne"  , "Allergy" , "Diabetes" , "Fungal infection" , "Urinary tract infection" , "Malaria" , "Migraine"  , "Hepatitis B" ,"AIDS" ]
    input_array = []
    for i in diseases:
        if (i == disease):
            idx = diseases.index(i)
            input_array.append(idx)
    
    input_array.append(age) 
    input_array.append(gender) 
    
    input_array=np.array(input_array)
    input_array=np.array(input_array).reshape(1,-1)
    print("Input Array", input_array)
    return input_array




#Convert Symtoms Entered by User to Array
def convertSymtomstoArray(array):
    symtomps = ["itching"	,"skin_rash",	"nodal_skin_eruptions"	,"continuous_sneezing"	,"shivering"	,"chills"	,"joint_pain",	"stomach_pain"	,"acidity"	,"ulcers_on_tongue",	"muscle_wasting",	"vomiting",	"burning_micturition",	"spotting_ urination",	"fatigue",	"weight_gain"	,"anxiety",	"cold_hands_and_feets",	"mood_swings",	"weight_loss"	,"restlessness"	,"lethargy",	"patches_in_throat"	,"irregular_sugar_level"	,"cough"	,"high_fever"	,"sunken_eyes"	,"breathlessness"	,"sweating"	,"dehydration",	"indigestion"	,"headache"	,"yellowish_skin",	"dark_urine",	"nausea",	"loss_of_appetite",	"pain_behind_the_eyes"	,"back_pain"	,"constipation"	,"abdominal_pain",	"diarrhoea",	"mild_fever"	,"yellow_urine",	"yellowing_of_eyes",	"acute_liver_failure"	,"fluid_overload",	"swelling_of_stomach",	"swelled_lymph_nodes",	"malaise"	,"blurred_and_distorted_vision"	,"phlegm"	,"throat_irritation"	,"redness_of_eyes"	,"sinus_pressure"	,"runny_nose"	,"congestion"	,"chest_pain"	,"weakness_in_limbs",	"fast_heart_rate",	"pain_during_bowel_movements",	"pain_in_anal_region"	,"bloody_stool"	,"irritation_in_anus",	"neck_pain",	"dizziness",	"cramps"	,"bruising"	,"obesity"	,"swollen_legs",	"swollen_blood_vessels",	"puffy_face_and_eyes",	"enlarged_thyroid"	,"brittle_nails"	,"swollen_extremeties",	"excessive_hunger",	"extra_marital_contacts","drying_and_tingling_lips",	"slurred_speech"	,"knee_pain",	"hip_joint_pain"	,"muscle_weakness",	"stiff_neck",	"swelling_joints",	"movement_stiffness",	"spinning_movements",	"loss_of_balance",	"unsteadiness",	"weakness_of_one_body_side"	,"loss_of_smell",	"bladder_discomfort",	"foul_smell_of urine", "continuous_feel_of_urine"	,"passage_of_gases",	"internal_itching"	,"toxic_look_(typhos)",	"depression"	,"irritability"	,"muscle_pain"	,"altered_sensorium"	,"red_spots_over_body",	"belly_pain"	,"abnormal_menstruation"	,"dischromic _patches",	"watering_from_eyes",	"increased_appetite"	,"polyuria"	,"family_history"	,"mucoid_sputum"	,"rusty_sputum"	,"lack_of_concentration",	"visual_disturbances",	"receiving_blood_transfusion",	"receiving_unsterile_injections",	"coma"	,"stomach_bleeding",	"distention_of_abdomen"	,"history_of_alcohol_consumption",	"fluid_overload",	"blood_in_sputum",	"prominent_veins_on_calf"	,"palpitations"	,"painful_walking"	,"pus_filled_pimples",	"blackheads"	,"scurring",	"skin_peeling",	"silver_like_dusting",	"small_dents_in_nails",	"inflammatory_nails"	,"blister",	"red_sore_around_nose",	"yellow_crust_ooze"	]    
    symtoms_array = []

    for i in range(0,len(symtomps)):
        symtoms_array.append(0)

    for j in symtomps :
        for k in array:
            
            if(j == k):
              idx = symtomps.index(j)
              symtoms_array[idx] = 1
    input = np.array(symtoms_array)
    input= np.array(input).reshape(1,-1)
    return input

#Make predictions(Disease)
def Disease_prediction(input):
    MLP = joblib.load("./models/MLP.pkl")
    prediction = MLP.predict(input)
    return prediction
def Medicine_prediction(disease):
    MLP = joblib.load("./models/medical_MLP")
    predicion = MLP.predict(disease)
    return predicion


@app.route("/")
def index():
    return "hello World"


@app.route("/diagnose", methods = ['POST'])
@cross_origin(origins="*")
def diagnose():
    input_symptoms = request.get_json()
    input_symptoms = input_symptoms.get('array', [])
    print(input_symptoms)
    input = convertSymtomstoArray(input_symptoms)
    disease = Disease_prediction(input)

    return disease[0]

@app.route("/prescribe", methods = ['POST'])
@cross_origin(origins="*")
def prescribe():
    input_disease = request.get_json()
    input_disease = input_disease.get('array', [])
    print(input_disease)
    disease_input = convertDiseasetoArray(input_disease[0] , input_disease[1] , input_disease[2])
    medicine = Medicine_prediction(disease_input)
    print(medicine)
    return medicine[0]

if __name__ == "__main__":
    app.run(debug=True)