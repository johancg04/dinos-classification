export class Classification {
    constructor({ name = '', slug = '' ,common_name = '', description = '', parent = '' }) {
        this.name = name;
        this.slug = slug;
        this.commonName = common_name;
        this.description = description;
        this.parent = parent;
    }
}