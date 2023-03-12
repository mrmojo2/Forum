import { FaHome, FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa'
import { GiBookshelf } from 'react-icons/gi'
import { MdEmojiEvents } from 'react-icons/md'

export const linkList = [
    {
        id: 1,
        url: '/',
        icon: <FaHome />,
        text: 'Home'
    },
    {
        id: 2,
        url: 'profile',
        icon: <FaUserGraduate />,
        text: 'Profile'
    },
    {
        id: 3,
        url: 'syllabus',
        icon: <GiBookshelf />,
        text: 'Syllabus'
    },
    {
        id: 4,
        url: 'notice',
        icon: <FaChalkboardTeacher />,
        text: 'Notice'
    },
    {
        id: 5,
        url: 'events',
        icon: <MdEmojiEvents />,
        text: 'Events'
    }
]