import { useState } from 'react'
import Card from '../MiniComponents/Card'
import Navbar, { navigation } from '../Navbar'

const allCardData: object[] = require('../JSONData/courses.json')

const Courses = () => {
    const [searchData, setSearchData] = useState(allCardData)
    const searchItem = (query: string) => {
        if (!query) {
            setSearchData(allCardData)
            return
        }
        query = query.toLowerCase()

        const finalResult: object[] = []

        allCardData.forEach((item: any) => {
            if (
                item.category.toLowerCase().indexOf(query) !== -1 ||
                item.title.toLowerCase().indexOf(query) !== -1 ||
                item.description.toLowerCase().indexOf(query) !== -1
            ) {
                finalResult.push(item)
            }
        })
        setSearchData(finalResult)
        console.log(searchData)
    }
    navigation.forEach(element => {
        element.current = false
    });
    navigation[2].current = true
    return (
        <>
            <Navbar />
            <section className="text-gray-600 body-font">
                <h1 className='mt-2 text-center text-indigo-600 text-5xl'>Our Courses</h1>
                <h3 className='text-center text-xl mx-1'>Take a look at some of our most popular courses</h3>
                <div className='w-full flex items-center justify-center pt-1'>
                    <input type="search" name="searchCourses" id="course-search"
                        className='h-8 rounded-md w-2/3 border-[1px] border-gray-500
                text-black p-2 focus:outline-none' placeholder='Search for courses'
                        onChange={e => searchItem(e.target.value)} />
                </div>
                <div className="container px-5 pt-10 pb-32 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {
                            !searchData.length ? (
                                <h1 className='text-center text-xl text-indigo-600 w-full'>
                                    No Courses were found!
                                </h1>
                            ) :
                                (searchData.map((item: any) => (
                                    <Card {...item} key={item.category} />
                                ))
                                )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Courses