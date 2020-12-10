import React from "react";
import "./Statistic.css";

const Statistic = () => (
    <section className="statistic">
        <table>
            <thead>
            <tr>
                <th></th>
                <th className="offers">Услуги</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className="tableItem">
                    <div className="backgroundBLock">Ручное бронирование</div>
                </td>
                <td className="offersAmount">11</td>
            </tr>
            <tr>
                <td className="tableItem">
                    <div className="backgroundBLock">Пакетные труды</div>
                </td>
                <td className="offersAmount">3</td>
            </tr>
            <tr>
                <td className="tableItem">
                    <div className="backgroundBLock">Отели</div>
                </td>
                <td className="offersAmount">1</td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
                <td className="total">Всего</td>
                <td className="totalAmount">15</td>
            </tr>
            </tfoot>
        </table>
    </section>
)
export default Statistic;
