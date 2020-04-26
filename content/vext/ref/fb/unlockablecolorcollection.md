---
title: UnlockableColorCollection
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[UnlockableColorCollection](#constructor-0)**() |
| **[UnlockableColorCollection](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[UnlockableColorCollection](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "defaultValue" >}} | [ColorReference](/vext/ref/fb/colorreference) \| nil |
| {{< prop "possibleValues" >}} | [ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UnlockableColorCollection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UnlockableColorCollection {#constructor-0}

> **UnlockableColorCollection**()

Creates a new [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection) frostbite instance.

### UnlockableColorCollection {#constructor-1}

> **UnlockableColorCollection**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### UnlockableColorCollection {#constructor-2}

> **UnlockableColorCollection**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection). |

## Properties

### {{% prop-heading "defaultValue" %}}

> **[ColorReference](/vext/ref/fb/colorreference)** \| **nil**

### {{% prop-heading "possibleValues" %}}

> **[ColorUnlockPartData](/vext/ref/fb/colorunlockpartdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UnlockableColorCollection](/vext/ref/fb/unlockablecolorcollection) type.

