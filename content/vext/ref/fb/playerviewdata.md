---
title: PlayerViewData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[PlayerViewData](#constructor-0)**() |
| **[PlayerViewData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[PlayerViewData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "subViews" >}} | [SubViewData](/vext/ref/fb/subviewdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PlayerViewData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PlayerViewData {#constructor-0}

> **PlayerViewData**()

Creates a new [PlayerViewData](/vext/ref/fb/playerviewdata) frostbite instance.

### PlayerViewData {#constructor-1}

> **PlayerViewData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PlayerViewData](/vext/ref/fb/playerviewdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### PlayerViewData {#constructor-2}

> **PlayerViewData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [PlayerViewData](/vext/ref/fb/playerviewdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [PlayerViewData](/vext/ref/fb/playerviewdata). |

## Properties

### {{% prop-heading "subViews" %}}

> **[SubViewData](/vext/ref/fb/subviewdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PlayerViewData](/vext/ref/fb/playerviewdata) type.

