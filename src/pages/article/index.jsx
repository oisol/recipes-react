import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import pic1 from '../../assets/imgs/f1.jpg';
import pic2 from '../../assets/imgs/f2.jpg';
import pic3 from '../../assets/imgs/f3.jpg';
import { Link } from "react-router-dom";


const Article = () => {

    return (
        <div>
            <Header/>

            <div className="flex flex-col mt-6 items-center justify-center">

                <section>
                    <span className="flex gap-2 text-2xl font-bold">Receitas que você ama {style.heartIcon}</span>
                    <p className="text-xl font-semibold">em um lugar que você pode confiar.</p>
                </section>
                
                <picture className="flex gap-6 mt-5">
                    <Link to="#">
                        <img className="h-96 w-72 object-cover rounded-md hover:scale-110 duration-300" src={pic2} alt="" />
                    </Link>

                    <Link to="#">
                        <img className="h-96 w-72 object-cover rounded-md hover:scale-110 duration-300" src={pic1} alt="" />
                    </Link>
            
                    <Link to="/4">
                        <img className="h-96 w-72 object-cover rounded-md hover:scale-110 duration-300" src={pic3} alt="" />
                    </Link>
                     
                </picture>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Non doloribus odit eligendi fugiat.
                    cupiditate esse ad doloremque molestiae delectus quasi nemo velit, natus facere mollitia quam.
                    Provident quam officiis aliquam harum, numquam dolor tenetur, facilis inventore, ad recusandae repellat non illum accus.
                </p>
            </div>

            <Footer/>
        </div>
    )
};

const style = {
    mainContent: ``,
    heartIcon: 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-red-500">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
        
}

export default Article;