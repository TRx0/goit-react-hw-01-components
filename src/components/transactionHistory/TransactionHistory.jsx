import PropTypes from 'prop-types';
import { Transaction, TableRowTitle, TableBody, TableRow, TableString } from './transaction.style';

export const TransactionHistory = ({ items }) => (
  <Transaction>
    <thead>
      <TableRowTitle>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </TableRowTitle>
    </thead>

    <TableBody>
      {items.map(item => (
        <TableRow key={item.id}>
          <TableString>{item.type}</TableString>
          <TableString>{item.amount}</TableString>
          <TableString>{item.currency}</TableString>
        </TableRow>
      ))}
    </TableBody>
  </Transaction>
)

TransactionHistory.propTypes = {
  items: PropTypes.array,
}