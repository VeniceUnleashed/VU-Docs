---
title: StatsCategoryData
---

Inherits from [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)

## Summary

### Constructors

|  |
| --- |
| **[StatsCategoryData](#constructor-0)**() |
| **[StatsCategoryData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[StatsCategoryData](#constructor-2)**(other: [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)) |
| **[StatsCategoryData](#constructor-3)**(other: [TreeNodeBase](/vext/ref/fb/treenodebase)) |
| **[StatsCategoryData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "categories" >}} | [StatsCategoryData](/vext/ref/fb/statscategorydata)[] |
| {{< prop "members" >}} | string[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "StatsCategoryData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### StatsCategoryData {#constructor-0}

> **StatsCategoryData**()

Creates a new [StatsCategoryData](/vext/ref/fb/statscategorydata) frostbite instance.

### StatsCategoryData {#constructor-1}

> **StatsCategoryData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [StatsCategoryData](/vext/ref/fb/statscategorydata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### StatsCategoryData {#constructor-2}

> **StatsCategoryData**(other: [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata))

Casts an instance of type [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) to [StatsCategoryData](/vext/ref/fb/statscategorydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) | The instance to cast to [StatsCategoryData](/vext/ref/fb/statscategorydata). |

### StatsCategoryData {#constructor-3}

> **StatsCategoryData**(other: [TreeNodeBase](/vext/ref/fb/treenodebase))

Casts an instance of type [TreeNodeBase](/vext/ref/fb/treenodebase) to [StatsCategoryData](/vext/ref/fb/statscategorydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [TreeNodeBase](/vext/ref/fb/treenodebase) | The instance to cast to [StatsCategoryData](/vext/ref/fb/statscategorydata). |

### StatsCategoryData {#constructor-4}

> **StatsCategoryData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [StatsCategoryData](/vext/ref/fb/statscategorydata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [StatsCategoryData](/vext/ref/fb/statscategorydata). |

## Properties

### {{% prop-heading "categories" %}}

> **[StatsCategoryData](/vext/ref/fb/statscategorydata)**[]

### {{% prop-heading "members" %}}

> **string**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [StatsCategoryData](/vext/ref/fb/statscategorydata) type.

