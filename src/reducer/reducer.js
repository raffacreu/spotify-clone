export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finished developing....
    token: 'BQB9fWrG5ebjujHA1zSX_ruQ5Hy_mLV3KHvjBJWIzmTkmW_1q3Zoui9PVFr5NLtlCelOdn_iQdr8DGyjEatlp-qxCGkzT_oQtwZOgL3qJ9YeKJ3-7ZY_LazUnNt9nfhyygna1skSm31XYdZVyN10kTeasQVbZ8ii_tuHca7xS3_U0rkwEZPsv78BMAWdH0keXuf0pJE',
}

const reducer = (state, action) => {
    console.log(action)

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user 
            }

        case 'SET_TOKEN': 
            return {
                ...state,
                token: action.token,
            }

        case 'SET_PLAYLISTS': 
            return {
                ...state,
                playlists: action.playlists,
            }

        case 'SET_DISCOVERY_WEEKLY': 
            return {
                ...state,
                discovery_weekly: action.discovery_weekly,
            }

        default:
            return state
    }
}


export default reducer