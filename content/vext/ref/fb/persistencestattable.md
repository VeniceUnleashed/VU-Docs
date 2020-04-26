---
title: PersistenceStatTable
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[PersistenceStatTable](#constructor-0)**() |
| **[PersistenceStatTable](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PersistenceStatTable](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "tableName" >}} | string |
| {{< prop "ownerPersistenceData" >}} | [AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PersistenceStatTable" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PersistenceStatTable {#constructor-0}

> **PersistenceStatTable**()

Creates a new [PersistenceStatTable](/vext/ref/fb/persistencestattable) frostbite instance.

### PersistenceStatTable {#constructor-1}

> **PersistenceStatTable**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PersistenceStatTable](/vext/ref/fb/persistencestattable) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PersistenceStatTable {#constructor-2}

> **PersistenceStatTable**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PersistenceStatTable](/vext/ref/fb/persistencestattable). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PersistenceStatTable](/vext/ref/fb/persistencestattable). |

## Properties

### {{% prop-heading "tableName" %}}

> **string**

### {{% prop-heading "ownerPersistenceData" %}}

> **[AbstractPersistenceData](/vext/ref/fb/abstractpersistencedata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PersistenceStatTable](/vext/ref/fb/persistencestattable) type.

