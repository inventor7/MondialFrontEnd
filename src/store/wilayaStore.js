import { defineStore } from 'pinia'
import axios from "../assets/lib/axios";


export const usewilayaStore = defineStore('wilaya', () => {

    // loading and error handling
    const loading = ref(false)
    const error = reactive({
        message: '',
        status: false
    })


    //data

    const wilayas = reactive([
        { id: 1, name: "Adrar", ascciName: "أدرار" },
        { id: 2, name: "Chlef", ascciName: "الشلف" },
        { id: 3, name: "Laghouat", ascciName: "الأغواط" },
        { id: 4, name: "Oum El Bouaghi", ascciName: "أم البواقي" },
        { id: 5, name: "Batna", ascciName: "باتنة" },
        { id: 6, name: "Béjaïa", ascciName: "بجاية" },
        { id: 7, name: "Biskra", ascciName: "بسكرة" },
        { id: 8, name: "Béchar", ascciName: "بشار" },
        { id: 9, name: "Blida", ascciName: "البليدة" },
        { id: 10, name: "Bouira", ascciName: "البويرة" },
        { id: 11, name: "Tamanghasset", ascciName: "تمنراست" },
        { id: 12, name: "Tébessa", ascciName: "تبسة" },
        { id: 13, name: "Tlemcen", ascciName: "تلمسان" },
        { id: 14, name: "Tiaret", ascciName: "تيارت" },
        { id: 15, name: "Tizi Ouzou", ascciName: "تيزي وزو	" },
        { id: 16, name: "Alger", ascciName: "الجزائر	" },
        { id: 17, name: "Djelfa", ascciName: "الجلفة" },
        { id: 18, name: "Jijel", ascciName: "جيجل" },
        { id: 19, name: "Sétif", ascciName: "سطيف" },
        { id: 20, name: "Saïda", ascciName: "سعيدة" },
        { id: 21, name: "Skikda", ascciName: "سكيكدة" },
        { id: 22, name: "Sidi Bel Abbès", ascciName: "سيدي بلعباس	" },
        { id: 23, name: "Annaba", ascciName: "عنابة	" },
        { id: 24, name: "Guelma", ascciName: "قالمة" },
        { id: 25, name: "Constantine", ascciName: "قسنطينة" },
        { id: 26, name: "Médéa", ascciName: "المدية	" },
        { id: 27, name: "Mostaganem", ascciName: "مستغانم" },
        { id: 28, name: "M'Sila", ascciName: "المسيلة" },
        { id: 29, name: "Mascara", ascciName: "معسكر" },
        { id: 30, name: "Ouargla", ascciName: "ورقلة" },
        { id: 31, name: "Oran", ascciName: "وهران" },
        { id: 32, name: "El Bayadh", ascciName: "البيض" },
        { id: 33, name: "Illizi", ascciName: "اليزي" },
        { id: 34, name: "Bordj Bou Arréridj", ascciName: "برج بوعريريج" },
        { id: 35, name: "Boumerdès", ascciName: "بومرداس" },
        { id: 36, name: "El Tarf", ascciName: "الطارف" },
        { id: 37, name: "Tindouf", ascciName: "تندوف" },
        { id: 38, name: "Tissemsilt", ascciName: "تسمسيلت" },
        { id: 39, name: "El Oued", ascciName: "الوادي" },
        { id: 40, name: "Khenchela", ascciName: "خنشلة" },
        { id: 41, name: "Souk Ahras", ascciName: "سوق أهراس" },
        { id: 42, name: "Tipasa", ascciName: "تيبازة	" },
        { id: 43, name: "Mila", ascciName: "ميلة" },
        { id: 44, name: "Aïn Defla", ascciName: "عين الدفلى" },
        { id: 45, name: "Naâma", ascciName: "النعامة" },
        { id: 46, name: "Aïn Témouchent", ascciName: "عين تموشنت" },
        { id: 47, name: "Ghardaïa", ascciName: "غرداية" },
        { id: 48, name: "Relizane", ascciName: "غليزان" },
        { id: 49, name: "El M'Ghair", ascciName: "المغير" },
        { id: 50, name: "El Menia", ascciName: "المنيعة" },
        { id: 51, name: "Ouled Djellal", ascciName: "أولاد جلال" },
        { id: 52, name: "Bordj Baji Mokhtar", ascciName: "برج باجي مختار" },
        { id: 53, name: "Béni Abbès", ascciName: "بني عباس" },
        { id: 54, name: "Timimoun", ascciName: "تيميمون" },
        { id: 55, name: "Touggourt", ascciName: "تقرت" },
        { id: 56, name: "Djanet", ascciName: "جانت" },
        { id: 57, name: "Ain Salah", ascciName: "عين صالح" },
        { id: 58, name: "Ain Guezzam", ascciName: "عين قزّام" },
    ])

    // methods






    return {

        //data
        loading,
        error,
        wilayas,


        //methods
       
    }
})