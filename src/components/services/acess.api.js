import {http} from './http'

export const buscaGamePlataforma = (plataforma) => http.get('games',{params:{
    plataforma: `${plataforma}`
}
})

export const buscaGameId = (id) => http.get('games',{params:{
    id: `${id}`
}
})