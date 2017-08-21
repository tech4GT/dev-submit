/**
 * Created by tech4GT on 8/21/17.
 */
/**
 * Parse profile.
 *
 * @param {object|string} json
 * @return {object}
 * @access public
 */
exports.parse = function(json) {
    if ('string' == typeof json) {
        json = JSON.parse(json);
    }

    var profile = {};
    profile.id = String(json.id);
    profile.name = json.firstname + " " + json.lastname;
    profile.email = json.email
    return profile;
};