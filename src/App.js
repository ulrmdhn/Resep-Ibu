import React, { useEffect, useState } from 'react'
import '../src/index.css'
import gambar from './images/our-story-1.jpg'
import { FaBars, FaTimes, FaChevronUp, CgAsterisk} from 'react-icons/fa'
import Aos from "aos";
import "aos/dist/aos.css";


export default function App () {
	useEffect(() => {
		Aos.init({ duration: 3000});
	}, [])

	const [ isOpen, setIsOpen ] = useState(false)
	let sideStyle = ''

	if (isOpen) {
		sideStyle = 'open'
	}

	const backToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<React.Fragment>
			<header>
				<div className='container'>
					<nav className='nav'>
						<div className='menu-toggle' onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <FaTimes /> : <FaBars />}
						</div>
						<ul className={`nav-list ${sideStyle} `}>
							<li className='nav-item'>
								<a href='index.html' className='nav-link'>
									Home
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									Menu
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									Reservations
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									News
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									Shop
								</a>
							</li>
							<li className='nav-item'>
								<a href='#' className='nav-link'>
									Contacts
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</header>
			<section className='hero' id='hero'>
				<div className='container'>
					<h2 className='sub-headline'>
						<span className='first-letter'>S</span>elamat <span>D</span>atang
					</h2>
					<h1 className='headline'>Resep Ibu</h1>
					<div className='headline-description'>
						<div className='seperator'>
							<div className='line line-left' />
							<div className='CgAsterisk'>
								<i className='fas fa-asterisk' />
							</div>
							<div className='line line-right' />
						</div>
						<div className='single-animation'>
							<h5>Jelajahi berbagai resep masakan rumahan</h5>
							<a href='#' className='btn cta-btn'>
								Explore
							</a>
						</div>
					</div>
				</div>
			</section>
			<section data-aos="fade-up" className='discover-our-story'>
				<div className='container'>
					<div className='restaurant-info'>
						<div className='restaurant-description padding-right animate-left'>
							<div className='global-headline'>
								<h2 className='sub-headline'>
									<span className='first-letter'>T</span>entang
								</h2>
								<h1 className='headline headline-dark'>Resep Ibu</h1>
								<div className='asterisk'>
									<i className='fas fa-asterisk' />
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi in minima adipisci
								cumque accusamus totam inventore eum tempore odit alias eligendi, enim reprehenderit
								possimus cupiditate vitae dolores! Nulla, numquam eveniet.
							</p>
							<a href='' className='btn body-btn'>
								About us
							</a>
						</div>
						<div className='restaurant-info-img animate-right'>
							<img src={gambar} alt='' />
						</div>
					</div>
				</div>
			</section>
			<section data-aos="fade-up" className='tasteful-recipes between'>
				<div className='container'>
					<div className='global-headline'>
						<div className='animate-top'>
							<h2 className='sub-headline'>
								<span className='first-letter'>B</span>erbagai
							</h2>
						</div>
						<div className='animate-bottom'>
							<h1 className='headline'>Resep Masakan Rumah</h1>
						</div>
						<div className='asterisk'>
							<i className='fas fa-asterisk' />
						</div>
					</div>
				</div>
			</section>
			<section className='discover-our-menu'>
				<div className='container'>
					<div className='restaurant-info'>
						<div className='image-group padding-right animate-left'>
							<img src='images/menu-group-1.jpg' alt='' />
							<img src='images/menu-group-2.jpg' alt='' />
							<img src='images/menu-group-3.jpg' alt='' />
							<img src='images/menu-group-4.jpg' alt='' />
						</div>
						<div className='restaurant-description animate-right'>
							<div className='global-headline'>
								<h2 className='sub-headline'>
									<span className='first-letter'>J</span>elajahi
								</h2>
								<h1 className='headline headline-dark'>Berbagai Resep</h1>
								<div className='asterisk'>
									<i className='fas fa-asterisk' />
								</div>
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi accusantium dolor unde
								repellat voluptatem at vitae fuga, minima quam possimus harum cupiditate, quaerat rerum
								asperiores. Qui totam mollitia similique dolore.
							</p>
							<a href='' className='btn body-btn'>
								Lihat menu lengkap
							</a>
						</div>
					</div>
				</div>
			</section>
			<section data-aos="fade-up" className='perfect-blend between'>
				<div className='container'>
					<div className='global-headline'>
						<div className='animate-top'>
							<h2 className='sub-headline'>
								<span className='first-letter'>C</span>ampuran
							</h2>
						</div>
						<div className='animate-bottom'>
							<h1 className='headline'>Sempurna</h1>
						</div>
					</div>
				</div>
			</section>
			<section className='culinary-delight'>
				<section className='discover-our-story'>
					<div className='container'>
						<div className='restaurant-info'>
							<div className='restaurant-description padding-right animate-left'>
								<div className='global-headline'>
									<h2 className='sub-headline'>
										<span className='first-letter'>C</span>ulinary
									</h2>
									<h1 className='headline headline-dark'>Delight</h1>
									<div className='asterisk'>
										<i className='fas fa-asterisk' />
									</div>
								</div>
								<p>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi in minima adipisci
									cumque accusamus totam inventore eum tempore odit alias eligendi, enim reprehenderit
									possimus cupiditate vitae dolores! Nulla, numquam eveniet.
								</p>
								<a href='' className='btn body-btn'>
									Make a reservation
								</a>
							</div>
							<div className='image-group'>
								<img className='animate-top' src='images/delight-group-1.jpg' alt='' />
								<img className='animate-bottom' src='images/delight-group-2.jpg' alt='' />
							</div>
						</div>
					</div>
				</section>
			</section>
			<footer>
				<div className='container'>
					<div className='back-to-top' onClick={backToTop}>
            <FaChevronUp size={16} />
					</div>
					<div className='footer-content'>
						<div className='footer-content-about animate-up'>
							<h4>Tentang Kami</h4>
							<div className='asterisk'>
								<i className='fas fa-asterisk' />
							</div>
							<p>Website ini dibuat oleh Aulia Ramadhan , 29 Desember 2020, Tangerang.</p>
						</div>
						<div className='footer-content-divider animate-bottom'>
							<div className='social-media'>
								<h4>Contact Us</h4>
								<ul className='social-icons'>
									<li>
										<a href='#'>
											<i className='fab fa-twitter' />
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='fab fa-facebook-square' />
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='fab fa-pinterest' />
										</a>
									</li>
									<li>
										<a href='#'>
											<i className='fab fa-instagram' />
										</a>
									</li>
								</ul>
							</div>
							<div className='newsletter-container'>
								<h4>Newsletter</h4>
								<form action='' className='newsleter-form'>
									<input className='newsletter-input' placeholder='Your email address' />
								</form>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</React.Fragment>
	)
}
