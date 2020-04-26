---
title: SwimmingStateData
---

Inherits from [CharacterStateData](/vext/ref/fb/characterstatedata)

## Summary

### Constructors

|  |
| --- |
| **[SwimmingStateData](#constructor-0)**() |
| **[SwimmingStateData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[SwimmingStateData](#constructor-2)**(other: [CharacterStateData](/vext/ref/fb/characterstatedata)) |
| **[SwimmingStateData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "bodyUnderWater" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SwimmingStateData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SwimmingStateData {#constructor-0}

> **SwimmingStateData**()

Creates a new [SwimmingStateData](/vext/ref/fb/swimmingstatedata) frostbite instance.

### SwimmingStateData {#constructor-1}

> **SwimmingStateData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SwimmingStateData](/vext/ref/fb/swimmingstatedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### SwimmingStateData {#constructor-2}

> **SwimmingStateData**(other: [CharacterStateData](/vext/ref/fb/characterstatedata))

Casts an instance of type [CharacterStateData](/vext/ref/fb/characterstatedata) to [SwimmingStateData](/vext/ref/fb/swimmingstatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [CharacterStateData](/vext/ref/fb/characterstatedata) | The instance to cast to [SwimmingStateData](/vext/ref/fb/swimmingstatedata). |

### SwimmingStateData {#constructor-3}

> **SwimmingStateData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [SwimmingStateData](/vext/ref/fb/swimmingstatedata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [SwimmingStateData](/vext/ref/fb/swimmingstatedata). |

## Properties

### {{% prop-heading "bodyUnderWater" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SwimmingStateData](/vext/ref/fb/swimmingstatedata) type.

