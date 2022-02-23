import React from 'react';

const NoticeTable = (props) => {
  const { headersName, children } = props;

  return (
    <table className="notice-table">
      <thead>
        <tr>
          {headersName.map((item, index) => {
            return (
              <td className="notice-table-header-column" key={index}>
                {item}
              </td>
            );
          })}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default NoticeTable;
