import PlayerDetailsPage from "@/components/pages/player/sub-page/player-details"


const Page = ({params}:{params:{slug:string}}) => {
    console.log(params)
  return (
    <PlayerDetailsPage/>
  )
}

export default Page