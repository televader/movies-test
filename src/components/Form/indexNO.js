import React from "react";
import "./styles/form.css";
import { saveFormData } from "../../redux/slices/formSlice";
import { Dispatch, useState } from "react";


export default function Form() {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });



    return (
        <>
            <div className="form-full">
                <div className="form-container">
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message:</label>
                            <textarea
                                id="message"
                                name="message"
                            ></textarea>
                        </div>
                        <div className="form-group-btn">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};