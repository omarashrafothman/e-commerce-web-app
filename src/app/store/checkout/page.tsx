"use client"
import Input from "@/components/input/Input";
import { useState } from "react";
import Select from "@/components/select/Select";
import Checkbox from "@/components/checkbox/Checkbox";
import Radio from "@/components/radio/Radio";
import BillingBox from "@/components/BillingBox/BillingBox";
import Image from "next/image";
import OrderSummary from "@/components/orderSummary/OrderSummary";

export default function CheckoutPage() {
    const [shipping, setShipping] = useState("FedEx");
    const [paymentMethod, setPaymentMethod] = useState("CreditCard");

    return (
        <div className="flex flex-col-reverse  lg:flex-row p-4 lg:p-10 gap-6">
            {/* Billing Info and Form */}
            <div className="flex-1 space-y-6">
                {/* Billing Info */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Billing info</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="mb-3">
                            <Input label={"First Name"} type={"text"} placeholder={"First Name"} id={"firstname"} name={"firstname"} />
                        </div>

                        <div className="mb-3">
                            <Input label={"Last Name"} type={"text"} placeholder={"Last Name"} id={"lastname"} name={"lastname"} />
                        </div>
                        <div className="mb-3">
                            <Input label={"Email"} type={"email"} placeholder={"Email address"} id={"email"} name={"email"} />
                        </div>
                        <div className="mb-3">
                            <Input label={"Phone Number"} type={"tel"} placeholder={"Pone Number"} id={"phone"} name={"phone"} />
                        </div>
                        <div className="mb-3">
                            <Input label={"Email"} type={"email"} placeholder={"Email address"} id={"email"} name={"email"} />
                        </div>
                        <div className="mb-3">
                            <Input label={"Address"} type={"text"} placeholder={"Address"} id={"address"} name={"address"} classes={"col-span-2 input"} />
                        </div>
                        <div className="mb-3">
                            <Input label={"City"} type={"text"} placeholder={"Town / city"} id={"city"} name={"city"} />
                        </div>
                        <div className="mb-3">
                            <Input label={"Postal code"} type={"text"} placeholder={"Postal code or ZIP"} id={"Postalcode"} name={"Postalcode"} />
                        </div>

                        <Select
                            name="country"
                            id="country"
                            label="State / Country"
                            placeholder="Choose a state or country"
                            options={[
                                { label: "Egypt", value: "eg" },
                                { label: "Saudi Arabia", value: "sa" },
                                { label: "United States", value: "us" }
                            ]}
                        />


                    </div>
                    <div className="border-[#D1D1D1] border  rounded-[12px] py-3 px-4 bg-[#F9F9F9] flex items-center   md:w-[30%]">

                        <Checkbox
                            id="acceptTerms"
                            name="terms"
                            label="I agree to the terms and conditions"

                        />

                    </div>
                </section>

                {/* Shipping Method */}
                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Billing method</h2>
                    <div className="space-y-2">
                        <BillingBox
                            inputBox={
                                <Radio
                                    id="shipping-fedex"
                                    name="shipping"
                                    value="FedEx"
                                    label="FedEx"
                                    checked={shipping === "FedEx"}
                                    onChange={(e) => setShipping(e.target.value)}
                                />
                            }
                            imgSrc="/assets/icons/g6.png"
                            price="+ 25.00"
                            title="Additional price"
                        />

                        <BillingBox
                            inputBox={
                                <Radio
                                    id="shipping-dhl"
                                    name="shipping"
                                    value="DHL"
                                    label="DHL"
                                    checked={shipping === "DHL"}
                                    onChange={(e) => setShipping(e.target.value)}
                                />
                            }
                            imgSrc="/assets/icons/Vector.png"
                            price="+ 32.00"
                            title="Additional price"
                        />


                    </div>
                </section>

                {/* Payment Method */}


                <section className="space-y-4">
                    <h2 className="text-xl font-semibold">Payment method</h2>
                    <div className="space-y-2">

                        <div className="flex flex-col border border-[#D1D1D1] px-3 py-2 rounded-[12px]">

                            <div className="flex items-center justify-between">

                                <Radio
                                    id="payment-credit"
                                    name="payment"
                                    value="creditCard"
                                    label="Credit card"
                                    checked={paymentMethod === "creditCard"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />

                                <div className='w-[80px] h-[50px] flex justify-center items-center'>
                                    <Image src="/assets/icons/Frame 105.png" width={100} height={100} className='w-full  object-cover' alt='method logo' />

                                </div>


                            </div>
                            <div className={paymentMethod === "creditCard" ? "mt-7" : "mt-7 hidden"}>

                                <div className="w-[70%] mb-7">

                                    <Input placeholder="card number" name="cardNumber" id="cardNumber" type="text" label="Card Number" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="w-[49%]">
                                        <Input placeholder="Card holder" name="Cardholder" id="Cardholder" type="text" label="Card holder" />
                                    </div>
                                    <div className="w-[24%]">
                                        <Input placeholder="DD/MM/YY" name="expirationdate" id="expirationdate" type="date" label="Expiration date" />
                                    </div>
                                    <div className="w-[24%]">
                                        <Input placeholder="CVC" name="CVC" id="CVC" type="text" label="CVC" />
                                    </div>


                                </div>


                            </div>
                        </div>


                        <div className="flex flex-col border border-[#D1D1D1] px-3 py-2 rounded-[12px]">

                            <div className="flex items-center justify-between">

                                <Radio
                                    id="payment-paypal"
                                    name="payment"
                                    value="paypal"
                                    label="Paypal"
                                    checked={paymentMethod === "paypal"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />

                                <div className='w-[80px] h-[50px] flex justify-center items-center'>
                                    <Image src="/assets/icons/PayPal 1.png" width={100} height={100} className='w-full  object-cover' alt='method logo' />

                                </div>


                            </div>
                            <div className={paymentMethod === "paypal" ? "mt-7" : "mt-7 hidden"}>

                                <div className="w-[70%] mb-7">

                                    <Input placeholder="card number" name="cardNumber" id="cardNumber" type="text" label="Card Number" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="w-[49%]">
                                        <Input placeholder="Card holder" name="Cardholder" id="Cardholder" type="text" label="Card holder" />
                                    </div>
                                    <div className="w-[24%]">
                                        <Input placeholder="DD/MM/YY" name="expirationdate" id="expirationdate" type="date" label="Expiration date" />
                                    </div>
                                    <div className="w-[24%]">
                                        <Input placeholder="CVC" name="CVC" id="CVC" type="text" label="CVC" />
                                    </div>


                                </div>


                            </div>
                        </div>

                        <div className="flex flex-col border border-[#D1D1D1] px-3 py-2 rounded-[12px]">

                            <div className="flex items-center justify-between">

                                <Radio
                                    id="payment-bitcoin"
                                    name="payment"
                                    value="bitcoin"
                                    label="bitcoin"
                                    checked={paymentMethod === "bitcoin"}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />

                                <div className='w-[80px] h-[50px] flex justify-center items-center'>
                                    <Image src="/assets/icons/Group.png" width={100} height={100} className='w-full  object-cover' alt='method logo' />

                                </div>


                            </div>
                            <div className={paymentMethod === "bitcoin" ? "mt-7" : "mt-7 hidden"}>

                                <div className="w-[70%] mb-7">

                                    <Input placeholder="card number" name="cardNumber" id="cardNumber" type="text" label="Card Number" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="w-[49%]">
                                        <Input placeholder="Card holder" name="Cardholder" id="Cardholder" type="text" label="Card holder" />
                                    </div>
                                    <div className="w-[24%]">
                                        <Input placeholder="DD/MM/YY" name="expirationdate" id="expirationdate" type="date" label="Expiration date" />
                                    </div>
                                    <div className="w-[24%]">
                                        <Input placeholder="CVC" name="CVC" id="CVC" type="text" label="CVC" />
                                    </div>


                                </div>


                            </div>
                        </div>







                    </div>
                </section>


                {/* Additional Info */}
                <section>
                    <h2 className="text-xl font-semibold mb-4">Additional informations</h2>
                    <textarea className="input w-full bg-[#F9F9F9] border-[#D1D1D1] border focus:outline-[#6A983C] focus:border-[#6A983C]  placeholder:text-[#A9A9A9] rounded-[12px] py-5 px-4" rows={6} cols={10} placeholder="Need a specific delivery day? Sending a gift? Let's say ..." />
                </section>

                {/* Confirmation */}
                <section className="space-y-2">
                    <h2 className="text-xl font-semibold">Confirmation</h2>
                    <div className="border-[#D1D1D1] border  rounded-[12px] py-3 px-4 bg-[#F9F9F9] flex items-center   md:w-[60%]">

                        <Checkbox
                            id="acceptPromissed"
                            name="promissed"
                            label="I agree with sending an Marketing and newsletter emails. No spam, promissed!"

                        />

                    </div>
                    <div className="border-[#D1D1D1] border  rounded-[12px] py-3 px-4 bg-[#F9F9F9] flex items-center   md:w-[45%]">

                        <Checkbox
                            id="acceptPolicy"
                            name="policy"
                            label="I agree with our terms and conditions and privacy policy."

                        />

                    </div>
                    <button className="bg-[#6A983C] border border-[#46760A]  text-white px-5 py-3   hover:bg-[#46760A] cursor-pointer rounded-[12px] my-4 duration-300">Complete order</button>
                </section>
            </div>

            {/* Order Summary */}
            <aside className="w-full lg:w-96    rounded-xl">
                <OrderSummary />
            </aside>
        </div>
    );
}

