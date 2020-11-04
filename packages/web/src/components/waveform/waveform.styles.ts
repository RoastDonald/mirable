import styled from 'styled-components';


export const WaveformContianer = styled.div`
   margin-top:2.4rem;
   margin-left:1.5rem;
   margin:2.4rem 1.5rem 0 1.5rem;
   display: flex;
   align-items: center;
  justify-content: center;
  background: transparent;


 
 
`;


export const WaveMeta = styled.div`
  margin-top:5px;
  width:100%;
  display:flex;
  justify-content:center;
`;


export const WaveMetaInner = styled.div`
display:flex;
justify-content:center;
width:80%;
  flex-wrap:wrap;
`;


export const WaveFormCta = styled.div`
position:absolute;
top:4px;
right:10px;
  display:flex;
  
  .icon:not(:last-of-type){
        margin-right:5px;
    }

 
`;



export const Wave = styled.div`
   width: 100%;
`;



export const OuterContainer = styled.div`
overflow:hidden;
position:relative;
  display: flex;  
  max-width:20rem;
  box-shadow: 0px 0px 20px rgba(102, 102, 102, 0.50);
  border-radius:${({theme})=>theme.borderRadius};
  display:flex;
  flex-direction:column;
    padding-bottom:1rem;

  .icon svg{
      fill:#9D9D9D;
  }
`;


export const CreatorMeta = styled.div`
  position:absolute;
  top:-10;
  left:0;
  width:16px;
  height:16px;
  margin-top:10px;
  background-color:${({theme})=>theme.palette.primary.main};
  border-radius:50%;
`;

export const PlayButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background: #EFEFEF;
  border-radius: 50%;
  border: none;
  outline: none;
  cursor: pointer;
  padding-bottom: 3px;
  &:hover {
    background: #DDD;
  }
`;