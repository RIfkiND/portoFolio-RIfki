"use client"
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Skill from "@/components/Home/Skill"
export default function SkillPage(){
    return (
        <div className="p-6 overflow-x-hidden">
            <Header/>
            <Skill/>
            <Footer/>
        </div>
    )
}