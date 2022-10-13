import Card from "./Card";

function ProfileCard(props){
    return(
        <Card title="Seokhwan Lee" backgroundColor="skyblue">
            <p>안녕하세요, 이석환입니다.</p>
            <p>저는 리액트를 사용해서 개발하고 있습니다.</p>
        </Card>
    );
}

export default ProfileCard;