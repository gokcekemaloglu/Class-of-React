// 'use client';

import { Card } from '@tremor/react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function KpiCards() {

    const {sales, purchases} = useSelector(state=>state.stock)
    console.log(sales);
    console.log(purchases);
    
    const totalSales = sales.reduce((acc, sale) => acc + sale.amount,0)
    const totalPurchases = purchases.reduce((acc, purchase) => acc + purchase.amount,0)
    const totalCash = totalSales - totalPurchases

    // const colors = {
    //     "Sales" : "indigo",
    //     "Cash" : "fuchsia",
    //     "Purchases" : "amber",
    // }

    const data = [
        {
          name: 'Sales',
          value: `€ ${totalSales}`,
          color: "indigo"
        },
        {
          name: 'Cash',
          value: `€ ${totalCash}`,
          color: "fuchsia"
        },
        {
          name: 'Purchase',
          value: `€ ${totalPurchases}`,
          color: "amber"
        },
    ];

    // useEffect(()=>{
    //     getStock
    // },[])

  return (
    <>
      <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card key={item.name} decoration="top"
            decorationColor={item.color}
            // decorationColor={colors[item.name]}

        >
            <dd className="flex items-start justify-between">
              <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                {item.value}
              </span>
              
            </dd>
            <dt className="mt-1 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {item.name}
            </dt>
          </Card>
        ))}
      </dl>
    </>
  );
}