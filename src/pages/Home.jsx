import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';
import { setCategory } from '../redux/actions/filters';

function Home() {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);



    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={(index) => dispatch(setCategory(index))}
                    items={[
                        'Мясные',
                        'Вегетарианская',
                        'Гриль',
                        'Острые',
                        'Закрытые',
                    ]}
                />
                <SortPopup onClickItem={(name) => console.log(name)}
                    items={[
                        {
                            name: 'популярности',
                            type: 'popular'
                        },
                        {
                            name: 'цене',
                            type: 'price'
                        },
                        {
                            name: 'алфавит',
                            type: 'alphabet'
                        },
                    ]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map((obj) => (
                        <PizzaBlock key={obj.id} {...obj} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home
