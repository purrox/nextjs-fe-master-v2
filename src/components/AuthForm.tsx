'use client'

import {useRouter} from "next/navigation";
import {register, singing} from "@/lib/api";
import {useCallback, useState} from "react";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Input from '@/components/Input';
import Link from "next/link";

const registerContent = {
    linkUrl: "/signin",
    linkText: "Already have an account?",
    header: "Create a new Account",
    subheader: "Just a few things to get started",
    buttonText: "Register",
};

const signinContent = {
    linkUrl: "/register",
    linkText: "Don't have an account?",
    header: "Welcome Back",
    subheader: "Enter your credentials to access your account",
    buttonText: "Sign In",
};

const initial = {email: "", password: "", firstName: "", lastName: ""}

type ConditionalMode = 'register' | 'signin'

interface IProps{
    mode: ConditionalMode
}

export default function AuthForm ({mode}:IProps){

    const [formState, setFormState] = useState({...initial})
    const router = useRouter()

    // @ts-ignore
    const handleSubmit = async (e) =>{
        e.preventDefault();

        try {
            if(mode === 'register'){
                await register(formState)
            }
            else{
                await singing(formState)
            }
            setFormState(initial);
            router.push('/home')
        }catch (e){
            console.error(e)
        }
    }

    const content = mode === 'register' ? registerContent : signinContent;

    return(
        <Card>
            <div className="w-full">
                <div className="text-center">
                    <h2 className="text-3xl mb-2">{content.header}</h2>
                    <p className="tex-lg text-black/25">{content.subheader}</p>
                </div>
                <form onSubmit={handleSubmit} className="py-10 w-full">
                    {mode === "register" && (

                        <div className="flex mb-8 justify-between">
                            <div className="pr-2">
                                <div className="text-lg mb-4 ml-2 text-black/50">
                                    First Name
                                </div>
                                <Input
                                    required
                                    placeholder="First Name"
                                    value={formState.firstName}
                                    className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                                    onChange={(e) =>
                                        setFormState((s) => ({ ...s, firstName: e.target.value }))
                                    }
                                />
                            </div>
                            <div className="pl-2">
                                <div className="text-lg mb-4 ml-2 text-black/50">Last Name</div>
                                <Input
                                    required
                                    placeholder="Last Name"
                                    value={formState.lastName}
                                    className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                                    onChange={(e) =>
                                        setFormState((s) => ({ ...s, lastName: e.target.value }))
                                    }
                                />
                            </div>
                        </div>
                    )}
                    <div className="mb-8">
                        <div className="text-lg mb-4 ml-2 text-black/50">Email</div>
                        <Input
                            required
                            type="email"
                            placeholder="Email"
                            value={formState.email}
                            className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                            onChange={(e) =>
                                setFormState((s) => ({ ...s, email: e.target.value }))
                            }
                        />
                    </div>
                    <div className="mb-8">
                        <div className="text-lg mb-4 ml-2 text-black/50">Password</div>
                        <Input
                            required
                            value={formState.password}
                            type="password"
                            placeholder="Password"
                            className="border-solid border-gray border-2 px-6 py-2 text-lg rounded-3xl w-full"
                            onChange={(e) =>
                                setFormState((s) => ({ ...s, password: e.target.value }))
                            }
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <div>
              <span>
                <Link
                    href={content.linkUrl}
                    className="text-blue-600 font-bold"
                >
                  {content.linkText}
                </Link>
              </span>
                        </div>
                        <div>
                            <Button type="submit" intent="secondary">
                                {content.buttonText}
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </Card>
    );
}