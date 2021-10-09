import React from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/logo/logo_footer.png'
import iconFacebook from 'assets/svg/icon-fb.svg'
import iconYoutube from 'assets/svg/icon-youtube.svg'
import iconTwitter from 'assets/svg/icon-twitter.svg'
import iconInstagram from 'assets/svg/icon-ins.svg'

function Footer(props) {
    const media = [
        {
            name: "youtube",
            icon: iconYoutube,
            link: 'http://www.youtube.com'
        },
        {
            name: "facebook",
            icon: iconFacebook,
            link: 'http://www.facebook.com'
        },
        {
            name: "twitter",
            icon: iconTwitter,
            link: 'http://www.twitter.com'
        },
        {
            name: "instagram",
            icon: iconInstagram,
            link: 'http://www.instagrarm.com'
        },

    ]

    const contentFooter = [
        {
            title: "Chăm sóc khách hàng",
            list: [
                "Câu hỏi thường gặp",
                "Gửi yêu cầu hổ trợ",
                "Hướng dẫn đặt hàng",
                "Phương thức vận chuyển",
                "Hỗ trợ khách hàng: hotro@laptopstore.vn",
            ]
        },
        {
            title: "Chính sách",
            list: [
                "Bảo hành",
                "Vận chuyển",
                "Thanh toán",
                "Chính sách đổi trả",
            ]
        },
        {
            title: "Về LaptopStore",
            list: [
                "Giới thiệu về LaptopStore",
                "Tuyển dụng",
                "Điều khoản"
            ]
        },
        {
            title: "Họp tác cùng LaptopStore",
            list: [
                "Quy chế hoạt động Sàn GDTMĐT",
                "Bán hàng cùng LaptopStore",
            ]
        },
    ]


    return (
        <div className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__top-logo">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <div className="footer__top-right">
                        <div className="footer__top-right-hotline">
                            <i>Hotline</i>
                            <p>1900.60.1234</p>
                        </div>
                        <div className="footer__top-right-media">
                            {
                                media.map(media => (
                                    <span>
                                        <a
                                            href={media.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <img
                                                className="footer__top-right-media-icon"
                                                src={media.icon} alt={media.name} />
                                        </a>
                                    </span>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="footer__content">
                    {
                        contentFooter.map(content => (
                            <div className="footer__content-items">
                                <div className="footer__content-items-title">
                                    {content.title}
                                </div>
                                <div className="footer__content-items-list">
                                    {content.list.map(item => (
                                        <Link>
                                            <div className="footer__content-items-list-item">
                                                {item}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Footer;
