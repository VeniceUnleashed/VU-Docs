---
title: ColorUnlockPartData
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[ColorUnlockPartData](#constructor-0)**() |
| **[ColorUnlockPartData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[ColorUnlockPartData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "colorReference" >}} | [ColorReference](/vext/ref/fb/colorreference) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "ColorUnlockPartData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### ColorUnlockPartData {#constructor-0}

> **ColorUnlockPartData**()

Creates a new [ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata) frostbite instance.

### ColorUnlockPartData {#constructor-1}

> **ColorUnlockPartData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### ColorUnlockPartData {#constructor-2}

> **ColorUnlockPartData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata). |

## Properties

### {{% prop-heading "colorReference" %}}

> **[ColorReference](/vext/ref/fb/colorreference)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata) type.

