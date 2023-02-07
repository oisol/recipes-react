import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import pic1 from '../../assets/imgs/f1.jpg';
import pic2 from '../../assets/imgs/f2.jpg';
import pic3 from '../../assets/imgs/f3.jpg';
import pic4 from '../../assets/imgs/article-pic1.jpg'
import pic5 from '../../assets/imgs/article-pic2.jpg'
import pic6 from '../../assets/imgs/article-pic3.jpg'
import { Link } from "react-router-dom";


const Article = () => {

    return (
        <div>
            <Header/>
            <div className="flex flex-col mt-4 ">

            {/* Seção 1 */}
            <section className="flex flex-col items-center justify-center py-4">

                {/* Titulo */}
                <div className="select-none mb-2">
                    <span className="flex justify-center gap-2 sm:text-2xl text-xl font-bold">Receitas que você ama {style.heartIcon}</span>
                    <p className="sm:text-xl text-lg font-semibold">Em um lugar que você pode confiar</p>
                </div>

                {/* Carousel */}
                <picture className="flex sm:flex-row flex-col md:gap-6 sm:gap-2 gap-3 mt-5 sm:px-3">
                    <Link to="#" className="flex flex-col items-center">
                        <img className="sm:h-96 h-80 sm:w-72 w-11/12 sm:px-0 px-3 object-cover rounded-md hover:scale-110 duration-300" src={pic2} alt="Salmao em um prato branco" />
                        <span className="sm:font-medium font-semibold sm:text-base text-lg font-sans hover:text-orange-500">Salmão</span>
                    </Link>

                    <Link to="#" className="flex flex-col items-center">
                        <img className="sm:h-96 h-80 sm:w-72 w-11/12 sm:px-0 px-3 object-cover rounded-md hover:scale-110 duration-300" src={pic1} alt="Steak com legumes" />
                        <span className="sm:font-medium font-semibold sm:text-base text-lg font-sans hover:text-orange-500">Steak</span>
                    </Link>
            
                    <Link to="/4" className="flex flex-col items-center">
                        <img className="sm:h-96 h-80 sm:w-72 w-11/12 sm:px-0 px-3 object-cover rounded-md hover:scale-110 duration-300" src={pic3} alt="Xicara branca com café" />
                        <span className="sm:font-medium font-semibold sm:text-base text-lg font-sans hover:text-orange-500">Café</span>
                    </Link>
                </picture>

                {/* Texto */}
                <p className="w-5/6 mt-5 text-left">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus odit eligendi fugiat.
                    cupiditate esse ad doloremque molestiae delectus quasi nemo velit, <b>natus facere</b> mollitia quam.
                    Provident quam officiis aliquam harum, numquam dolor tenetur, facilis inventore, ad recusandae repellat non illum accus.
                </p>

            </section>

            {/* Seção 2 */}
            <section className="flex flex-col items-center select-none mt-2 px-3 py-4 bg-slate-100">

                {/* Titulo */}
                <span className="flex justify-center gap-2 sm:text-2xl text-xl font-bold">Feito para descobrir {style.mapIcon}</span>
                
                <div className="sm:w-5/6 w-11/12">
                    <div className="flex sm:flex-row flex-col justify-center items-center md:gap-16 gap-5 mt-6">
                        <img className="h-44 sm:w-72 w-auto object-cover rounded-md" src={pic4} alt="" />
                        <p className="md:w-1/3 sm:w-2/3 w-11/12 sm:h-44 h-auto overflow-y-scroll text-left">{style.text}</p>
                    </div>
                    <div className="flex sm:flex-row-reverse flex-col justify-center items-center md:gap-16 gap-5 mt-12">
                        <img className="h-44 sm:w-72 w-auto object-cover rounded-md" src={pic6} alt="" />
                        <p className="md:w-1/3 sm:w-2/3 w-11/12 sm:h-44 h-auto overflow-y-scroll text-left">{style.text}</p>
                    </div>
                    <div className="flex sm:flex-row flex-col justify-center items-center md:gap-16 gap-5 mt-12">
                        <img className="h-44 sm:w-72 w-auto object-cover rounded-md" src={pic5} alt="" />
                        <p className="md:w-1/3 sm:w-2/3 w-11/12 sm:h-44 h-auto overflow-y-scroll text-left">{style.text}</p>
                    </div>
                </div>

            </section>

            {/* Seção 3 */}
            <section className="flex flex-col items-center gap-2 mt-5 sm:mb-1 mb-4">
                <p className="sm:text-xl text-lg font-medium text-gray-800">Pronto para começar?</p>
                <Link to='/#recipes'>
                    <p className="sm:mt-2 mt-1 sm:text-lg text-base text-orange-400 font-bold hover:text-orange-600 bg-amber-100 hover:bg-amber-200 sm:p-3 p-2 rounded-full shadow-sm hover:shadow-md">Clique aqui</p>
                </Link>
            </section>

            </div>
            <Footer/>
        </div>
    )
};

const style = {
    mainContent: ``,
    heartIcon: 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-orange-500">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
        </svg>,
    mapIcon: 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-orange-500">
            <path fillRule="evenodd" d="M8.161 2.58a1.875 1.875 0 011.678 0l4.993 2.498c.106.052.23.052.336 0l3.869-1.935A1.875 1.875 0 0121.75 4.82v12.485c0 .71-.401 1.36-1.037 1.677l-4.875 2.437a1.875 1.875 0 01-1.676 0l-4.994-2.497a.375.375 0 00-.336 0l-3.868 1.935A1.875 1.875 0 012.25 19.18V6.695c0-.71.401-1.36 1.036-1.677l4.875-2.437zM9 6a.75.75 0 01.75.75V15a.75.75 0 01-1.5 0V6.75A.75.75 0 019 6zm6.75 3a.75.75 0 00-1.5 0v8.25a.75.75 0 001.5 0V9z" clipRule="evenodd" />
        </svg>,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in lobortis nulla. Ut in arcu tortor. Nulla sed lorem sodales, faucibus diam ac, ultricies dui. Suspendisse risus lacus, tincidunt consectetur nisl at, aliquet ullamcorper dui. Etiam vitae sapien."    
}

export default Article;