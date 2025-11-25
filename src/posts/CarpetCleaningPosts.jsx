import React from "react";
import { Container, Row, Col, Button, Form, Card, Image, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";

const CarpetCleaningPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
    
        axios.get(`https://admin.osmcleaningservices.au/api/exit_clean_posts`)
        .then(res => setPosts(res.data))
        .catch(error => console.error(error));
   
    }, []);

    function truncateToWords(text, wordCount) {
    const words = text.trim().split(/\s+/); // handles multiple spaces
    return words.length > wordCount
        ? words.slice(0, wordCount).join(' ') + '...'
        : text;
    }

    return (
        <>
            {/* our Service */}
            <section className="banner-bottom">
                <Container className="py-5">
                    <div className="top-heading text-center pb-4 mb-3">
                        <p className="">Is This Service Right for You?</p>
                        <h2>Transform Your Space with Our Service</h2>
                    </div>
                    <div className="grid gap-y-4">
                        <Row className="g-4">
                            {posts.map((post,index) => (
                            
                                <Col lg={4} md={6} key={index}>
                                    <div className="card-box">
                                        <Image src={post.image} alt="Office Cleaning" fluid />
                                        <div className="content-wrapper">
                                            <h3 className="title"><a href="#">{post.title}</a></h3>
                                            <p className="short-desc">{truncateToWords(post.peragraph, 15)}</p>
                                            {/* <a href="#"><button type="button">learn more</button></a> */}
                                            <Link to={`/services/${encodeURIComponent(post.title)}`} className="btn"><button>learn more</button></Link>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                            {/* <Col lg={4} md={6}>
                                <div className="card-box">
                                    <Image src="/images/office-cleaning.jpg" alt="Office Cleaning" fluid />
                                    <div className="content-wrapper">
                                        <h3 className="title"><a href="#">Upholstery Cleaning</a></h3>
                                        <p className="short-desc">Restore the beauty of your furniture with our professional, deep-clean upholstery cleaning service.</p>
                                        <a href="#"><button type="button">learn more</button></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="card-box">
                                    <Image src="/images/End-of-Lease-Cleaning.jpeg" alt="End of Lease Cleaning" fluid />
                                    <div className="content-wrapper">
                                        <h3 className="title"><a href="#">Rug Cleaning</a></h3>
                                        <p className="short-desc">Revive your rugs with deep cleaning that lifts stains, removes odors, and restores vibrant color.</p>
                                        <a href="#"><button type="button">learn more</button></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="card-box">
                                    <Image src="/images/c.png" alt="Builder Cleaning" fluid />
                                    <div className="content-wrapper">
                                        <h3 className="title"><a href="#">Couch Cleaning</a></h3>
                                        <p className="short-desc">Restore freshness, remove stains, and revive comfort with expert upholstery care.</p>
                                        <a href="#"><button type="button">learn more</button></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="card-box">
                                    <Image src="/images/carpet-cleaning.jpg" alt="Carpet Cleaning" fluid />
                                    <div className="content-wrapper">
                                        <h3 className="title"><a href="#">Mattress Cleaning</a></h3>
                                        <p className="short-desc">Remove dust, stains, and allergens for a fresher, healthier night’s sleep.</p>
                                        <a href="#"><button type="button">learn more</button></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="card-box">
                                    <Image src="/images/couch-steam-cleaning.webp" alt="Couch Steam Cleaning" fluid />
                                    <div className="content-wrapper">
                                        <h3 className="title"><a href="#">Tile & Grout Cleaning</a></h3>
                                        <p className="short-desc">Revive your floors with expert Tile & Grout Cleaning – spotless tiles and fresh-looking grout today!</p>
                                        <a href="#"><button type="button">learn more</button></a>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="card-box">
                                    <Image src="/images/upholstery-cleaning.jpg" alt="Upholstery Cleaning" fluid />
                                    <div className="content-wrapper">
                                        
                                        <h3 className="title"><a href="#">Window Cleaning</a></h3>
                                        <p className="short-desc">Window Cleaning: Sparkling glass, streak-free shine, clear views—let your windows glow with brilliance.</p>
                                        <a href="#"><button type="button">learn more</button></a>
                                    </div>
                                </div>
                            </Col> */}
                        </Row>
                    </div>

                </Container>
            </section>


            {/* Benefits Section */}
            <section className="our-service">
                <Container className="pb-5">
                    <div className="top-heading text-center pb-4 mb-3">
                        <p className="">Who is This Service For?</p>
                        <h2>Unlock the Advantages of Expert Cleaning</h2>
                    </div>
                    <div className="grid gap-y-4">
                        <Row className="g-4">
                            <Col lg={4} md={6}>
                                <div className="card-box">
                                    <Image src="/images/office-cleaning.jpg" alt="Office Cleaning" fluid />
                                    <div className="content-wrapper">
                                        <h3 className="title"><a href="#">Professional Staff</a></h3>
                                        <p className="short-desc">Cleaning services are delivered by trained, professional staff dedicated to quality and care.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="card-box">
                                    <Image src="/images/End-of-Lease-Cleaning.jpeg" alt="End of Lease Cleaning" fluid />
                                    <div className="content-wrapper">
                                        <h3 className="title"><a href="#">Quality Products</a></h3>
                                        <p className="short-desc">High-quality, eco-friendly cleaning products that deliver powerful results without harsh chemicals.</p>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6}>
                                <div className="card-box">
                                    <Image src="/images/c.png" alt="Builder Cleaning" fluid />
                                    <div className="content-wrapper">
                                        <h3 className="title"><a href="#">Peace of Mind</a></h3>
                                        <p className="short-desc">Enjoy peace of mind with our cleaning services—reliable, thorough, and always up to standard.</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>

                </Container>
            </section>
        </>
    )
}

export default CarpetCleaningPosts;