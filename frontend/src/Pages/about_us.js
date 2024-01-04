import "../styles/about_us.css"
import headphoto from "../images/headphoto.svg";
import teamphoto from "../images/teamsphoto.svg";
import aman from "../images/team/aman.jpg";
import aniba from "../images/team/aniba.jpeg";
import ashish from "../images/team/ashish.jpeg";
import dushyanth from "../images/team/dushyanth.jpeg";
import harsh from "../images/team/harsh.jpeg";
import kavinash from "../images/team/kavinash.jpg";
import khushi from "../images/team/khushi.jpeg";
import lakshya from "../images/team/lakshya.jpeg";
import netra from "../images/team/netra.jpg";
import nityam from "../images/team/nityam.jpg";
import parth from "../images/team/parth.jpeg";
import shivam from "../images/team/shivam.jpeg";
import sneha from "../images/team/sneha.jpeg";
import yash from "../images/team/yash.jpeg";

export const About_us = () => {

    return (
        <div className="aboutpage">
            <div className="abouthead">MEET THE TEAM</div>
            <div className="aboutgrid">
                <div className="headtags">
                    <img src={aman} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Aman Raghuwanshi</p>
                        <p className="headrank">Finance Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={aniba} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Aniba Agarwal</p>
                        <p className="headrank">LS & Sparkle Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={ashish} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Ashish Motwani</p>
                        <p className="headrank">Marketing Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={dushyanth} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Dhushyanthan K</p>
                        <p className="headrank">PR & Branding Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={harsh} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Harsh Diwaker</p>
                        <p className="headrank">NED Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={kavinash} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Kavinash</p>
                        <p className="headrank">Design Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={khushi} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Khushi Bothra</p>
                        <p className="headrank">StartupExpo Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={lakshya} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Lakshya Patel</p>
                        <p className="headrank">Disrupt Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={netra} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Netra Pujar</p>
                        <p className="headrank">Media Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={nityam} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Nityam Pareek</p>
                        <p className="headrank">PMx & Encode Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={parth} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Parth Songire</p>
                        <p className="headrank">Initiatives Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={shivam} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Shivam Agarwal</p>
                        <p className="headrank">Internfair Head</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={sneha} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Sneha Singh</p>
                        <p className="headrank">Convenor</p>
                    </div>
                </div>
                <div className="headtags">
                    <img src={yash} alt="mike" className="aboutimg" />
                    <div className="headdetails">
                        <p className="headname">Yash Chauhan</p>
                        <p className="headrank">Design Head</p>
                    </div>
                </div>
            </div>

            <div className="modulesection">

            <div className="module">MODULES</div>
                <div className="modulegrid">
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">Design</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                                <li>Arunav Deka </li>
                                <li>Mathan Raj</li>
                                <li>Aryan Patel</li>
                                <li>Sanskar Ughade</li>
                                <li>C K Soorya</li>
                                <li>Dharshan G S</li>
                                <li>Bhuvanaa S</li>
                                <li>Suraj Kumar</li>
                                <li>Tarun Raj</li>
                                <li>Sparshika Mane</li>
                                <li>Savvy Thomas</li>
                                <li>Amol Satheesh</li>
                            </ul>
                        </div>
                    </div>
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">PMx</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                                <li>Arushi Kumar</li>
                                <li>Shreeya Gupta</li>
                                <li>Saundarya Keshari</li>
                                <li>Arin Gupta</li>
                                <li>Pujan Shah</li>
                                <li>Nishtha Khatri</li>
                            </ul>
                        </div>
                    </div>
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">Disrupt</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                                <li>Mansi Gupta </li>
                                <li>Rahul Kumar</li>
                                <li>Heet Patel </li>
                                <li>Shanu Sengar</li>
                            </ul>
                        </div>
                    </div>
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">INA</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                            <li>Drishti</li>
                            <li>Ayush Singh</li>
                            <li>Aniket Gupta</li>
                            <li>Jasmine </li>
                            <li>Ayush Mishra </li>
                            <li>Devesh Kamble </li>
                            <li>Manas Sinha </li>
                            <li>Sahil Mangtani</li>
                            <li>Ayush Singh </li>
                            <li>Akshat Tilak </li>
                            <li>Hemal Vadaliya</li>
                            </ul>
                        </div>
                    </div>
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">PR & B</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                                <li>Anirban Ghosh</li>
                                <li>Ayushi Mittal</li>
                                <li>Sitesh Goyal</li>
                                <li>Sandilya Bonu</li>
                                <li>Uttam Kumar Choudhary</li>
                                <li>Raunit Patel</li>
                                <li>Abhideep Bishui</li>
                            </ul>
                        </div>
                    </div>
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">Startup Expo</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                                <li>Vedangi Jawade</li>
                                <li>Elika</li>
                                <li>Harsh Agarwal</li>
                                <li>Yashika Kumawat</li>
                                <li>Adarsh Kumar</li>
                                <li>Aryan Agrawal</li>
                                <li>Anushka Verma</li>
                            </ul>
                        </div>
                    </div>
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">LS</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                                <li>Khushi Aggarawal</li>
                                <li>Krishna Vamsi</li>
                                <li>Narayan Pratap Singh</li>
                                <li>Rishi Kawa</li>
                                <li>Rohit Dayalani</li>
                                <li>Shashwat Srivastava</li>
                                <li>Shrutee Prakash</li>
                            </ul>
                        </div>
                    </div>
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">Marky</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                                <li>Krishnam Gupta</li>
                                <li>Krishna Agarwal</li>
                                <li>Kushagra Singh Sisodiya</li>
                                <li>Shubham Yadav</li>
                                <li>Yash Gupta</li>
                                <li>Yuvraj Singh</li>
                                <li>Abhinandan Tiwari</li>
                                <li>Neel Junarkar</li>
                                <li>Priyanshu</li>
                            </ul>
                        </div>
                    </div>
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">Sparkle</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                                <li>Bhargavi Divyam</li>
                                <li>Aradhya Singh</li>
                                <li>Mrinal Agrawal</li>
                                <li>Krishna Vamsi</li>
                                <li>Ambuj Mishra</li>
                            </ul>
                        </div>
                    </div>
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">InternFair</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                                <li>Divyansh Chandak</li>
                                <li>Arya Pandey</li>
                                <li>Ishika Bohra</li>
                                <li>Ayush Lohia</li>
                                <li>Sanat Nagpal</li>
                                <li>Prakhar Punj</li>
                                <li>Yoshita Banerjee</li>
                                <li>Shresth Rai</li>
                                <li>Shikhar Mishra</li>
                                <li>Shubhamdeep Lamba</li>
                                <li>Anurag Jha</li>
                            </ul>
                        </div>
                    </div>
                    <div className="moduletags">
                        <img src={teamphoto} alt="mike" className="moduleimg" />
                        <div className="moduledetails">
                            <p className="modulename">NED</p>
                            <p className="manager">Managers</p>
                            <ul className="managerlist">
                                <li>Atri Chattopadhyay </li>
                                <li>Ankit Kumar Singh</li>
                                <li>Sneha Das</li>
                                <li>Reema Tikadar</li>
                                <li>Tanu Siwach</li>
                                <li>Chinam Suraj Patra</li>
                                <li>Anushka Shruti</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}