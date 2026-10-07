import LanguageButton from "./LanguageButton"

export default function Languages(){
    return(
        <section className="text-center py-20">
            <h2>Choose a Language</h2>
            <div className="flex justify-center gap-4 mt-8">
                <LanguageButton 
                name = "Python"
                description="Learn Python Fundamentals"/>
                <LanguageButton 
                name = "Java"
                description="Learn Java Fundamentals"
                />
                <LanguageButton 
                name = "C++"
                description="Learn C++ Fundamentals"
                />
            </div>
        </section>
    )
}