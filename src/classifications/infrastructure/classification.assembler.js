import {Classification} from "../domain/model/classification.entity.js";

export class ClassificationAssembler{
    static toEntityFromResource(resource){
        return new Classification(resource);
    }

    static toEntitiesFromResponse(response){
        const classificationResponse = response.data;
        return  classificationResponse["results"].map(classification => {
            return this.toEntityFromResource(classification);
        })
    }
}