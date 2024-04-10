const { fetchStats } = require("../src/practice-card.js");
const { renderError, reNumSVG} = require("../src/common.js")

module.exports = async (req, res) => {
    const { 
        id, 
        disable_cache
    } = req.query;

    res.setHeader("Content-Type", "image/svg+xml");
    if(!disable_cache){
        res.setHeader("Cache-Control", "public, max-age=43200"); // 43200s（12h） cache
    }

    const validId = /^[1-9]\d*$/;
    const clamp = (min, max, n) => Math.max(min, Math.min(max, n));

    if(!validId.test(id)) {
        return res.send(renderError(`"${id}"不是一个合法uid`, {darkMode: dark_mode}));
    }

    const stats = await fetchStats(id);
    //return res.send(renNumSVG(stats));
};
