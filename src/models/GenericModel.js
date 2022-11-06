function GenericModel() {
    //call super        
    Schema.apply(this, arguments);
    //add                                     
    this.add({
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
        isActive: {
            type: Boolean,
            default: true
        },
        isDeleted: {
            type: Boolean,
            default: false
        }
    });
};
util.inherits(AbstractEntitySchema, Schema);

module.exports = GenericModel;