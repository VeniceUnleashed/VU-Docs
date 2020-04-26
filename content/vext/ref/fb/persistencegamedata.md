---
title: PersistenceGameData
---

Inherits from [Asset](/vext/ref/fb/asset)

## Summary

### Constructors

|  |
| --- |
| **[PersistenceGameData](#constructor-0)**() |
| **[PersistenceGameData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PersistenceGameData](#constructor-2)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PersistenceGameData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "assets" >}} | [Asset](/vext/ref/fb/asset)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PersistenceGameData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PersistenceGameData {#constructor-0}

> **PersistenceGameData**()

Creates a new [PersistenceGameData](/vext/ref/fb/persistencegamedata) frostbite instance.

### PersistenceGameData {#constructor-1}

> **PersistenceGameData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PersistenceGameData](/vext/ref/fb/persistencegamedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PersistenceGameData {#constructor-2}

> **PersistenceGameData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PersistenceGameData](/vext/ref/fb/persistencegamedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PersistenceGameData](/vext/ref/fb/persistencegamedata). |

### PersistenceGameData {#constructor-3}

> **PersistenceGameData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PersistenceGameData](/vext/ref/fb/persistencegamedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PersistenceGameData](/vext/ref/fb/persistencegamedata). |

## Properties

### {{% prop-heading "assets" %}}

> **[Asset](/vext/ref/fb/asset)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PersistenceGameData](/vext/ref/fb/persistencegamedata) type.

