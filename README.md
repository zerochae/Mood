[Mood_V2](https://github.com/zerochae/Mood_V2) 의 개발로 운영을 중지합니다.
<hr>

# Mood_V1

### Developer

|Zerochae|
|---|
|![ua](https://user-images.githubusercontent.com/84373490/149466662-281cf4cb-4a7c-4856-8aab-111904d645f3.jpg)|

### 개요

Classic Streaming Web

![mood_v1](https://user-images.githubusercontent.com/84373490/149471023-a2d9cd9e-bce5-4a97-9f4d-1e86e9fa189f.jpg)
![WorkList](https://user-images.githubusercontent.com/84373490/149471031-11b1bb0a-0cdb-4537-9ce4-d7410b8a0583.jpg)

### Skill Stack

<img src="https://img.shields.io/badge/Vue-4FC08D?style=for-the badge&logo=vue.js&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/Node.js-339933?style=for-the badge&logo=Node.js&logoColor=FFFFFF"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the badge&logo=MySQL&logoColor=FFFFFF"/>

### Architecture

![Mood Architect](https://user-images.githubusercontent.com/84373490/149470973-496755e2-8558-4cb3-a731-24ee5a697167.png)

### API

#### `Get` *https://moodserver.herokuapp.com/selectOne*

* 랜덤 Index의 데이터 1개를 받아 올 수 있습니다.

* **Example Response**
```Json
{
    "index": 5,
    "composer": "Sergei Rachmaninoff",
    "title": "Symphony No.2 I.Largo - Allegro moderato",
    "opus": "Op.27",
    "tonality": "e minor",
    "birth": "1906",
    "style": "Romantic",
    "category": "Romantic",
    "instrument": "Orchestra",
    "file": "https://imslp.org/images/6/6f/PMLP09270-uso20000304-01-rachmaninoff-symph2-mvtI_vbr.mp3",
    "img": "https://imslp.org/images/b/bc/Rachmaninov3.jpg"
}
```

`Get` *https://moodserver.herokuapp.com/composer*

* 작곡가와 이미지를 받을 수 있습니다.

* **Example Response**

```JSON
[
    {
        "composer": "Frederic Chopin",
        "img": "https://imslp.org/images/3/34/Chopin_Photo.jpg"
    },
    {
        "composer": "Sergei Rachmaninoff",
        "img": "https://imslp.org/images/b/bc/Rachmaninov3.jpg"
    },
    {
        "composer": "Ludwig van Beethoven",
        "img": "https://imslp.org/images/9/92/Beethoven2.jpg"
    },
    {
        "composer": "Claude Debussy",
        "img": "https://imslp.org/images/3/31/C_debussy.png"
    },
    {
        "composer": "Maurice Ravel",
        "img": "https://imslp.org/images/4/40/M_ravel.jpg"
    },
    ...
]
```

`Get` *https://moodserver.herokuapp.com/works/{composer_name}*

{composer_name} = 작곡가 이름 (ex. Ludwig van Beethoven)

* 작곡가에 대한 전체 작품 목록을 받을 수 있습니다.

* **Example Response**

```JSON
[
    {
        "index": 9,
        "composer": "Ludwig van Beethoven",
        "title": "Piano Sonata No.26",
        "opus": "Op.81a",
        "tonality": "Eb major",
        "birth": "1809",
        "style": "Classical",
        "category": "Classical",
        "instrument": "Piano",
        "file": "https://imslp.org/images/6/6b/PMLP01483-beethoven_op81a.mp3",
        "img": "https://imslp.org/images/9/92/Beethoven2.jpg"
    },
    {
        "index": 10,
        "composer": "Ludwig van Beethoven",
        "title": "Piano Sonata No.21",
        "opus": "Op.53",
        "tonality": "C major",
        "birth": "1803",
        "style": "Classical",
        "category": "Classical",
        "instrument": "Piano",
        "file": "https://imslp.org/images/b/b7/PMLP01474-beethoven_op53.mp3",
        "img": "https://imslp.org/images/9/92/Beethoven2.jpg"
    },
    {
        "index": 11,
        "composer": "Ludwig van Beethoven",
        "title": "Piano Sonata No.23",
        "opus": "Op.57",
        "tonality": "f minor",
        "birth": "1803",
        "style": "Classical",
        "category": "Classical",
        "instrument": "Piano",
        "file": "https://imslp.org/images/7/7c/PMLP01480-Beethoven_-_Sonata_Op_57_Appassionata.mp3",
        "img": "https://imslp.org/images/9/92/Beethoven2.jpg"
    }
    ...
]
```



### History

[Mood_V2](https://github.com/zerochae/Mood_V2)

