---
title: SQL
---

## Summary

### Methods

| Method | Returns |
| ------ | ------- |
| **[Open](#open)**() | bool |
| **[Close](#close)**() | void |
| **[Query](#query)**(query: string, ...args: any) | table \| nil |
| **[Escape](#escape)**(text: string) | string |
| **[Blob](#blob)**(data: string) | [SQLBlob](/vext/ref/server/type/sqlblob) |
| **[Error](#error)**() | string |
| **[AffectedRows](#affectedrows)**() | int |
| **[LastInsertId](#lastinsertid)**() | int |

## Methods

### Open {#open}

> **Open**(): bool

#### Returns

| Type | Description |
| ---- | ----------- |
| **bool** |  |

### Close {#close}

> **Close**()

### Query {#query}

> **Query**(query: string, ...args: any): table \| nil

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **query** | string |  |
| ...**args** | any |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **table** \| **nil** |  |

### Escape {#escape}

> **Escape**(text: string): string

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **text** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |

### Blob {#blob}

> **Blob**(data: string): [SQLBlob](/vext/ref/server/type/sqlblob)

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **data** | string |  |

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SQLBlob](/vext/ref/server/type/sqlblob)** |  |

### Error {#error}

> **Error**(): string

#### Returns

| Type | Description |
| ---- | ----------- |
| **string** |  |

### AffectedRows {#affectedrows}

> **AffectedRows**(): int

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |

### LastInsertId {#lastinsertid}

> **LastInsertId**(): int

#### Returns

| Type | Description |
| ---- | ----------- |
| **int** |  |


## Examples

```lua
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
```
