import {makeAutoObservable} from "mobx";

export default class PhotosStore
{
    constructor()
    {
        this._photos = [
            {
                id: 1,
                title: 'Photo',
                description: 'Photo',
                photo: '',
                user: {
                    id: 1,
                    username: 'user1',
                    avatar: ''
                },
                likes: 256,
                comments: 3,
                publishedAt: '2025-10-08'
            },
            {
                id: 1,
                title: 'Photo',
                description: 'Photo',
                photo: '',
                user: {
                    id: 1,
                    username: 'user1',
                    avatar: ''
                },
                likes: 256,
                comments: 3,
                publishedAt: '2025-10-08'
            },
            {
                id: 1,
                title: 'Photo',
                description: 'Photo',
                photo: '',
                user: {
                    id: 1,
                    username: 'user1',
                    avatar: ''
                },
                likes: 256,
                comments: 3,
                publishedAt: '2025-10-08'
            },
        ];
        makeAutoObservable(this);
    }

    setUser(user)
    {
        this._user = user;
    }

    get user()
    {
        return this._user;
    }
}