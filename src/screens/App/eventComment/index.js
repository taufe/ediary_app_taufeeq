import { MainHeader, MainWrapper } from '../../../components'
import { PostCommentList } from '../../../components/listComponent'
import { CreateButton } from './components'
import useEventComment from './hook'

const EventComment = ({ navigation }) => {
    const { onPressCreatePost } = useEventComment(navigation)
    return (
        <MainWrapper>
            <MainHeader showBackBtn title={'Event'} isIcon />
            <PostCommentList />
            <CreateButton onPressCreatePost={onPressCreatePost} />
        </MainWrapper>
    )
}

export default EventComment