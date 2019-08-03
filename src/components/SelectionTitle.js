import React from 'react'

export default function SelectionTitle({media,searchType, lang}) {


    const MediaType = ({media,lang}) =>{
      switch(lang){
            case 'cs': switch(media){
                case 'tv': return 'seriály';
                case 'movie': return 'filmy';
                default: return "";
            }
            case 'en': switch(media){
                case 'tv': return "TV-shows";
                case 'movie': return "Movies";
                default: return "";
            }
            default: return "";
        }
    }
    const SelectionType = ({searchType, lang})=>{
        switch(searchType){
            case "popular": return lang === 'cs'? 'populární' : 'popular';
            case "top_rated": return lang === 'cs'? 'Nejlépe hodnocené' : 'Top Rated';
            case "now_playing": return lang === 'cs'? 'Právě se hraje' : 'Now Playing';
            case "upcoming": return lang === 'cs'? 'Nadcházející' : 'Upcoming';
            case "on_the_air": return lang === 'cs'? 'Běží v TV' : 'On Air';
            case "airing_today":return  lang === 'cs'? 'Vysílá se dnes' : 'Airing Today';
                default: return "";
        }
    }

    return (
        <div>
            <h1>{MediaType({media,lang})}</h1>
            <p>{SelectionType({searchType, lang})}</p>
        </div>
    )
}
