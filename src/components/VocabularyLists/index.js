import {useCreateVocabMutation} from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import React, { Component, useCallback, useState, useEffect, useMemo } from 'react'



function VocabularyLists(props){
    const {vocabListName= ''}= props
    const [createVocab, createVocabResult] = useCreateVocabMutation()

    const payload = {
        body: { vocab: 'testt' }
      }
  if(!createVocabResult){
    createVocab({ ...payload })

  }

  console.log('vocabListName',vocabListName)
    // console.log('createVocabResult', createVocabResult)
    return <div>
        <h2>Vocab List</h2>
        {vocabListName}</div>
}

export default VocabularyLists