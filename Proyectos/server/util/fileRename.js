


module.exports.addPrefix = (originalName) => {

    const date = new Date().toISOString();
    const prefix = date.replace(/-/g, "_").replace("T", "_").replace("Z", "").replace(".",":").replace(/:/g, "_");
    return `${prefix}_${originalName}`;
}

module.exports.addSufix = (originalName) => {

    const date = new Date().toISOString();
    const sufix = date.replace(/-/g, "_").replace("T", "_").replace("Z", "").replace(".",":").replace(/:/g, "_");
    return `${originalName}_${sufix}`;
}