import './styles.css';
import Avatar from '../../components/Avatar/index';
import Header from '../../components/header/index';
import useTeacherDetail from '../../hooks/useTeacherDatail';


function TeacherDetail() {
  const { currentTeacherDetail } = useTeacherDetail();

  return (
    <div className='container'>
      <Header showBack />

      <div className='teacher-detail'>
        <Avatar image={currentTeacherDetail?.avatar || ''} />
        <h1>{currentTeacherDetail?.name}</h1>
        <span>{currentTeacherDetail?.stack}</span>

        <div className='horizontal-line line'></div>

        <h3>Bio</h3>
        <p>
          {currentTeacherDetail?.bio}
        </p>

      </div>
    </div>
  )
}

export default TeacherDetail;

