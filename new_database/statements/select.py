from __future__ import annotations
from new_database.exceptions import NoSuchColumn
import sys
import getpass
if getpass.getuser() == 'ricca':
    sys.path.append('C:\\Users\\ricca\\Desktop\\telegram')
elif getpass.getuser() == 'grufoony':
    sys.path.append('/home/grufoony/bot-telegram')
elif getpass.getuser() == 'riccardoob':
    sys.path.append('/home/riccardoob/telegram_bot')
elif getpass.getuser() == 'pi':
    sys.path.append('/home/pi/telegram-bot')

from typing import TYPE_CHECKING, List, Any, Dict

if TYPE_CHECKING:
    from new_database.model.column import Column
    from new_database.model.table import Table


class Select():

    __from_tables: List[Column] # contains tables for from clause

    __select_clause: List[Column] # contains columns for select clause

    __where_clause: Dict[Column, Any] # contains a dictionary for the where clause

    def __init__(self, select_clause: Dict[Table, List[Column]] = None, from_tables: List[Table] = None, where_clause: Dict[Table, Dict[Column, Any]] = None):
        self.__from_tables = from_tables
        self.__select_clause = select_clause
        self.__where_clause = where_clause
 
        for table in self.__select_clause.keys(): # check if columns from select clause actually belong to the associated table
            for col in self.__select_clause[table]:
                if not table.contains(col):
                    raise NoSuchColumn('Column {col} does not belong to table {table} for select clause'.format(col = col.get_name(), table = table.get_name()))
        
        for table in self.__where_clause.keys(): # check if columns from where clause actually belong to the associated table
            for col in self.__where_clause[table].keys():
                if not table.contains(col):
                    raise NoSuchColumn('Column {col} does not belong to table {table} for where clause'.format(col = col.get_name(), table = table.get_name()))

        
        


        




# SELECT -> FROM -> WHERE
# UPDATE -> SET -> WHERE
# DELETE FROM -> WHERE
# INSERT INTO -> VALUES