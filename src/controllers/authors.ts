import type { Request, Response } from "express";
import Author from "../models/author.js"; 

export const createAuthor = async (req: Request, res: Response) => {

    const author  = await Author.create({name: req.body.name, bio: req.body.bio});
    res.status(201).send(author)
};



export const getAuthors = async (req: Request, res: Response) => {

    const authors = await Author.find(({}));
    res.send(authors)
};

export const getAuthorById = async (req: Request, res: Response) => {

    const author =  await Author.findById(req.params.id);
    res.send(author)

};

export const updateAuthor = async (req: Request, res: Response) => {

    const author = await Author.findByIdAndUpdate(
    req.params.id,
    { bio: req.body.bio },
    { new: true, runValidators: true },
    )
    res.send(author)

};

export const deleteAuthor = async (req: Request, res: Response) => {

    const author = await Author.findByIdAndDelete(req.params.id);
    if(!author) {
        return res.status(404).send({message: "Author not found"})  
    }
    res.send(author)
};