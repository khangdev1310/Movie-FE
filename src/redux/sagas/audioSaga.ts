import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { FetchAudioRequest, Root } from '../../models/audio.model';
import axiosClient from '../../services/axios';
import { fetchAudioFailure, fetchAudioSuccess } from '../actions/audioAction';
import { FETCH_AUDIO_REQUEST } from '../types/audioTypes';

const getAudio = (id: string) => {
  return axiosClient.get('/tracks', {
    params: {
      ids: id,
    },
  });
};

function* fetchAudioSaga(id: FetchAudioRequest) {
  try {
    const response: AxiosResponse<Root> = yield call(getAudio, id.id);

    yield put(
      fetchAudioSuccess({
        data: response.data,
      })
    );
  } catch (error: any) {
    

    yield put(fetchAudioFailure(error));
  }
}

function* audioSaga() {
  yield all([takeLatest(FETCH_AUDIO_REQUEST, fetchAudioSaga)]);
}

export default audioSaga;
