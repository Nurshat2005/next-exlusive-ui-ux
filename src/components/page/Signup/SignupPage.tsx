'use client';
import Image from 'next/image';
import scss from './SignupPage.module.scss';
import img from '@/assets/images/signin.svg';

const SignupPage = () => {
  return (
    <div className={scss.SignupPage}>
      <div className="containers">
        <div className={scss.content}>
          <Image src={img} alt="img" />
          <div className={scss.context_text}>
            <h1>Create an account</h1>
            <span>Enter your details below</span>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email or Phone Number" />
            <input type="text" placeholder="Password" />
            <button>Create Account</button>
            <button>Sign up with Google</button>
            <span>
              Already have account? <a href="#">Log in</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
