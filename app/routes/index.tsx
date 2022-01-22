/**
 * @file Index, redirects the root to a randomly generated ID, not really a crucial file, but it's nice to have, especially if you wanna showcase this to your friends because of how much of a skid you are.
 * @author enriktigasna
 * @version 1.0.0
*/


import { LoaderFunction, redirect } from "remix";

export const loader: LoaderFunction = async () => {
    // Makes an random ID, due to the fact of how floats work it will max out at 6, pretty sure the function is self explanatory
    function makeid(length:Number) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * 
     charactersLength));
       }
       return result;
    }
    // Generates 16 charachter ID, and redirects to it.
    // This will send you to $.tsx, aka the login page
    const id  = makeid(6) + makeid(6) + makeid(6)
    return redirect(String(id))
};