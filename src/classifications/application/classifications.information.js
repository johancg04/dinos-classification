import {ClassificationApi} from "../infrastructure/classification-api.js";
import {ClassificationAssembler} from "../infrastructure/classification.assembler.js";
import {reactive} from "vue";

const classificationsApi = new ClassificationApi();

export const classificationsInformation = reactive({
    classifications: [],
    errors: [],

    loadClassifications(){
        this.errors = [];
        classificationsApi.getClassifications().then(response => {
            this.classifications = ClassificationAssembler.toEntitiesFromResponse(response);
        }).catch(error => {
            this.errors.push(error);
            this.classifications = []
        });
    }
})