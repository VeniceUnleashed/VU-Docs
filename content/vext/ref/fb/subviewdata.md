---
title: SubViewData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[SubViewData](#constructor-0)**() |
| **[SubViewData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SubViewData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SubViewData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SubViewData {#constructor-0}

> **SubViewData**()

Creates a new [SubViewData](/vext/ref/fb/subviewdata) frostbite instance.

### SubViewData {#constructor-1}

> **SubViewData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SubViewData](/vext/ref/fb/subviewdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SubViewData {#constructor-2}

> **SubViewData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SubViewData](/vext/ref/fb/subviewdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SubViewData](/vext/ref/fb/subviewdata). |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SubViewData](/vext/ref/fb/subviewdata) type.

