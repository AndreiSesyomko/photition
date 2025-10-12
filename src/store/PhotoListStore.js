import {makeAutoObservable} from "mobx";

export default class PhotoListStore
{
    constructor()
    {
        this._target = {}
        this._photos = [
            {
                id: 1,
                title: 'Дженифер Коннели',
                description: 'Дженифер Коннели',
                photo: 'test_photos/dzhennifer-konnelli.jpg',
                user: {
                    id: 6,
                    username: 'user1',
                    avatar: ''
                },
                likes: 256,
                comments: 3,
                publishedAt: '2025-10-08'
            },
            {
                id: 2,
                title: 'Кэтрин Зета-Джонс',
                description: 'Кэтрин Зета-Джонс',
                photo: 'test_photos/CatherineZeta-Jones.jpg',
                user: {
                    id: 6,
                    username: 'user2',
                    avatar: ''
                },
                likes: 256,
                comments: 3,
                publishedAt: '2025-10-08'
            },
            {
                id: 3,
                title: 'Сальма Хайек',
                description: 'Сальма Хайек',
                photo: 'test_photos/salma-hajek-1.jpg',
                user: {
                    id: 3,
                    username: 'user3',
                    avatar: 'test_photos/salma-hajek-1.jpg'
                },
                likes: 256,
                comments: 3,
                publishedAt: '2025-10-08'
            },

        ];
        makeAutoObservable(this);
    }

    setPhotos(photos)
    {
        this._photos = photos;
    }

    get photos()
    {
        return this._photos;
    }

    setTarget(target) {
        this._target = target;
    }

    get target() {
        return this._target;
    }
}