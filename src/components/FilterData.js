import * as React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import { AutoSizer, Column, Table } from 'react-virtualized';
import { textAlign } from '@mui/system';

const styles = (theme) => ({
    flexContainer: {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
    },
    table: {
      // temporary right-to-left patch, waiting for
      // https://github.com/bvaughn/react-virtualized/issues/454
      '& .ReactVirtualized__Table__headerRow': {
        ...(theme.direction === 'rtl' && {
          paddingLeft: '0 !important',
        }),
        ...(theme.direction !== 'rtl' && {
          paddingRight: undefined,
        }),
      },
    },
    tableRow: {
      cursor: 'pointer',
    },
    tableRowHover: {
      '&:hover': {
        backgroundColor: theme.palette.grey[200],
      },
    },
    tableCell: {
      flex: 1,
    },
    tableHover: {
      '&:nth-of-type(even)': {
        backgroundColor: 'white',
      },
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      }
    },
    noClick: {
      cursor: 'initial',
    },
  });
  
  class MuiVirtualizedTable extends React.PureComponent {
    static defaultProps = {
      headerHeight: 48,
      rowHeight: 55,
    };
  
    getRowClassName = ({ index }) => {
      const { classes, onRowClick } = this.props;
  
      return clsx(classes.tableRow, classes.flexContainer, {
        [classes.tableRowHover]: index !== -1 && onRowClick != null,
      });
    };
  
    cellRenderer = ({ cellData, columnIndex }) => {
      const { columns, classes, rowHeight, onRowClick } = this.props;
      return (
        <TableCell
          component="div"
          className={clsx(classes.tableCell, classes.tableHover, classes.flexContainer, {
            [classes.noClick]: onRowClick == null,
          })}
          variant="body"
          style={{ height: rowHeight }}
          align={
            (columnIndex != null && columns[columnIndex].numeric) || false
              ? 'right'
              : 'left'
          }
        >
          {cellData}
        </TableCell>
      );
    };
  
    headerRenderer = ({ label, columnIndex }) => {
      const { headerHeight, columns, classes } = this.props;
  
      return (
        <TableCell
          component="div"
          className={clsx(classes.tableCell,  classes.flexContainer, classes.noClick)}
          variant="head"
          style={{ height: headerHeight, backgroundColor: 'black', color: 'white' }}
          align={columns[columnIndex].numeric || false ? 'right' : 'left'}
        >
          <span>{label}</span>
        </TableCell>
      );
    };
  
    render() {
      const { classes, columns, rowHeight, headerHeight, ...tableProps } = this.props;
      return (
        <AutoSizer>
          {({ height, width }) => (
            <Table
              height={height}
              width={width}
              rowHeight={rowHeight}
              gridStyle={{
                direction: 'inherit',
              }}
              headerHeight={headerHeight}
              className={classes.table}
              {...tableProps}
              rowClassName={this.getRowClassName}
            >
              {columns.map(({ dataKey, ...other }, index) => {
                return (
                  <Column
                    key={dataKey}
                    headerRenderer={(headerProps) =>
                      this.headerRenderer({
                        ...headerProps,
                        columnIndex: index,
                      })
                    }
                    className={clsx(classes.flexContainer, classes.tableHover)}
                    cellRenderer={this.cellRenderer}
                    dataKey={dataKey}
                    {...other}
                  />
                );
              })}
            </Table>
          )}
        </AutoSizer>
      );
    }
  }
  
  MuiVirtualizedTable.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        dataKey: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        numeric: PropTypes.bool,
        width: PropTypes.number.isRequired,
      }),
    ).isRequired,
    headerHeight: PropTypes.number,
    onRowClick: PropTypes.func,
    rowHeight: PropTypes.number,
  };
  
  const defaultTheme = createTheme();
  const VirtualizedTable = withStyles(styles, { defaultTheme })(MuiVirtualizedTable);

function FilterData(props){


    const customers = [
        
            {
                "customerID" : "AROUT",
                "companyName" : "Around the Horn",
                "contactName" : "Thomas Hardy",
                "contactTitle" : "Sales Representative",
                "address" :  "120 Hanover Sq.",
                "city" : "London",
                "region" : "NULL",
                "postalCode" : "WA1 1DP",
                "country" : "UK",
                "phone" : "(171) 555-7788",
                "fax" : "(171) 555-6750"
            },
            {
              "customerID" : "BERGS",
              "companyName" : "Berglunds snabbköp",
              "contactName" : "Christina Berglund",
              "contactTitle" : "Order Administrator",
              "address" : "Berguvsvägen  8",
              "city" : "Luleå",
              "region" : "NULL",
              "postalCode" : "S-958 22",
              "country" : "Sweden",
              "phone" : "0921-12 34 65",
              "fax" : "(171) 555-6750"


              
            },
            {
              "customerID" : "BLAUS",
              "companyName" : "Blauer See Delikatessen",
              "contactName" : "Hanna Moos",
              "contactTitle" : "Sales Representative",
              "address" :  "Forsterstr. 57",
                "city" : "Mannheim",
                "region" : "NULL",
                "postalCode" : 68306,
                "country" : "Germany",
                "phone" : "0621-08460",
                "fax" : "(171) 555-6750"


              
            },
            {
              "customerID" : "BLONP",
              "companyName" : "Blondesddsl père et fils",
              "contactName" : "Frédérique Citeaux",
              "contactTitle" : "Marketing Manager",
              "address" :  "24 place Kléber",
                "city" : "Strasbourg",
                "region" : "NULL",
                "postalCode" : 67000,
                "country" : "France",
                "phone" : "88.60.15.31",
                "fax" : "(171) 555-6750"


            },
            {
              "customerID" : "BOLID",
              "companyName" : "Bólido Comidas preparadas",
              "contactName" : "Martín Sommer",
              "contactTitle" : "Owner",
              "address" :  "67C Araquil",
                "city" : "Madrid",
                "region" : "NULL",
                "postalCode" : 28023,
                "country" : "Spain",
                "phone" : "(91) 555 22 82",
                "fax" : "(171) 555-6750"


            },
            {
              "customerID" : "BONAP",
              "companyName" : "Bon app'",
              "contactName" : "Laurence Lebihan",
              "contactTitle" : "Owner",
              "address" :  "12 rue des Bouchers",
                "city" : "Marseille",
                "region" : "NULL",
                "postalCode" : 13008,
                "country" : "France",
                "phone" : "91.24.45.40",
                "fax" : "(171) 555-6750"


            },
            {
              "customerID" : "ANTON",
              "companyName" : "Antonio Moreno Taquería",
              "contactName" : "Antonio Moreno",
              "contactTitle" : "Owner",
              "address" :  "Mataderos  2312",
                "city" : "México D.F.",
                "region" : "NULL",
                "postalCode" : 5023,
                "country" : "Mexico",
                "phone" : "(5) 555-3932",
                "fax" : "(171) 555-6750"


            },
            {
              "customerID" : "ANATR",
              "companyName" : "Ana Trujillo Emparedados y helados",
              "contactName" : "Ana Trujillo",
              "contactTitle" : "Owner",
              "address" :  "Avda. de la Constitución 2222",
                "city" : "México D.F.",
                "region" : "NULL",
                "postalCode" : 5021,
                "country" : "Mexico",
                "phone" : "(5) 555-4729",
                "fax" : "(171) 555-6750"


            },
            {
              "customerID" : "CACTU",
              "companyName" : "Cactus Comidas para llevar",
              "contactName" : "Patricio Simpson",
              "contactTitle" : "Sales Agent",
              "address" :  "Cerrito 333",
                "city" : "Buenos Aires",
                "region" : "NULL",
                "postalCode" : 1010,
                "country" : "Argentina",
                "phone" : "(1) 135-5555",
                "fax" : "(171) 555-6750"


            },
    ]

    var data = customers
    var rows = []

    if(props.query === 1){
      rows = customers
    }
    else if(props.query === 2){
      for(let i =0; i<data.length; i++){
        if(data[i].contactTitle === 'Owner'){
          rows.push(data[i])
          console.log(rows)
        }
      }
    }
    else if(props.query === 3){
      for(let i =0; i<data.length; i++){
        if(data[i].country === 'Mexico'){
          rows.push(data[i])
          console.log(rows)
        }
      }
    }

    return (
        <div>
            <div>
                <Paper style={{ height: 400, width: '77%', textAlign: 'center' }}>
                    <VirtualizedTable
                    rowCount={rows.length}
                    rowGetter={({ index }) => rows[index]}
                    columns={[  
                        {
                            width: 240,
                            label: 'customerID',
                            dataKey: 'customerID',
                        },
                        {
                            width: 260,
                            label: 'companyName',
                            dataKey: 'companyName',
                        },
                        {
                            width: 260,
                            label: 'contactName',
                            dataKey: 'contactName',
                        },
                        {
                            width: 260,
                            label: 'contactTitle',
                            dataKey: 'contactTitle',
                        },
                        {
                            width: 260,
                            label: 'address',
                            dataKey: 'address',
                        },
                        {
                            width: 210,
                            label: 'city',
                            dataKey: 'city',
                        },
                        {
                            width: 200,
                            label: 'region',
                            dataKey: 'region',
                        },
                        {
                            width: 220,
                            label: 'postalCode',
                            dataKey: 'postalCode',
                        },
                        {
                            width: 200,
                            label: 'country',
                            dataKey: 'country',
                        },
                        {
                          width: 200,
                          label: 'phone',
                          dataKey: 'phone',
                        },
                        {
                          width: 200,
                          label: 'fax',
                          dataKey: 'fax',
                        },
                    ]}
                    />
                </Paper>
            </div>
        </div>
    );

}

export default FilterData