import * as types from './actionTypes';

//Выбор конкретного поста для детализации
export function selectPost(id) {
    return { type: types.POST_SELECTED, id }
};

//Добавление нового поста
export function addPost(post) {
    return { type: types.POST_ADDED, post }
};

//Отменить выбор поста
export function unselectedPost() {
    return { type: types.POST_UNSELECT }
};

//(Открыть | Скрыть) модальное окно в зависимости от статуса
export function modalStatusChange() {
    return { type: types.MODAL_STATUS_CHANGE }
};