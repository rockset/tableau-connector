(function dsbuilder(attr) {
    var urlBuilder = "jdbc:rockset://" + attr[connectionHelper.attributeServer] + "/" 
                                       + "?";
                                       +"schema="+ attr[connectionHelper.attributeDatabase]; 
                                       +",catalog=rockset";
    return [urlBuilder];
})
