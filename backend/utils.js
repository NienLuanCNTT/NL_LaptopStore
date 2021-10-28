import jwt from 'jsonwebtoken';

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(5, authorization.length)
        jwt.verify(
            token,
            process.env.JWT_SECRET || 'somethingsecret',
            (err, decode) => {
                if (err) {
                    req.status(401).send({ message: 'Invalid Token' });
                } else {
                    req.user = decode;
                    next();
                }
            }
        );
    } else {
        req.status(401).send({ message: 'NO Token' });
    }
}