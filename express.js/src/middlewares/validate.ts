import { Request, Response, NextFunction } from "express";
import { ZodSchema } from "zod";    



const validate = (schema: ZodSchema) => (req: Request, res: Response, next:NextFunction): void => {
    try {
        schema.parse(req.body);
        next()
    } catch (error: any) {
         res.status(400).json({
            message:"Validation error",
            errors: error.errors.map((err: any) => err.message)
        })
    }
}

export default validate;