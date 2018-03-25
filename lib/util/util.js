import _ from 'lodash'

let generateColumns = function (data = [], options = {}) {
    return _(_.head(data))
        .keys()
        .map(key => ({
            accessor: key,
            label: _.startCase(key),
            flexWidth: 1
        }))
        .value()
}

export {generateColumns}