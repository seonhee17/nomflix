import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { styled } from "styled-components";
import { getMovie,IMovieDetail,makeBgPath} from "../api";




/* const Background  = styled(motion.div)`
    position: fixed;
    top:0; left: 0; bottom: 0; right: 0;
    background: rgba(0, 0, 0, 0.8);
    
 `; */
/* const Detail  = styled(motion.div)`
    position: "absolute";
    width: "40vw";
    height: "80vh";
    background-color: "red";
    top: 50;
    left: 0;
    right: 0;
    margin: "0 auto";
    border-radius: 15px ;
    
    img{
        width : 100%;
    }
 `; */

const ModalBackground = styled.div`
    /* 화면에 꽉 차게 하는 코드 */
    position: fixed;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.35); // 어두운 배경색
    z-index : 250; // 위에서 만든 도화지보다 높게 준다.
    cursor: pointer; // 누르면 홈으로 이동
`;


const DetailWrapper  = styled(motion.div)`
   /* 화면에 꽉 차게 하는 코드(여기서는 너비를 꽉 채우는 용도) */
  position: fixed;
  top: 50%;
  left: 50%;
  
  /* 위아래 너비를 준 상태에서 가로 50%, 세로 50%를 이동시킬 수 있다 (= 한가운데 배치) */
  transform: translate(-50%, -50%);
  
  /* 위의 overlay 배경보다 한 단계 더 높게 배치 */
  z-index: 300;
 `;
const Detail  = styled(motion.div)`
    position: "absolute";
    width: "40vw";
    height: "80vh";
    background-color: "red";
    top: 50;
    left: 0;
    right: 0;
    margin: "0 auto";
    border-radius: 15px ;
 img{
     width : 100%;
     border-radius: inherit;
     background-size : contain;
     height: 100%;
    // border-radius: 30px;
  }
`;

const ImageWrapper = styled.div`
    display: flex;
    position: relative;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`;



const OverView = styled.div`
    display: block;
    background-color: black;
    color: white;
    font-size: 16px;
    span ,p{
        width: 100%;
        display : inline-block;
        text-align : left;
        line-height: 25px;

    }
`;

const Title = styled.span`
    font-size: 48px;
    font-weight: 700;
    text-align: left;
`;

const CloseBtn = styled(motion.svg)`

	// .modal을 기준으로 절대 배치
    position: absolute;
    top: 15px;
    right: 20px;
    cursor: pointer;
    width: 40px;
    color: #4a3d3dba;
    z-index: 280;
    float: right;
    display: inline;


`;

interface IMovieInfo{
    selectedId :string;
    closeFn : Function;
}

function MovieDetail ({ selectedId ,closeFn } : IMovieInfo){

    const { isLoading , data } = useQuery<IMovieDetail>({
        queryKey: "movieInfo",
        queryFn : () => getMovie(selectedId)
    });

    return (  
            <>
                <ModalBackground />
                <DetailWrapper
                                initial = {{ opacity : 0}}
                                animate = {{ opacity : 1}}
                                exit = {{ opacity : 0 }}   >
                    <Detail>
                       <ImageWrapper>
                            <CloseBtn onClick={()=> closeFn("")}
                                fill="currentColor" 
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" >
                                <motion.path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" />
                            </CloseBtn>
                            <img src={makeBgPath(data?.backdrop_path || "")} alt={data?.title}/>    
                        </ImageWrapper>
                        <OverView>
                            <Title>{data?.title || "" }</Title>
                            <span>평점 : {data?.vote_average || ""}</span>
                            <span>선호도 :{data?.vote_count || ""}</span>
                            <p>{data?.overview}</p>
                        </OverView>
                    </Detail>
                </DetailWrapper>
            </>
    ); 

}
export default MovieDetail;