import React from 'react';
import './Style.css';

const FarmerDashboard = () => {
    return (
        <div className="farmer-dashboard">

            <header className="header">

                <h2>Plant Point of Sale</h2>
                <input type="text" placeholder="Search..." />
                <button>Search</button>
            </header>
            <div className="main-content">
                <aside className="category-section">
                    <h3>Categories</h3>
                    <div className="category-container">
                        <ul>
                            <div>
                                <li className="category-item">
                                    <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg" alt="Fruits" />
                                    <h5>Fruits</h5>

                                </li>
                            </div>
                            <li className="category-item">
                                <img src="https://cdn.pixabay.com/photo/2011/08/17/12/31/spike-8743_640.jpg" alt="Grains" />
                                <h5>Grains</h5>

                            </li>
                            <li className="category-item">
                                <img src="https://cdn.pixabay.com/photo/2018/03/09/17/39/paprika-3212137_640.jpg" alt="Vegetables" />
                                <h5>Pepper</h5>

                            </li>
                            <li className="category-item">
                                <img src="https://cdn.pixabay.com/photo/2015/06/10/19/56/apples-805124_640.jpg" alt="Vegetables" />
                                <h5>Apples</h5>

                            </li>
                            <li className="category-item">
                                <img src="https://cdn.pixabay.com/photo/2016/07/11/18/42/bread-1510298_640.jpg" alt="Vegetables" />
                                <h5>Wheat</h5>

                            </li>


                        </ul>
                    </div>
                </aside>


                <section className="item-list">
                    {/* List of items */}

                    <ul>
                        <div className='item-lists'>
                            <h5>Pepper</h5>
                            <li className="category-items">
                                <img src="https://cdn.pixabay.com/photo/2018/03/09/17/39/paprika-3212137_640.jpg" alt="Vegetables" />


                            </li>
                        </div>
                        <div className='item-lists'>
                            <h5>Apples</h5>
                            <li className="category-items">
                                <img src="https://cdn.pixabay.com/photo/2015/06/10/19/56/apples-805124_640.jpg" alt="Vegetables" />


                            </li>
                        </div>
                        <div className='item-lists'>
                            <h5>Fruits</h5>
                            <li className="category-items">

                                <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg" alt="Fruits" />

                            </li>
                        </div>

                    </ul><br /> <br />
                    <ul>
                        <div className='item-lists'>
                            <h5>Pepper</h5>
                            <li className="category-items">
                                <img src="https://cdn.pixabay.com/photo/2018/03/09/17/39/paprika-3212137_640.jpg" alt="Vegetables" />


                            </li>
                        </div>
                        <div className='item-lists'>
                            <h5>Apples</h5>
                            <li className="category-items">
                                <img src="https://cdn.pixabay.com/photo/2015/06/10/19/56/apples-805124_640.jpg" alt="Vegetables" />


                            </li>
                        </div>
                        <div className='item-lists'>
                            <h5>Fruits</h5>
                            <li className="category-items">

                                <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg" alt="Fruits" />

                            </li>
                        </div>

                    </ul>

                </section>
                <section className="orders-section">

                    <h3>Orders</h3>
                    {/* <ul>
                        <li>Order 1</li>
                        <li>Order 2</li>
                        <li>Order 3</li>
                    </ul> */}
                    <div className="category-container">
                        <ul>
                            <div>
                                <li className="category-item1">
                                    <img src="https://cdn.pixabay.com/photo/2010/12/13/10/05/berries-2277_640.jpg" alt="Fruits" />
                                    <h5>Fruits</h5>

                                </li>
                            </div>
                            <li className="category-item1">
                                <img src="https://cdn.pixabay.com/photo/2011/08/17/12/31/spike-8743_640.jpg" alt="Grains" />
                                <h5>Grains</h5>

                            </li>
                            <li className="category-item1">
                                <img src="https://cdn.pixabay.com/photo/2018/03/09/17/39/paprika-3212137_640.jpg" alt="Vegetables" />
                                <h5>Pepper</h5>

                            </li>

                        </ul>

                        <div class="container">
                            <h3 class="section-title">Payment Method</h3>   
                            <button style={{ backgroundColor: '#b30000', cursor: 'pointer', width: '150px', fontSize:'18px' }} >M-pesa</button>                         
                           
                            <div class="plants-section">
                                <h5 class="section-title">Plants</h5>
                                <div class="plant-item">
                                    <span class="plant-name">Apples</span>
                                    <div class="increment-buttons">
                                        <button class="increment-button">-</button>
                                        <span class="quantity">1</span>
                                        <button class="increment-button">+</button>
                                    </div>
                                </div>
                                <div class="plant-item">
                                    <span class="plant-name">Pepper</span>
                                    <div class="increment-buttons">
                                        <button class="increment-button">-</button>
                                        <span class="quantity">1</span>
                                        <button class="increment-button">+</button>
                                    </div>
                                </div>
                            </div>
                            <div class="receipt-section">
                                <button class="form-button">Print Receipt</button>
                            </div>
                        </div>


                    </div>
                </section>
            </div>
        </div>
    );
};

export default FarmerDashboard;
