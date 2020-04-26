---
title: PersistenceStatGroup
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[PersistenceStatGroup](#constructor-0)**() |
| **[PersistenceStatGroup](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PersistenceStatGroup](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "groupName" >}} | string |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PersistenceStatGroup" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PersistenceStatGroup {#constructor-0}

> **PersistenceStatGroup**()

Creates a new [PersistenceStatGroup](/vext/ref/fb/persistencestatgroup) frostbite instance.

### PersistenceStatGroup {#constructor-1}

> **PersistenceStatGroup**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PersistenceStatGroup](/vext/ref/fb/persistencestatgroup) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PersistenceStatGroup {#constructor-2}

> **PersistenceStatGroup**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PersistenceStatGroup](/vext/ref/fb/persistencestatgroup). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PersistenceStatGroup](/vext/ref/fb/persistencestatgroup). |

## Properties

### {{% prop-heading "groupName" %}}

> **string**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PersistenceStatGroup](/vext/ref/fb/persistencestatgroup) type.

