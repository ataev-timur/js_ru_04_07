import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS } from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import { arrToMap } from '../helpers'
import {Map} from 'immutable'
import {Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    user: null,
    text: '',
})

const ReducerState = Record({
    entities: arrToMap(defaultComments, CommentRecord),
    loading: false,
    loaded: false
})

export default (commentsState = new ReducerState, action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return commentsState.setIn(['entities', randomId], new CommentRecord(payload.comment))

        case LOAD_ARTICLE_COMMENTS + START:
            return commentsState.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.setIn(['entities', payload.id], new ArticleRecord(response))
    }

    return commentsState
}