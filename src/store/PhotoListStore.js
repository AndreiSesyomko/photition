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
                description: 'What is Lorem Ipsum?\n' +
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n' +
                    '\n' +
                    'Why do we use it?\n' +
                    'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\n' +
                    '\n' +
                    '\n' +
                    'Where does it come from?\n' +
                    'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\n' +
                    '\n' +
                    'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
                photo: 'test_photos/macos-sierra-mountain-peak-sunset-evening-stock-5k-3840x2160-3987.jpg',
                user: {
                    id: 6,
                    username: 'user1',
                    avatar: ''
                },
                photo_thumbnail: 'test_photos/macos-sierra-mountain-peak-sunset-evening-stock-5k-3840x2160-3987.jpg',
                likes: 256,
                comments: 3,
                publishedAt: '2025-10-08',
                status: 'PENDING'
            },
            {
                id: 2,
                photo_thumbnail: 'test_photos/dzhennifer-konnelli.jpg',
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
                publishedAt: '2025-10-08',
                status: 'APPROVED'
            },
            {
                id: 3,
                photo_thumbnail: 'test_photos/dzhennifer-konnelli.jpg',
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
                publishedAt: '2025-10-08',
                status: 'REJECTED'
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