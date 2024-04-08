// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function Modal({ title, date,onClose }) {
    return (
        <div className='modal'>
            <h4>{title}</h4>
            <p>{date}</p>
            <button onClick={onClose}>close</button>
        </div>
    );
}


function LIST({title,date}) {

    let [like,setLike] = useState(0);

    let [dislike,setDislike] = useState(0);

    let [isModalOpen, setIsModalOpen] = useState(false);


    function likechange() {
        setLike(like+1);
    }

    function dislikechange() {
        setDislike(dislike+1);
    }

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }

    return (
        <>
            <div className='blog-list'>
                <div className='title-area'>
                    <div className='title-text'>{title}
                    <div className='recommend'></div>
                        <span onClick={likechange}>👍</span>{like}
                        <span onClick={dislikechange}>👎</span>{dislike}
                    </div>
                    <button onClick={openModal}>click</button>
                </div>
                <div className='date-text'>{date}</div>
                    {/* {isModalOpen && <Modal title={title} date={date} onClose={closeModal} />} */}
            </div>
            {isModalOpen && <Modal title={title} date={date} onClose={closeModal} />}
        </>
    )

}

function App() {
    
    return (
        <div className="App">
            
            <div className='list'>
                <LIST
                    title = "두산베어스 충격의 루징시리즈"
                    date = "4월 7일 발행"
                />

                <LIST
                    title = "두산베어스 이대로 괜찮은가?"
                    date = "4월 7일 발행"
                />

                <LIST
                    title = "두산베어스 4시리즈 연속 끝내기 패배"
                    date = "4월 7일 발행"
                />

                <LIST
                    title = "두산베어스 결국 해체하나?"
                    date = "4월 7일 발행"
                />

                <LIST
                    title = "두산베어스 감독 경질 결정"
                    date = "4월 7일 발행"
                />

                <LIST
                    title = "두산베어스 니들이 프로냐?"
                    date = "4월 7일 발행"
                />
            </div>



            {/* <div className='list'>
                <h4>{ title[0] }<span onClick={(likechange)}>👍</span>{like}
                <span onClick={(dislikechange)}>👎</span>{dislike}</h4>
                <p>4월 7일 발행</p>
            </div>

            <div className='list'>
                <h4>{ title[1] }</h4>
                <p>4월 6일 발행</p>
            </div>

            <div className='list'>
                <h4>{ title[2] }</h4>
                <p>4월 5일 발행</p>
            </div> */}

            {/* <Modal></Modal> */}
        </div>
    );
}

// function Modal( ){
//     return(
//         <div className='modal'>
//             <h4>제목</h4>
//             <p>날짜</p>
//             <p>상세내용</p>
//         </div>
//     )
// }

export default App;
