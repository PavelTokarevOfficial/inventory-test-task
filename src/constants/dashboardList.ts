import img1 from '@/assets/images/item-img-yellow.png'
import img2 from '@/assets/images/item-img-green.png'
import img3 from '@/assets/images/item-img-purple.png'

export type TDashboardList = {
    id: number,
    img: string,
    place: number,
    counter: number,
}

export const dashboardList: TDashboardList[] = [
    {
        id: 1,
        img: img1,
        place: 0,
        counter: 4,
    },
    {
        id: 2,
        img: img2,
        place: 1,
        counter: 2,
    },
    {
        id: 3,
        img: img3,
        place: 2,
        counter: 5,
    }
]