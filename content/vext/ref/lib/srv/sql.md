---
title: SQL (Server Library)
---
## Description

## Methods

| Type    | Name                          | Parameters                |
| ------- | ----------------------------- | ------------------------- |
| bool    | [Open](#open)                 |                           |
| void    | [Close](#close)               |                           |
| table   | [Query](#query)               | string **query**, args... |
| string  | [Escape](#escape)             | string **text**           |
| string  | [Error](#error)               |                           |
| int     | [AffectedRows](#affectedrows) |                           |
| int     | [LastInsertId](#lastinsertid) |                           |
| SQLBlob | [Blob](#blob)                 | string **data**           |

### Open

> bool **Open**()

Opens a connection to the database if one has not already been opened. The database is stored in `Mods/mod-name/mod.db`.

### Close

> void **Close**()

Closes the active connection to the database.

### Query

> table **Query**(string **query**, args...)

Executes an SQL `query` with the specified bound arguments. Returns a table of rows if successful, otherwise `false`.

#### Parameters

| Name  | Type   | Description |
| ----- | ------ | ----------- |
| query | string |             |
| args  |        |             |

### Escape

> string **Escape**(string **text**)

Escapes a string for usage in an SQL query. This is not necessary when binding arguments directly using the `SQL:Query(...)` method.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| text | string |             |

### Error

> string **Error**()

Returns a description of the last error hat occurred.

### AffectedRows

> int **AffectedRows**()

Returns the number of rows the last successful query affected.

### LastInsertId

> int **LastInsertId**()

Returns the ID of the most recently inserted row.

### Blob

> SQLBlob **Blob**(string **data**)

Returns an `SQLBlob` object for use in queries.

#### Parameters

| Name | Type   | Description |
| ---- | ------ | ----------- |
| data | string |             |

\==== Example ====

``` lua
function SQLExample()
    if not SQL:Open() then
        return
    end

    -- Create our table.
    local query = [[
        CREATE TABLE IF NOT EXISTS test_table (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            text_value TEXT,
            int_value INTEGER,
            real_value REAL,
            blob_value BLOB,
            some_null_value BLOB,
            not_null_text TEXT NOT NULL
        )
    ]]

    if not SQL:Query(query) then
        print('Failed to execute query: ' .. SQL:Error())
        return
    end

    -- Insert some test data.
    query = 'INSERT INTO test_table (text_value, int_value, real_value, blob_value, some_null_value, not_null_text) VALUES (?, ?, ?, ?, ?, ?)'

    if not SQL:Query(query, 'My Text', 1337, 420.69, SQL:Blob('My Blob'), nil, 'My Not Null Text') then
        print('Failed to execute query: ' .. SQL:Error())
        return
    end

    if not SQL:Query(query, 'My Text 2', 13372, 420.692, SQL:Blob('My Blob 2'), nil, 'My Not Null Text 2') then
        print('Failed to execute query: ' .. SQL:Error())
        return
    end

    print('Inserted data. Insert ID: ' .. tostring(SQL:LastInsertId()) .. '. Rows affected: ' .. tostring(SQL:AffectedRows()))

    -- Test the NOT NULL constraint.
    if not SQL:Query(query, 'My Text', 1337, 420.69, SQL:Blob('My Blob'), nil, nil) then
        -- Error should be "NOT NULL constraint failed: test_table.not_null_text"
        print('Failed to execute query: ' .. SQL:Error())
    end

    -- Fetch all rows from the table.
    results = SQL:Query('SELECT * FROM test_table')

    if not results then
        print('Failed to execute query: ' .. SQL:Error())
        return
    end

    -- Print the fetched rows.
    for _, row in pairs(results) do
        print('Got row:')
        print(row)
    end
end
```
