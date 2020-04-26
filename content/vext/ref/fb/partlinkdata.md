---
title: PartLinkData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[PartLinkData](#constructor-0)**() |
| **[PartLinkData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PartLinkData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "partComponentIndex1" >}} | int |
| {{< prop "partComponentIndex2" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PartLinkData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PartLinkData {#constructor-0}

> **PartLinkData**()

Creates a new [PartLinkData](/vext/ref/fb/partlinkdata) frostbite instance.

### PartLinkData {#constructor-1}

> **PartLinkData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PartLinkData](/vext/ref/fb/partlinkdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PartLinkData {#constructor-2}

> **PartLinkData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PartLinkData](/vext/ref/fb/partlinkdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PartLinkData](/vext/ref/fb/partlinkdata). |

## Properties

### {{% prop-heading "partComponentIndex1" %}}

> **int**

### {{% prop-heading "partComponentIndex2" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PartLinkData](/vext/ref/fb/partlinkdata) type.

