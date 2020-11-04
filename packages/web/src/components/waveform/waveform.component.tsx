import React,{useEffect,useState,useRef} from 'react'
import WaveSurfer, { WaveSurferParams } from 'wavesurfer.js';
import Tag from '../tag/tag.component';
import { WaveformContianer, OuterContainer, Wave, WaveFormCta, WaveMeta,WaveMetaInner,CreatorMeta} from './waveform.styles';
import AudioControll from '../../ui/audio-controll/audio-controll.ui';
import Like from '../../ui/like/like.ui';
import Bookmark from './../../ui/bookmark/bookmark.ui';

const url = 'https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3';




const waveSurferOpts = (ref:HTMLElement):WaveSurferParams=>({
  barWidth: 3,
  cursorWidth: 1,
  container: ref,
  backend: 'WebAudio',
  height: 15,
  progressColor: '#B353F0',
  // responsive: true,
  barRadius: 3,
  fillParent:true,
  partialRender: true,
  normalize: true,
  waveColor: '#9D9D9D',
  cursorColor: 'transparent',
});



const Waveform = () => {
  const waveSurfer = useRef<WaveSurfer | null>(null);
  const [isLoaded,setLoaded] = useState(false);
  const waveContainerRef = useRef<HTMLDivElement>(null);



  const [isPlaying,setPlaying] = useState(false);
  const handlePlay = ()=>{
    setPlaying(!isPlaying);
    waveSurfer.current?.playPause();
  }

    useEffect(()=>{
      const opts = waveSurferOpts(waveContainerRef.current as HTMLDivElement);
      waveSurfer.current = WaveSurfer.create(opts);

      waveSurfer.current.on('ready',()=>{
        setLoaded(true);
      });

      waveSurfer.current.load(url);

      return () => waveSurfer.current?.destroy();
    },[url]);

        return (
          <OuterContainer>
            <WaveFormCta>
                <Bookmark className="artwork__icon"/>
                <Like className="artwork__icon"/>
            </WaveFormCta>
            <WaveformContianer >
              <AudioControll onClick={handlePlay} isPlaying={isPlaying} className="waveform__icon" size="medium"/> 
              <Wave ref={waveContainerRef} onClick={()=>setPlaying(false)}/>
            </WaveformContianer>
            <WaveMeta>
              <WaveMetaInner>
              <Tag/>
              <Tag/>
              <Tag/>
              <Tag/>
              <Tag/><Tag/>
              <Tag/>
              <Tag/>
              <Tag/>
              <Tag/><Tag/>
              <Tag/>
              </WaveMetaInner>
            </WaveMeta>
            {/* <CreatorMeta>
              
            </CreatorMeta> */}
          </OuterContainer>
        

        );
}

export default Waveform;




