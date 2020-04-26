---
title: DynamicDataContainer
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[DynamicDataContainer](#constructor-0)**() |
| **[DynamicDataContainer](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[DynamicDataContainer](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fields" >}} | [DataField](/vext/ref/fb/datafield)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DynamicDataContainer" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DynamicDataContainer {#constructor-0}

> **DynamicDataContainer**()

Creates a new [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer) frostbite instance.

### DynamicDataContainer {#constructor-1}

> **DynamicDataContainer**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### DynamicDataContainer {#constructor-2}

> **DynamicDataContainer**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer). |

## Properties

### {{% prop-heading "fields" %}}

> **[DataField](/vext/ref/fb/datafield)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DynamicDataContainer](/vext/ref/fb/dynamicdatacontainer) type.

