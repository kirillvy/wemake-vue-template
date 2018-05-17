// @flow

import type {
  CommentType,
  CommentPayloadType,
  StateType,
  RawCommentType } from '~/types'
import * as mutationTypes from '~/store/types'

export default {
  [mutationTypes.SET_COMMENTS]: (
    state: StateType, comments: Array<RawCommentType>
  ) => {
    const updatedComments: Array<CommentType> = []

    for (const comment of comments.slice(0, 10)) {
      const newOne = {
        ...comment,
        rating: 0 // try to comment out this line
      }
      updatedComments.push(newOne)
    }

    state.comments = updatedComments
  },

  [mutationTypes.UPDATE_RATING]: (
    state: StateType, {
      commentId,
      delta
    }: CommentPayloadType
  ) => {
    if (!state.comments) return

    const commentIndex = state.comments.findIndex((c: CommentType) => {
      return c.id === commentId
    })

    if (!state.comments || !state.comments[commentIndex]) return

    state.comments[commentIndex].rating += delta
  }
}
